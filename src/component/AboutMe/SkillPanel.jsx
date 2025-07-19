


const skillsData = {
  'Back-end': [
    { name: 'Node.js', percent: 60 },
    { name: 'Express.js', percent: 65 },
    { name: 'Mongodb', percent: 70 },
    { name: 'Java', percent: 40 },
  ],
  'Front-end': [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 85 },
    { name: 'JavaScript', percent: 80 },
    { name: 'React', percent: 75 },
  ],
  Tools: [
    { name: 'Git & GitHub', percent: 65 },
    { name: 'Vercel', percent: 60 },
    { name: 'Netlify', percent: 70 },
    { name: 'Trello', percent: 70 },
  ],
  'Soft Skill': [
    { name: 'Communication', percent: 80 },
    { name: 'Teamwork', percent: 75 },
    { name: 'Problem Solving', percent: 70 },
    { name: 'Time Management', percent: 65 },
  ],
};

// eslint-disable-next-line react/prop-types
export default function SkillPanel({ category }) {
  const skills = skillsData[category] || [];

  return (
    <div className="w-full mt-4 rounded-2xl p-3 bg-[#0f0c2c] transition-all duration-700">
      <h2 className="text-xl font-semibold text-purple-400 mb-4 border-b border-green-500 pb-1">
        {category}
      </h2>

      {skills.map((skill, i) => (
        <div key={i} className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="font-medium">{skill.name}</span>
            <span className="text-green-400">{skill.percent}%</span>
          </div>
          <div className="w-full bg-purple-900 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
