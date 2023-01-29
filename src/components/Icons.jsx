import "../styles/Icons.css";
import {AiFillLinkedin,AiFillMail,AiFillGithub} from "react-icons/ai";

const Icons = () => {
   return (
       <>
        <div className="icons">
               <h3> Information </h3> 
                <a href="https://github.com/reomin" target="_blank" rel="noopener noreferrer" className="images" >
                <AiFillGithub size="3vw" color="gray" opacity="0.9"/>
                </a>
                <a href="https://www.linkedin.com/in/reo-takeuchi-b2a93a1a8/" target="_blank" rel="noopener noreferrer" className="images">
                <AiFillLinkedin size="3vw" color="gray" opacity="0.9"/>
                </a>
                <a href="https://www.linkedin.com/in/reo-takeuchi-b2a93a1a8/" target="_blank" rel="noopener noreferrer" className="images">
                <AiFillMail size="3vw" color="gray" opacity="0.9"/>
                </a>
        </div>
          
       </>
   );
};

export default Icons;