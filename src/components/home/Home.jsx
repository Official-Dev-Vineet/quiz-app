import image from "./images/logo.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
const Home = () => {
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
      <div className="admin">Made width ❤️ by Vineet singh</div>
    </div>
  );
};

export default Home;
