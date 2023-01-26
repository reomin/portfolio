import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "../styles/Icons.css";
import {AiFillLinkedin,AiFillMail,AiFillGithub} from "react-icons/ai";





const Icons = () => {
   return (
       <>
      <div className="icons">
                ©Portfolio
                <a href="https://github.com/reomin" target="_blank" rel="noopener noreferrer" >
                <AiFillGithub size="3vw" color="gray" opacity="0.9"/>
                </a>
                <a href="https://www.linkedin.com/in/reo-takeuchi-b2a93a1a8/" target="_blank" rel="noopener noreferrer" >
                <AiFillLinkedin size="3vw" color="gray" opacity="0.9"/>
                </a>
                <a href="https://www.linkedin.com/in/reo-takeuchi-b2a93a1a8/" target="_blank" rel="noopener noreferrer" >
                <AiFillMail size="3vw" color="gray" opacity="0.9"/>
                </a>
           </div>
          
       </>
   );
};

export default Icons;