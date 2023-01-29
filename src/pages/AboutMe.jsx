import "../styles/AboutMe.css"
import highschoolImage from "../images/IMG_3490.png";
import schoolImage from "../images/IMG_4578.png";

const AboutMe = () => {
    return (
      <section className="AboutMe">
        <h1 className="Title">About Me</h1>
        <div className="Information">
          <h2 className="informationTitle">Reo Takeuchi</h2>
          <p className="text" textContents>aaaaaaaaaaaa</p>
        </div>

        <div className="background">
          <h2 className="sectionTitle">カナダ留学</h2>
          <p className="text" textContents>aaaaaaaaaaaa</p>
          <img src={highschoolImage} className="profileImage" alt="Avatar"/>
        </div>

        <div className="background">
          <h2 className="sectionTitle">学校生活</h2>
          <p className="text" textContents>aaaaaaaaaaaa</p>
          <img src={highschoolImage} className="profileImage" alt="Avatar"/>
          {/* 写真も挿入する */}
        </div>

      </section>

    )
  }
  
  export default AboutMe;