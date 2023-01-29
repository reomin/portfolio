import "../styles/AboutMe.css"

const AboutMe = () => {
    return (
      <section className="AboutMe">
        <h1 className="Title">About Me</h1>
        <div className="Information">
          <h2 className="sectionTitle">Reo Takeuchi</h2>
          <p className="text" textContents>aaaaaaaaaaaa</p>
        </div>

        <div className="background">
          <h2 className="sectionTitle">カナダ留学</h2>
          <p className="text" textContents>aaaaaaaaaaaa</p>
        </div>

        <div className="background">
          <h2 className="sectionTitle">学校生活</h2>
          <p className="text" textContents>aaaaaaaaaaaa</p>
          {/* 写真も挿入する */}
        </div>

      </section>

    )
  }
  
  export default AboutMe;