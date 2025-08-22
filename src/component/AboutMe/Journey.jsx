
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaPaintBrush, FaUsers } from "react-icons/fa";

const journeyData = [
  {
    icon: <FaCode className="text-3xl text-cyan-400" />,
    title: "The Spark of Curiosity",
    description: "My journey began with a simple curiosity about how websites were built. I started with the fundamentals of HTML and CSS, and I was immediately hooked by the ability to create something from scratch.",
  },
  {
    icon: <FaPaintBrush className="text-3xl text-pink-500" />,
    title: "Diving into Design",
    description: "As I delved deeper, I became fascinated with the design aspect of web development. I learned about UI/UX principles and started using Tailwind CSS to create beautiful and responsive layouts.",
  },
  {
    icon: <FaRocket className="text-3xl text-green-500" />,
    title: "Exploring the MERN Stack",
    description: "My passion for building dynamic and interactive applications led me to the MERN stack. I embraced React for the front-end, Node.js and Express for the back-end, and MongoDB for the database.",
  },
  {
    icon: <FaUsers className="text-3xl text-purple-500" />,
    title: "Collaboration and Growth",
    description: "I believe in the power of collaboration and continuous learning. I'm always excited to work with talented teams, contribute to innovative projects, and explore new technologies to enhance my skills.",
  },
];

const Journey = () => {
  return (
    <div className="mt-9">
      <h1 className="text-2xl border-dashed border-b-2 pb-2 w-auto lg:w-[20%] -tracking-widest lg:tracking-normal">
        My
        <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-widest"> Journey</span>
      </h1>
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-8">
        {journeyData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
                                                                                                                                                                                                                                    className="flex items-start space-x-4 p-6 rounded-lg bg-white dark:bg-slate-800 shadow-lg border-2 border-transparent hover:border-cyan-400"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
