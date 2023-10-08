import "../styles/Resume.css";

const Resume = () => {
    return (
      
      <section className="Resume">
            <h1 className="Title">Resume</h1>
          
            <div className="Work experience">
             <h2 className="sectionTitle">
             Work experience
             </h2>
             <div className="text">
              <p>Apr 2021 - Aug 2021</p>
              <p className ="textTitle">Google Ads Quality Rater(アルバイトスタッフ) -2021年8月</p>
              {/* 仕事内容の説明何をしていたか */}
              <p className ="textContents">SEO事業。Youtube,google内の広告の評価をした。</p>
              
             </div>
             <div className="text">
             <p>Jul 2021 - Dec 2021</p>
              <p className ="textTitle">Evolany co Ltd (学生インターン)</p>
              {/* 仕事内容の説明何をしていたか */}
              <p className ="textContents">ソフトウェアエンジニアインターンシップとして、研修でシステムの開発、(SNSアプリの開発) 既存アプリのUIの改善、社内評価アプリ開発のプロジェクトへの参加。また顧客やアプリケーションのニーズに沿ったAPIの作成も行った。</p>
             </div>

             <div className="text">
             <p>Jul 2022 - Aug 2022</p>
              <p className ="textTitle">Myadcenter co Ltd (学生インターン)</p>
              {/* 仕事内容の説明何をしていたか */}
              <p className ="textContents">Typescript、Reactの研修を通じて学習した。 自分の学習内容の発表等、社員の方々とコミュニケーションをとった。</p>
             </div>             

             <div className="text">
             <p>1 week</p>
              <p className ="textTitle">マイナビハッカソン型インターンシップ</p>
              {/* 仕事内容の説明何をしていたか */}
              <p className ="textContents">Next.js、Reactを使用して問題のあるアプリケーションの改善をハッカソンを通じて行った。</p>
             </div>   

             <div className="text">
             <p>April 2023 - Now</p>
              <p className ="textTitle">株式会社イング</p>
              {/* 仕事内容の説明何をしていたか */}
              <p className ="textContents"></p>
             </div>  

            </div>

   </section>
    )
  }
  
  export default Resume;