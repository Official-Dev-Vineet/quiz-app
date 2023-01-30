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
  let seconds = 60;
  let score = 0;

  // ----- username promptBox -----
  const user = () => {
    let username = prompt("enter your name");
    localStorage.setItem("username", username);
  };

  // ----- user validation and Retrieve
  const userValidate = () => {
    if (!localStorage.getItem("username")) {
      user();
    } else {
      console.log("user found as " + localStorage.getItem("username"));
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
      console.log("done");
    });
  }
  function answerHandler(e, userAns, id) {
    const option = document.querySelectorAll(".answer-tab li");
    option.forEach((element) => {
      element.style.pointerEvents = "none";
      console.log("done");
    });
    let answer = quiz[id].answer.trim();
    if (e.currentTarget.textContent.trim() === answer) {
      e.currentTarget.style.borderColor = "var(--green-border)";
      score++;
    } else {
      e.currentTarget.style.borderColor = "var(--red-border)";
    }
  }
  const timerId = setInterval(() => {
    seconds--;
    let timer = document.querySelector(".timer");
    seconds < 10
      ? (timer.textContent = `0${seconds}`)
      : (timer.textContent = seconds);
    if (seconds === 0) {
      clearInterval(timerId);
      nextHandler();
    }
  }, 1000);
  userValidate();
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
                    onClick={(e) => answerHandler(e, element, questionNumber)}
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
