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

  // ----- username promptBox -----
  const user = () => {
    let username = prompt("enter your name");
    while (!username) {
      username = prompt("enter your name");
    }
    setTimerId(true);
    localStorage.setItem("username", username);
  };
  // ----- user validation and Retrieve
  const userValidate = () => {
    if (!ExistingUsername) {
      user();
    }
  };
  useEffect(()=>{
    setQuestionNumber(parseInt(localStorage.getItem("question-id")));
  },[])
  // ----- question changer -----
  function nextHandler() {
    const body = document.body;
    body.classList.remove();
    setQuestionNumber((pre) => pre + 1);
    const option = document.querySelectorAll(".answer-tab li");
    option.forEach((element) => {
      element.style.pointerEvents = "all";
      element.style.borderColor = "var(--border-color)";
    });
  }
  // -----onclick answer handler -----
  const answerHandler = (e, id) => {
    let answer = quiz[id].answer.trim();
    const option = document.querySelectorAll(".answer-tab li");
    option.forEach((element) => {
      element.style.pointerEvents = "none";
      if (element.textContent === answer) {
        element.style.borderColor = "var(--green-border)";
      }
    });
    if (e.currentTarget.textContent.trim() === answer) {
      e.currentTarget.style.borderColor = "var(--green-border)";
      setScore((pre) => pre + 1);
      localStorage.setItem(ExistingUsername, score + 1);
      localStorage.setItem("question-id", id);
      console.log(e.currentTarget);
      setTimeout(() => {
        nextHandler();
        setSeconds(60)
      }, 2000);
    } else {
      e.currentTarget.style.borderColor = "var(--red-border)";
      localStorage.setItem("question-id", id);
      setTimeout(() => {
        nextHandler();
        setSeconds(60)
      }, 3000);
    }
  };
  useMemo(() => {
    const body = document.body;
    if (seconds > 30) {
      console.log("going well");
    }
    if (seconds < 30) {
      body.classList.add("half-timer");
    }
    if (seconds < 10) {
      body.classList.remove("half-timer");
      body.classList.add("quarter-half-timer");
    }
    if (seconds === 0) {
      body.classList.remove("quarter-half-timer");
      nextHandler();
      setSeconds(60);
      setTimerId(false);
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
      document.querySelector(".next-btn button").textContent =
        "result Calculating";
      document.querySelector(".next-btn button").style.pointerEvents = "none";
    }
    if (seconds === 0) {
      setTimerId(false);
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
