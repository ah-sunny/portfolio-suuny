import aboutMeImg from "../assets/aboutMe.png"

const AboutMe = () => {
    return (
        <div className="text-gray-200">
            <div>
                <h1 className="w-auto lg:w-[22%] text-2xl lg:text-5xl font-bold text-center mx-auto my-5 border-b-2 border-dashed pb-4 " >About me</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12  pt-10">
                {/* left */}
                <div className="w-[95%] lg:w-[30%]">
                    <img src={aboutMeImg} alt="" />
                </div>
                {/* right */}
                <div className="w-[95%] lg:w-[60%] ">
                    <div className="flex justify-between text-xl mb-7">
                        <div>edu</div>
                        <div>exp</div>
                        <div>skill</div>
                    </div>
                    <p>
                    A dedicated Frontend React Developer passionate about creating dynamic and responsive web applications. With a solid foundation in MongoDB, Express.js, React, JavaScript ,Node.js, & Next JS . I bring a comprehensive approach to building full-stack solutions.
                    <br />
                    I consider myself a quick learner, self-motivated, responsible, and disciplined person who can work under pressure and solve problems in critical situations with analytical knowledge and the latest technology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;