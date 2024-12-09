import { Typewriter } from "react-simple-typewriter";
import sunnyImg from "../assets/bannerImg.jpg"
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="text-gray-200 my-20 p-3 lg:p-0 flex flex-col lg:flex-row justify-between gap-10 ">
            {/* text part */}
            <div className="w-auto lg:w-[60%] space-y-3 pt-2">
                <h1 className="text-2xl lg:text-5xl font-extrabold ">I&apos;m Arafat Sunny <br />
                    <Typewriter
                        words={[' A Front-End Developer ', 'Web Developer ', 'MERN stack Developer', ' A Front-End Developer ']}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={120}
                        deleteSpeed={30}
                        delaySpeed={1000}
                    />

                </h1>



                <p className=" font-medium leading-7 pt-5 " >
                    🔹 I&apos;m a dedicated web developer and versatile front end developer with a passion for creating efficient and user-friendly web applications. With a keen eye for detail and a commitment to quality, I thrive in environments that challenge me to push the boundaries of web development.

                    <br />
                    🔹I develop and maintain responsive, high-performance web applications that cater to the needs of modern users. My expertise includes HTML, CSS, Tailwind, JavaScript, React.js,  and Next.js enabling me to create visually appealing and interactive user interfaces. In addition to front-end technologies, comprising MongoDB, Express.js, React, and Node.js. This full-stack capability allows me to build comprehensive solutions that integrate front-end and back-end functionalities seamlessly.
                </p>

                <div className="flex gap-3" >
                   <Link to='/contact-me' > <button className="btn btn-primary lg:text-xl" >Contact me </button></Link>
                    <a href="../Resume.pdf"
                    download='../Resume.pdf'
                    >
                    <button className="btn btn-primary btn-outline lg:text-xl p-1 "> 
                        Download Resume
                        <FaDownload />
                        </button>
                    </a>
                </div>

            </div>



            {/*  image part*/}
            <div className="w-auto lg:w-[30%] rounded-xl   ">
                <img className="h-[360px] w-72 lg:m-4 border-2 border-gray-400  lg:rotate-6 hover:rotate-0  rounded-2xl object-cover 
                hover:transition
                   "
                    src={sunnyImg} alt="sunny" />

            </div>


        </div>
    );
};

export default Banner;

// origin-center hover:origin-top
// rotate-12 hover:rotate-0