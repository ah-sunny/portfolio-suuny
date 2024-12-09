import aboutMeImg from "../assets/aboutMe.png"

const AboutMe = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center mx-auto my-5" >About me</h1>
            </div>
            <div className="flex gap-5">
                {/* left */}
                <div className="w-[30%]">
                    <img src={aboutMeImg} alt="" />
                </div>
                {/* right */}
                <div className="w-[60%]">
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