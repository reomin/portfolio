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
             <div className="text">
              <p>Apr 2021 - Aug 2021</p>
              <p className ="textTitle">Google Ads Quality Rater(アルバイトスタッフ) -2021年8月</p>
              {/* 仕事内容の説明何をしていたか */}
              <p className ="textContents">nnckdcnkckcdkcdknkcknkcdkdcnkcndkcndkcnkcnkcnkdncdkcndkcndkcndkcndkdkcdnk</p>
              
             </div>
             <div className="text">
             <p>Jul 2021 - Dec 2021</p>
              <p className ="textTitle">Evolany co Ltd (学生インターン)</p>
              {/* 仕事内容の説明何をしていたか */}
              <p className ="textContents">nnckdcnkckcdkcdknkcknkcdkdcnkcndkcndkcnkcnkcnkdncdkcndkcndkcndkcndkdkcdnk</p>
             </div>

             <div className="text">
             <p>Jul 2022 - Aug 2022</p>
              <p className ="textTitle">Myadcenter co Ltd (学生インターン)</p>
              {/* 仕事内容の説明何をしていたか */}
              <p className ="textContents">nnckdcnkckcdkcdknkcknkcdkdcnkcndkcndkcnkcnkcnkdncdkcndkcndkcndkcndkdkcdnk</p>
             </div>             

             <div className="text">
             <p>1 week</p>
              <p className ="textTitle">マイナビハッカソン型インターンシップ</p>
              {/* 仕事内容の説明何をしていたか */}
              <p className ="textContents">nnckdcnkckcdkcdknkcknkcdkdcnkcndkcndkcnkcnkcnkdncdkcndkcndkcndkcndkdkcdnk</p>
             </div>   

            </div>

            <div className="Certification">
             <h2 className="sectionTitle">
              Certification
             </h2>
             <p className="text">
             Jul 2021 <br/>
                TOEFL IBT 73点 取得  
             </p>
            </div>
   </section>
    )
  }
  
  export default Resume;