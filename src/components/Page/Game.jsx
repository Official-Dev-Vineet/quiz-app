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
  const [questionNumber, setQuestionNumber] = useState(1);
  const ExistingUsername = localStorage.getItem("username");
  let seconds = 60;
  const [score, setScore] = useState(0);

  // ----- username promptBox -----
  const user = () => {
    let username = prompt("enter your name");
    while (!username) {
      username = prompt("enter your name");
    }
    localStorage.setItem("username", username);
  };
  // ----- user validation and Retrieve
  const userValidate = () => {
    if (!ExistingUsername) {
      user();
    }
  };
  // ----- question changer -----
  function nextHandler() {
    clearInterval(timerId);
    setQuestionNumber((pre) => pre + 1);
    const option = document.querySelectorAll(".answer-tab li");
    option.forEach((element) => {
      element.style.pointerEvents = "all";
      element.style.borderColor = "var(--border-color)";
    });
  }
  function answerHandler(e, id) {
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
      console.log(id);
      clearInterval(timerId);
      setTimeout(() => {
        nextHandler();
      }, 3000);
    } else {
      e.currentTarget.style.borderColor = "var(--red-border)";
      localStorage.setItem("question-id", id);
      clearInterval(timerId);
      setTimeout(() => {
        nextHandler();
      }, 3000);
    }
  }
  let timerId = setInterval(() => {
    seconds--;
    let timer = document.querySelector(".timer");
    seconds < 10
      ? (timer.textContent = `0${seconds}`)
      : (timer.textContent = seconds);
    if (seconds === 0) {
      clearInterval(timerId);
      nextHandler();
    }
    if (seconds <= 30) {
      document.querySelector(".game-ui").style.background =
        "var(--body-bg-yellow)";
      document.querySelector(".timer-tab").style.background = "var(--yellow)";
      document.querySelector(".next-btn button").style.color =
        "var(--yellow-text)";
    }
    if (seconds <= 10) {
      document.querySelector(".game-ui").style.background =
        "var(--body-bg-red)";
      document.querySelector(".timer-tab").style.background = "var(--red)";
      document.querySelector(".next-btn button").style.color =
        "var(--red-text)";
    }
    if (seconds > 30) {
      document.querySelector(".game-ui").style.background =
        "var(--body-bg-green)";
      document.querySelector(".timer-tab").style.background =
        "var(--btn-bg-success)";
      document.querySelector(".next-btn button").style.color =
        "var(--green-text)";
    }
  }, 1000);
  userValidate();
  // ----- retrieve old question -----
  function questionNumberRetrieve() {
    let number = localStorage.getItem("question-id");
  }
  questionNumberRetrieve();
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
            {questionNumber < 10 ? `0${questionNumber}` : questionNumber}/
            {quiz.length}
          </p>
        </div>
      </header>
      <main>
        {
          <div className="quiz-container">
            <div className="question-tab">
              <div className="question">
                <span className="number">{questionNumber}.</span>
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
