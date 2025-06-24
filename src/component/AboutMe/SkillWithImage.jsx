import ToolsCard from "./ToolCard";
import sunnyImg from "../../assets/trans.png";


const SkillWithImage = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between">
            {/* right */}
            <div className="">
                <img src={sunnyImg} alt="sani image"  />
            </div>
            {/* left  */}
            <div>
                <ToolsCard></ToolsCard>
            </div>
        </div>
    );
};

export default SkillWithImage;