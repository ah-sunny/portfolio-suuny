// import Card from "./Projects/Card";
// import Card2 from "./Projects/Card2";
// import Card3 from "./Projects/Card3";

import CardText from "./Projects/CardText";
import CardText2 from "./Projects/CartText2";
import CardText3 from "./Projects/CardText3";

const MyProject = () => {
    return (
        <div >
            <div>
                <h1 className="w-auto lg:w-[30%] text-2xl lg:text-4xl font-bold text-center mx-auto my-5 border-b-2 border-dashed pb-4 text-gray-200 " > My
                    <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent -tracking-wide  "> Projects</span>

                </h1>
            </div>
            {/*  */}
            <div className="p-1 lg:pt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* <Card2></Card2>
                <Card></Card>
               <Card3></Card3> */}
                <CardText2></CardText2>
                <CardText></CardText>
                <CardText3></CardText3>


            </div>

        </div>
    );
};

export default MyProject;