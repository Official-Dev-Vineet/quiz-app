import image from "../home/images/logo.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    useEffect(()=>{
        let btn=document.querySelector("#btn")
        setTimeout(()=>{
            btn.click();
        },5000)
            },[])
  return (
    <div className="wrapper">
      <div className="image">
        <img src={image} alt="quiz-time" />
      </div>
      <div className="start-btn">
      <button className="error">Page not found 🥲</button>
        <Link to={"/"}>
          <button id="btn">
            Go to home {" "}
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
