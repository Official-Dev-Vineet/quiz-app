import React, { useState, useEffect, useMemo } from "react";
import image from "../home/images/logo-sm.png";
import audio from "../Admin/audio/bgm.mp3";
import { BsVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import "./game.css";
import { quiz } from "../Admin/Constraint";
const Game = () => {
  const user = () => {
    let username = prompt("enter your name");
    localStorage.setItem("username", username);
  };
  const userValidate = () => {
    if (!localStorage.getItem("username")) {
      user();
    } else {
      console.log("user found as " + localStorage.getItem("username"));
    }
  };
  const [isPlay, setIsPlay] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((pre) => pre - 1);
      }
    }, 1000);
    const updater = setInterval(() => {
      if (seconds === 0) {
        clearInterval(myInterval);
        nextHandler();
      }
    }, 1000);
    userValidate();
  }, []);
  function nextHandler() {
    setQuestionNumber((pre) => pre + 1);
  }
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
                return <li key={index}>{element}</li>;
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
