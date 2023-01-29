import Image from "../images/player.png";
import "../styles/Portfolio.css";


const Portfolio = () => {
    return (
  
        <section className="Portfolio">
      
        <img
        className="rounded-full"
        src={Image}
        width="1000"
        height="1000"
        alt="Avatar"
      />
     </section>
    )
  }
  
  export default Portfolio;