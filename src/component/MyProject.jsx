import Card from "./Projects/Card";
import Card2 from "./Projects/Card2";
import Card3 from "./Projects/Card3";

const MyProject = () => {
    return (
        <div >
           <div>
                <h1 className="w-auto lg:w-[22%] text-2xl lg:text-5xl font-bold text-center mx-auto my-5 border-b-2 border-dashed pb-4 text-gray-200 " > My Projects </h1>
            </div>
            {/*  */}
            <div className="p-1 lg:p-0 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <Card2></Card2>
                <Card></Card>
               <Card3></Card3>
               


            </div>

        </div>
    );
};

export default MyProject;