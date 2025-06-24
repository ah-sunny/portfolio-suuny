
import { useEffect, useState } from "react";
import sunnyImg from "../assets/trans.png";
import SkillPanel from "./AboutMe/SkillPanel";
import Education from "./AboutMe/Education";

const categories = ['Front-end', 'Back-end', 'Tools', 'Soft Skill'];


const AboutMe = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % categories.length);
        }, 1300); // 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-gray-200">
            <div>
                <h1 className="w-auto lg:w-[20%] text2xl lg:text-4xl font-bold text-center mx-auto my-5 border-b-2 border-dashed pb-4 " >About

                    <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-wide  "> me</span>
                </h1>

            </div>

            {/* first part */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12  pt-10">
                {/* left */}
                <div className="w-[95%] lg:w-[40%]">
                    <img src={sunnyImg} alt="sani image" className="border-2 border-cyan-700 rounded-xl px-5 " />
                </div>
                {/* right */}
                <div className="w-[95%] lg:w-[60%] ">
                    {/* text  */}
                    <div className="text-start text-sm">

                        <p>
                            A dedicated Frontend React Developer passionate about creating dynamic and responsive web applications. With a solid foundation in MongoDB, Express.js, React, JavaScript ,Node.js, & Next JS . I bring a comprehensive approach to building full-stack solutions.
                            <br />
                            <br />

                            I consider myself a quick learner, self-motivated, responsible, and disciplined person who can work under pressure and solve problems in critical situations with analytical knowledge and the latest technology.
                        </p>
                    </div>

                    {/* skill */}
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold border-dashed border-b-2 pb-2">Technical
                            <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-wide  "> Proficiency</span>
                        </h1>
                        <div>
                            {/* <h1>Front-End</h1> */}
                            <SkillPanel category={categories[activeIndex]} />
                        </div>
                    </div>

                </div>
            </div>

            {/* second part  */}
            <div className="mt-9">

                <h1 className="text-2xl border-dashed border-b-2 pb-2 w-auto lg:w-[29%]">Education
                    <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-wide  "> Qualifications</span>
                </h1>
                <div className="mt-9 text-2xl" >
                    <Education></Education>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;




{/* name of each tab group should be unique */ }
{/* <div className="tabs tabs-box">
  <input type="radio" name="my_tabs_6" className="tab w-1/2" aria-label="Education Qualifications" />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    
 
    <Education></Education>
    </div>

  <input type="radio" name="my_tabs_6" className="tab w-1/2" aria-label="Technical Proficiency" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6 w-screen">
    Tab content 2
    <SkillWithImage></SkillWithImage>
    </div>

  
</div> */}