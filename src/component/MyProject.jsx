// import Card from "./Projects/Card";
// import Card2 from "./Projects/Card2";
// import Card3 from "./Projects/Card3";
import { motion } from "framer-motion";

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

                {/* 1 */}
                <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 3,
                        ease: "easeOut",

                    }}
                    viewport={{ once: true, amount: 0.15 }} // triggers once when 20% is visible
                >
                    <CardText2></CardText2>

                </motion.div>
                {/* 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",

                    }}
                    viewport={{ once: true, amount: 0.15 }} // triggers once when 20% is visible
                >
                    <CardText></CardText>

                </motion.div>
                {/* 3 */}
                <motion.div
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 3,
                        ease: "easeOut",

                    }}
                    viewport={{ once: true, amount: 0.15 }} // triggers once when 20% is visible
                >
                    <CardText3></CardText3>

                </motion.div>


            </div>

        </div>
    );
};

export default MyProject;