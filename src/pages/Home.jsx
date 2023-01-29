import profileImage from "../images/player.png";
import  "../styles/Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
      <section className="Home">
      <div className="HomeTitle">
        <img src={profileImage} className="profileImage" />
        <h1 className="ProfileName">Reo Takeuchi</h1>
        <p>This page is Reo Takeuchi portfolio site</p>
      </div>
    </section>

    )
  }
  
  export default Home;