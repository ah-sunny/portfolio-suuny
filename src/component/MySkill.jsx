import Marquee from "react-fast-marquee";


const MySkill = () => {

    const skill = [
        "HTML5", "CSS3", 'Tailwind', "Reactjs",
        "JavaScript", "Expressjs", "C",
        "Nextjs", "Nodejs", "JWT", "Firebase", 'Java', "Mongodb",
        'Git', "Github", "Vercel", "Netlify"
    ]

    return (
        <div className="text-gray-200">
            <div>
                <h1 className="w-auto  lg:w-[22%] text-3xl lg:text-5xl font-bold text-center mx-auto my-5 border-b-2 border-dashed pb-4 " >My Skill</h1>
                <p className="w-auto lg:w-[40%] text-center mx-auto">I still have alot more to learn but these are some of the skills I have aquired along my journey so far.</p>
            </div>

            {/*  */}

            <div className="pt-10">

                <Marquee
                    pauseOnHover='true'
                    gradient
                    gradientColor='#030014'
                    gradientWidth={250}
                    direction="right" speed={100}>

                    {
                        skill.map((item, idx) => (<p key={idx} className="border-2 font-bold mr-5 border-blue-700 p-4 rounded-full" >
                            {item}
                        </p>))
                    }
                </Marquee>

                <div className="pt-7">
                    <Marquee
                        pauseOnHover='true'
                        gradient
                        gradientColor='#030014'
                        gradientWidth={250}
                        direction="left"
                        speed={130} >

                        {
                            skill.map((item, idx) => (<p key={idx} className="border-2 font-bold mr-5 border-blue-700 p-4 rounded-full" >
                                {item}
                            </p>))
                        }
                    </Marquee>
                </div>



            </div>
        </div>
    );
};

export default MySkill;