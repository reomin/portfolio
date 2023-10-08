import profileImage from "../images/mypic.jpg";
import  "../styles/Home.css";
import { FaPhp,FaReact,FaNode,FaAws} from 'react-icons/fa';
import {DiJavascript} from "react-icons/di";
import  "../App.css";

const Home = () => {
    return (
      <section className="Home">
        <div className="HomeTitle">
          <img src={profileImage} className="profileImage" alt="Avatar"/>
          <div className="HomeContents">
          <h1 className="ProfileName">Reo Takeuchi</h1>
          <h3 className="subName">竹内れおのポートフォリオサイトです</h3>
          <div className ="aboutSkill">
          <div className="icons">
            <div className ="icon-container">
              <div className="icon">
                <a href="https://github.com/reomin" target="_blank" rel="noopener noreferrer" className="images" >
                        <FaPhp size="7vw" color="black" opacity="0.9"/>
                </a>
              </div>
              <div className="icon">
              <a href="https://github.com/reomin" target="_blank" rel="noopener noreferrer" className="images" >
                        <FaReact size="7vw" color="black" opacity="0.9"/>
                </a>
              </div>
                <div className="icon">
                <a href="https://github.com/reomin" target="_blank" rel="noopener noreferrer" className="images" >
                        < DiJavascript size="7vw" color="black" opacity="0.9"/>
                </a>
                </div>
                <div className="icon">
                <a href="https://github.com/reomin" target="_blank" rel="noopener noreferrer" className="images" >
                        < FaNode size="7vw" color="black" opacity="0.9"/>
                </a>
                </div>

                <div className="icon">
                <a href="https://github.com/reomin" target="_blank" rel="noopener noreferrer" className="images" >
                        < FaAws size="7vw" color="black" opacity="0.9"/>
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>

    </section>

    )
  }
  
  export default Home;