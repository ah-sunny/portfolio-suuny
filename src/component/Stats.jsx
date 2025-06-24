import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      num: 1,
      text: "Years of Experience",
    },
    {
      num: 44,
      text: "Project Compleate",
    },
    {
      num: 12,
      text: "Technologies mastered",
    },
    {
      num: 388,
      text: "GitHub commits",
    },
  ];

  return (
    <div className="my-20 text-center w-full mx-auto  ">
      <div className="stats w-full bg-[#030014] text-white stats-vertical lg:stats-horizontal shadow">
        {/* <div className="stat">
                    <div className="stat-value">1+</div>
                    <div className="stat-title text-white text-lg lg:text-3xl font-extrabold -tracking-wider ">Years of Experience</div>
                   
                </div>
                <div className="divider divider-vertical lg:divider-horizontal "></div>

                <div className="stat">
                    <div className="stat-value ">44+ </div>
                    <div className="stat-title text-white text-lg lg:text-3xl font-extrabold -tracking-wider ">Project Compleate</div>
                   
                </div>
                <div className="divider divider-vertical lg:divider-horizontal "></div>

                <div className="stat">
                    <div className="stat-value">12+</div>
                    <div className="stat-title text-white text-lg lg:text-3xl font-extrabold -tracking-wider ">Technologies mastered</div>
                   
                </div>
                <div className="divider divider-vertical lg:divider-horizontal "></div>

                <div className="stat">
                    <div className="stat-value">388+</div>
                    <div className="stat-title text-white text-lg lg:text-3xl font-extrabold -tracking-wider ">GitHub commits</div>
                   
                </div> */}

        {stats.map((item, index) => (
          <div key={index} className="stat"> 
            <CountUp
              end={item.num}
              duration={5}
              delay={2}
              className="stat-value text-4xl lg:text-6xl mb-3 text-outline text-transparent"
              suffix="+"
            ></CountUp> 
            <div className="stat-title text-white text-lg lg:text-2xl font-extrabold -tracking-wider ">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
