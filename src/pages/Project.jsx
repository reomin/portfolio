import Image from "../images/sorry.png";
import "../styles/Project.css";


const Project = () => {
    return (
  
      <section className="Portfolio">
        <h1 className="Title">Project</h1>
         <div className="ProjectText">
          <img
          className="rounded-full"
          src={Image}
          width="200"
          height="200"
          alt="Avatar"
          />
          <h3 className="textContents">
              まだ個人で開発したプロジェクトがありません。  
          </h3>
        </div>
      </section>

       
    )
  }
  
  export default Project;