import { motion } from 'framer-motion';

const skillsData = {
  'Back-end': [
    { name: 'Node.js', percent: 60 },
    { name: 'Express.js', percent: 65 },
    { name: 'Mongodb', percent: 70 },
    { name: 'MySql', percent: 40 },
  ],
  'Front-end': [
    { name: 'HTML5', percent: 90 },
    { name: 'Tailwind CSS', percent: 85 },
    { name: 'JavaScript', percent: 80 },
    { name: 'React', percent: 75 },
  ],
  Tools: [
    { name: 'Git & GitHub', percent: 65 },
    { name: 'Vercel', percent: 60 },
    { name: 'Netlify', percent: 70 },
    { name: 'Firebase', percent: 70 },
  ],
  'Soft Skill': [
    { name: 'Communication', percent: 80 },
    { name: 'Teamwork', percent: 75 },
    { name: 'Problem Solving', percent: 70 },
    { name: 'Time Management', percent: 65 },
  ],
};

// Bar animation
const barVariants = {
  initial: { width: 0 },
  animate: (percent) => ({
    width: `${percent}%`,
    transition: { duration: 1, ease: 'easeInOut' },
  }),
};

// Row animation (stagger effect)
const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 1.5, ease: 'easeOut' },
  }),
};

// Text animation
const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// eslint-disable-next-line react/prop-types
export default function SkillPanelAnimation({ category }) {
  const skills = skillsData[category] || [];

  return (
    <div className="w-full mt-4 rounded-2xl p-3 bg-[#0f0c2c] text-white dark:text-black">
      <motion.h2
        className="text-xl font-semibold text-purple-400 mb-4 border-b border-green-500 pb-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {category}
      </motion.h2>

      {skills.map((skill, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={rowVariants}
          className="mb-6"
        >
          <div className="flex justify-between mb-1">
            <motion.span
              className="font-medium"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {skill.name}
            </motion.span>

            <motion.span
              className="text-green-400"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {skill.percent}%
            </motion.span>
          </div>

          <div className="w-full bg-purple-900 rounded-full h-2.5 overflow-hidden">
            <motion.div
              className="bg-green-500 h-2.5 rounded-full"
              variants={barVariants}
              initial="initial"
              animate="animate"
              custom={skill.percent}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
