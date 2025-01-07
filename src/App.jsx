import AboutMe from "./component/AboutMe"
// import Banner from "./component/Banner"
import ContactMe from "./component/ContactMe"
import MyProject from "./component/MyProject"
import MySkill from "./component/MySkill"
import Photo from "./component/Photo"
import Stats from "./component/Stats"


function App() {


  return (
    <>

   
      <div className="container mx-auto  space-y-32  ">
        {/* <Banner></Banner> */}
        <Photo></Photo>
        <Stats></Stats>
        <AboutMe></AboutMe>
        <MyProject></MyProject>
        <MySkill></MySkill>
        <ContactMe></ContactMe>
      </div>
     



    </>
  )
}

export default App
