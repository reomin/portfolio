import cafeteriaImage from "../images/cafeteria.png";
import musicImage from "../images/Music.jpg";
import "../styles/Project.css";


const Project = () => {
    return (
  
      <section className="Portfolio">
        <h1 className="Title">Project</h1>
        <div>
          <h2 className="sectionTitle">
          Cafeteria Project
          </h2>
              <div className="text">
              <img src={cafeteriaImage} className="Images" alt="Avatar"/>
                <p>- August 2023</p>
                <p className ="textTitle"> Cafeteria Project</p>
                <p>ピヨピヨひよこクラブ共同プロジェクト</p>
                <p>学生向け、学食共有webアプリ</p>

                <p style={{color: 'red', marginTop: '30px'}}>使用言語: frontend Next.js backend Nest.js Mysql</p>
              </div>
        </div>

        <div style={{marginTop: '200px'}}>
          <h2 className="sectionTitle">
          Cafeteria Project
          </h2>
              <div className="text">
              <img src={musicImage} className="Images" alt="Avatar" style={{height: '400px', width: '270px', marginRight:'50px'}}/>
                <p>- August 2023</p>
                <p className ="textTitle"> The Music for android</p>
                <p>The Music for android</p>
                <p>Nfcを利用した、対応するキーホルダー専用アプリ</p>

                <p style={{color: 'red', marginTop: '30px'}}>使用言語: Java</p>
              </div>
        </div>

        
    

              
           
   </section>

       
    )
  }
  
  export default Project;