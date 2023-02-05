import "./result.css";
import image from "../home/images/logo-sm.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Result = () => {
  const { username } = useParams();
  const getScore = localStorage.getItem(username);
  const [result, setResult] = useState(0);
  useEffect(() => {
    const canvas1 = document.querySelector(".canvas-1");
    const canvas2 = document.querySelector(".canvas-2");
    const width = (parseInt(getScore) * 100) / 25;
    canvas1.style.width = width + "%";
    canvas2.style.width = `calc(100% - ${width}%)`;
    setResult(width);
  }, []);
  return (
    <div className="wrapper">
      <div className="game-logo">
        <img src={image} alt="quiz-time-logo" />
      </div>{" "}
      <h1 className="title">Result</h1>
      <div className="resultBox">
        <div className="canvas-1">
          {" "}
          <p> {result}%</p>{" "}
        </div>
        <div className="canvas-2">
          <p>{100 - result}%</p>
        </div>
      </div>
    </div>
  );
};
export default Result;
