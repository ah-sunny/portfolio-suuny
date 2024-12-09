import Card from "./Card";

const MyProject = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center mx-auto my-5" >My Project</h1>
            </div>
            {/*  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

                <Card></Card>

                <Card></Card>

            </div>

        </div>
    );
};

export default MyProject;