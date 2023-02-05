import React, { useState, useEffect, useMemo } from "react";
import image from "../home/images/logo-sm.png";
import audio from "../Admin/audio/bgm.mp3";
import { BsVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import "./game.css";
import { quiz } from "../Admin/Constraint";
const Game = () => {
  // ----- variable -----
  const [isPlay, setIsPlay] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const ExistingUsername = localStorage.getItem("username");
  const [seconds, setSeconds] = useState(60);
  const [score, setScore] = useState(0);
  const [timerId, setTimerId] = useState(false);
  const [resultId, setResultId] = useState(false);
  const [activeClass, setActiveClass] = useState("");

  // ----- username promptBox -----
  const user = () => {
    let username = prompt("enter your name");
    while (!username) {
      username = prompt("enter your name");
    }
    localStorage.setItem("username", username);
    setTimerId(true);
  };
  // ----- user validation and Retrieve
  const userValidate = () => {
    if (!ExistingUsername) {
      user();
    }
  };
  // ----- retrieve old question on refresh or if user return
  useEffect(() => {
    if (localStorage.getItem("question-id") === null) {
      setQuestionNumber(0);
    } else {
      setQuestionNumber(parseInt(localStorage.getItem("question-id")));
    }
  }, []);
  // ----- question changer -----
  const nextHandler = () => {
    document.querySelector(".next-btn button").style.pointerEvents = "all";
    document.querySelector(".next-btn button").style.filter = "opacity(100%)";
    setSeconds(60);
    const body = document.body;
    if (activeClass.length > 0) {
      body.classList.remove(activeClass);
    }
    localStorage.setItem("question-id", questionNumber + 1);
    setQuestionNumber((pre) => pre + 1);
    const option = document.querySelectorAll(".answer-tab li");
    option.forEach((element) => {
      element.style.pointerEvents = "all";
      element.style.borderColor = "var(--border-color)";
    });
  };
  // -----onclick answer handler -----
  const answerHandler = (e, id) => {
    let answer = quiz[id].answer.trim();
    const option = document.querySelectorAll(".answer-tab li");
    option.forEach((element) => {
      element.style.pointerEvents = "none";
      document.querySelector(".next-btn button").style.pointerEvents = "none";
      document.querySelector(".next-btn button").style.filter = "opacity(10%)";
      if (element.textContent === answer) {
        element.style.borderColor = "var(--green-border)";
      }
    });
    if (id < 24) {
      if (e.currentTarget.textContent.trim() === answer) {
        e.currentTarget.style.borderColor = "var(--green-border)";
        setScore((pre) => pre + 1);
        localStorage.setItem(ExistingUsername, score + 1);
        localStorage.setItem("question-id", id);
        setTimeout(() => {
          nextHandler();
          setSeconds(60);
        }, 2000);
      } else {
        e.currentTarget.style.borderColor = "var(--red-border)";
        localStorage.setItem("question-id", id);
        setTimeout(() => {
          nextHandler();
          setSeconds(60);
        }, 3000);
      }
    } else {
      if (e.currentTarget.textContent.trim() === answer) {
        e.currentTarget.style.borderColor = "var(--green-border)";
        setScore((pre) => pre + 1);
        localStorage.setItem(ExistingUsername, score + 1);
        localStorage.setItem("question-id", 0);
        setTimeout(() => {
          resultHandler();
        }, 2000);
      } else {
        e.currentTarget.style.borderColor = "var(--red-border)";
        localStorage.setItem("question-id", 0);
        setTimeout(() => {
          resultHandler();
        }, 2000);
      }
    }
  };
  // ----- result handler -----
  const resultHandler = () => {
    window.history.pushState(score, "result", `/result/${ExistingUsername}`);
  };
  useMemo(() => {
    const body = document.body;
    const classList = document.body.classList[0];
    if (seconds > 30) {
      body.classList.remove(classList);
    }
    if (seconds < 30) {
      body.classList.add("half-timer");
      setActiveClass("half-timer");
    }
    if (seconds < 10) {
      body.classList.remove(activeClass);
      body.classList.add("quarter-half-timer");
      setActiveClass("quarter-half-time");
    }
    if (seconds === 0) {
      body.classList.remove(activeClass);
      questionNumber < 24 ? nextHandler() : resultHandler();
      setSeconds(60);
    }
  }, [seconds]);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((pre) => pre - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timerId]);
  useEffect(() => {
    if (questionNumber == 24) {
      document.querySelector(".next-btn button").style.pointerEvents = "none";
      setTimeout(() => {
        resultHandler();
      }, 2000);
    }
    userValidate();
  }, [questionNumber]);
  return (
    <div className="game-ui">
      <header>
        <div className="game-logo">
          <img src={image} alt="quiz-time" />
        </div>
        <div className="game-controls">
          <span className="icon" onClick={() => setIsPlay((pre) => !pre)}>
            {isPlay ? <BsVolumeUpFill /> : <BsFillVolumeMuteFill />}
          </span>

          <p className="text-controls">
            {questionNumber < 10
              ? `0${questionNumber + 1}`
              : questionNumber + 1}
            /{quiz.length}
          </p>
        </div>
      </header>
      <main>
        {
          <div className="quiz-container">
            <div className="question-tab">
              <div className="question">
                <span className="number">{questionNumber + 1}.</span>
                {quiz[questionNumber].question}
              </div>
              <div className="timer-tab">
                00 :
                <span className="timer">
                  {seconds < 10 ? `0${seconds}` : seconds}
                </span>
              </div>
            </div>
            <ul className="answer-tab">
              {quiz[questionNumber].option.map((element, index) => {
                return (
                  <li
                    key={index}
                    onClick={(e) => answerHandler(e, questionNumber)}
                  >
                    {element}
                  </li>
                );
              })}
            </ul>
            <div className="next-btn">
              <button onClick={() => nextHandler()}>
                Next <span className="icons">{<MdArrowForwardIos />}</span>
              </button>
            </div>
          </div>
        }
      </main>
      <div className="admin">Made width ❤️ by Vineet singh</div>
    </div>
  );
};

export default Game;
