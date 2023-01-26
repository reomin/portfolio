import Image from "../images/player.png";


const Portfolio = () => {
    return (
    <div className="portfolio">
        <div classname="pagetitle">
          <h2>ポートフォリオページ</h2>
        </div>
        <div className="educationTitle">
          <h3>Education</h3>
          <div className="educationContents">
            ー大学卒業 ー高校入学<br /> ー強い
          </div>
        </div>
        <div className="wrapper-3">
          <div className="container"></div>
        </div>

        <img
        className="rounded-full"
        src={Image}
        width="1000"
        height="1000"
        alt="Avatar"
      />

    </div>
    )
  }
  
  export default Portfolio;