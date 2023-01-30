import image from "./images/logo.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
const Home = () => {
  let LastScore = score();
function score(){
  let lastUserData=localStorage.getItem("username");
  if(localStorage.getItem("username")){
    return `High Score : ${localStorage.getItem(lastUserData)}`;
  }
}
  return (
    <div className="wrapper">
      <div className="image">
        <img src={image} alt="quiz-time" />
      </div>
      <div className="start-btn">
        <Link to={"/game"}>
          <button>
            start now{" "}
            <span>
              {<MdOutlineArrowForwardIos />}
              {<MdOutlineArrowForwardIos />}
              {<MdOutlineArrowForwardIos />}
            </span>
          </button>
        </Link>
      </div>
      <div className="score-text">
        <h2 style={{ textAlign: "center" }}>
          {LastScore}
        </h2>
      </div>
      <div className="admin">Made width ❤️ by Vineet singh</div>
    </div>
  );
};

export default Home;
