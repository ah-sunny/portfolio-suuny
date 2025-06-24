import { Typewriter } from "react-simple-typewriter";
import sunnyImg from "../assets/trans.png";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {  motion } from "framer-motion"; 

const Photo = () => {
  const circleColors = ["#00ff99", "#00ff9980"];
  const circleVarients = {
    initial: {
      strokeDasharray: "24 10 0 0",
      rotate: 0,
      opacity: 0,
    },
    animate: (index) => ({ // Removed extra braces and corrected syntax
      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360], // Replaced semicolon with a comma
      opacity: 1,
      transition: {
        strokeDasharray: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        },
        rotate: {
          duration: 20, // Fixed typo "duraction" to "duration"
          repeat: Infinity,
          repeatType: "reverse",
        },
        opacity: {
          duration: 0.1, // Fixed typo "duraction" to "duration"
          delay: 0.5 + index * 0.1, // Fixed "2+index 8 * 0.4" to proper syntax
          ease: "easeIn",
        },
      },
    }),
  };

  return (
    <div className="text-gray-200 my-20 p-3 lg:p-0 flex flex-col lg:flex-row justify-between  ">
      {/* text part */}
      <div className="w-auto lg:w-[60%] space-y-3 pt-2">
        <h1 className="text-xl lg:text-5xl font-extrabold ">
          I&apos;m 
           <span className="bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent -tracking-wide  "> Arafat Hossain Sani</span> 
          <br />  
          <span className="text-2xl">
            
            <Typewriter
            words={[
              " A Front-End Developer ",
              " Web Developer ",
              " MERN stack Developer",
              " A Front-End Developer ",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={30}
            delaySpeed={1000}
          />
          </span>
        </h1>

        <p className="font-medium leading-7 pt-5">
          🔹 I&apos;m a dedicated web developer and versatile front-end
          developer with a passion for creating efficient and user-friendly web
          applications.
          <br /> <br />

          🔹 I develop and maintain responsive, high-performance web
          applications that cater to the needs of modern users. My expertise
          includes HTML, CSS, Tailwind, JavaScript, React.js, and Next.js, extending to full-stack capabilities with MongoDB, Express.js, and Node.js for comprehensive solutions.
        </p>

        <div className="flex gap-3">
          <Link to="/contact-me">
            <button className="btn btn-primary lg:text-base">Contact me</button>
          </Link>
          <a href="../Resume.pdf" download="../Resume.pdf">
            <button className="btn btn-primary btn-outline lg:text-sm p-4">
              Download Resume
              <FaDownload />
            </button>
          </a>
        </div>
      </div>

      {/* image part */}
      <div className="w-auto lg:w-[40%] rounded-xl">
        <motion.div 
          className="relative w-full "
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.1, ease: "easeIn" }, 
          }}
        >
          <motion.div 
            className="absolute size-[230px] lg:size-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.1, duration: 0.4, ease: "easeInOut" },
            }}
          >
            <img
              className=" mx-auto text-center rounded-full z-10"
              src={sunnyImg}
              alt="sunny"
            />
          </motion.div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 506 506"
            fill="none"
            className="w-[300px] lg:w-[426px] h-[300px] lg:h-[436px] mx-auto text-center z-50"
          >
            {
              circleColors.map((color,index)=>(
                <motion.circle
                key={index}
              cx="253"
              cy="253"
              r={240 - index * 15}
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial="initial"
              animate = "animate"
              variants = {circleVarients}
              custom={index}
            />
              ))
            }
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Photo;
