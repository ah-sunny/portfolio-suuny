import AboutMe from "./component/AboutMe"
import Banner from "./component/Banner"
import ContactMe from "./component/ContactMe"
import MyProject from "./component/MyProject"
import Stats from "./component/Stats"


function App() {


  return (
    <>

   
      <div className="container mx-auto  space-y-32  ">
        <Banner></Banner>
        <Stats></Stats>
        <AboutMe></AboutMe>
        <MyProject></MyProject>
        <ContactMe></ContactMe>
      </div>
     



    </>
  )
}

export default App
