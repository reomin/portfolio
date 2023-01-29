import "../styles/Resume.css";

const Resume = () => {
    return (
      
      <section className="Resume">
            <h1 className="Title">Resume</h1>
            <div className="education">
             <h2 className="sectionTitle">
              education
             </h2>
             <div className="text">
              <p>- March 2018</p>
              <p className ="textContents"> 日本大学高等学校　卒業</p>
             </div>
             <div className="text">
              <p>Apr 2019 -</p>
              <p className ="textContents"> 日本大学 経済学部　経済学科 入学</p>
             </div>
             <div className="text">
              <p>Feb 2022 -</p>
              <p className ="textContents"> Cornerstone International Community College 入学<br/>International Business Manegement Course</p>
             </div>
             <div className="text">
              <p>Feb 2023 -</p>
              <p className ="textContents"> Cornerstone International Community College 卒業</p>
             </div>


            </div>
          
            <div className="Work experience">
             <h2 className="sectionTitle">
             Work experience
             </h2>
             <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Minima maxime quam architecto quo inventore harum ex magni,
                dicta impedit.
             </p>
            </div>

            <div className="education">
             <h2 className="sectionTitle">
              Certification
             </h2>
             <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Minima maxime quam architecto quo inventore harum ex magni,
                dicta impedit.
             </p>
            </div>
   </section>
    )
  }
  
  export default Resume;