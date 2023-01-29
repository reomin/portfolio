import profileImage from "../images/player.png";
import  "../styles/Home.css";
import { FaPhp,FaReact} from 'react-icons/fa';
import {DiJavascript} from "react-icons/di";


const Home = () => {
    return (
      <section className="Home">
      <div className="HomeTitle">
        <img src={profileImage} className="profileImage" alt="Avatar"/>
        <div className="HomeContents">
        <h1 className="ProfileName">Reo Takeuchi</h1>
        <p>竹内れおのポートフォリオサイトです</p>
      </div>
      </div>
       <div className ="aboutSkill">
       <h3 className="secondTitle">使用したことある言語</h3>
         <div className="icons">
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
          </div>


         
         
            

      </div>

    </section>

    )
  }
  
  export default Home;