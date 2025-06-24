
const tools = [
  { name: 'Git & Github', percent: 65 },
  { name: 'Vercel', percent: 60 },
  { name: 'Netlify', percent: 70 },
  { name: 'Trello', percent: 70 },
];

const ToolsCard = () => {
  return (
    <div className="bg-[#0f0c2c] text-white border border-purple-500 rounded-lg w-[350px] p-4">
      <h2 className="text-xl font-semibold text-purple-400 mb-4 border-b border-purple-500 pb-2">
        Tools
      </h2>

      {tools.map((tool, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="font-medium">{tool.name}</span>
            <span className="text-purple-400">{tool.percent}%</span>
          </div>
          <div className="w-full bg-purple-900 rounded-full h-2.5">
            <div
              className="bg-purple-500 h-2.5 rounded-full"
              style={{ width: `${tool.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsCard;
