import "../styles/AboutMe.css"
import highschoolImage from "../images/IMG_3490.png";
import CanadaImage from "../images/IMG_4112.jpg";

const AboutMe = () => {
    return (
      <section className="AboutMe">
        <h1 className="Title">About Me</h1>

        <div className="background">
          <h2 className="sectionTitle">カナダ留学</h2>
          <p className="textContents">在学中、国籍の違う学生たちとグループワークをする機会が多くありました。課題のプレゼンテーションに向けたミーティングをする際、授業へのモチベーションの差から生じた参加率のばらつきがあり、また、ディスカッションをリードするメンバーもおらず、プレゼンの準備が思うように進まないことが多々ありました。この問題を解決するため、事前にタスクを明確にし、各メンバーに仕事を割り当てるなど、苦手意識のあったリーダーシップをとり、話し合いが円滑に進むよう努めました。
これらの変化を経て、入学初月、78%だったプレゼンテーションの評価が、最終月には95%まで上がりました。
</p>
          <img src={CanadaImage} className="CanadaImage" alt="Avatar"/>
        </div>

        <div className="background">
          <h2 className="sectionTitle">学校生活</h2>
         <div className="secondContents">
         <p className="textContents">私は大学でフィッシングサークルの代表を務めていました。具体的な活動としてはクラスメイトでもある仲間3人とサークルを発足して以降、SNSを利用して他大学のサークルとのコミュニケーションや、合同での活動やサークルの規約作り、新入生への入部の呼びかけ等の多岐にわたる活動を行なってきました。現在ではサークル部員数も30人程の規模になり、OB兼アドバイザーとして活躍しています。</p>
         </div> 
          {/* <img src={highschoolImage} className="highschoolImage" alt="Avatar"/> */}
          {/* 写真も挿入する */}
        </div>


      </section>

    )
  }
  
  export default AboutMe;