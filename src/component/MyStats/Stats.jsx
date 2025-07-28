import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      num: 1,
      text: "Years of Experience",
    },
    {
      num: 50,
      text: "Project Complete",
    },
    {
      num: 12,
      text: "Technologies mastered",
    },
    {
      num: 392,
      text: "GitHub commits",
    },
  ];

  return (
    <div className="my-20 text-center w-full mx-auto  ">
      <div className="stats w-full bg-white dark:bg-[#030014] text-black dark:text-white stats-vertical lg:stats-horizontal shadow">

        {stats.map((item, index) => (
          <div key={index} className="stat  "> 
            <CountUp
              end={item.num}
              duration={8}
              delay={2}
              className="stat-value text-4xl lg:text-6xl mb-3 text-outline dark:text-transparent "
              suffix="+"
            ></CountUp> 
            <div className="stat-title text-black dark:text-white text-lg lg:text-2xl font-extrabold -tracking-wider ">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
