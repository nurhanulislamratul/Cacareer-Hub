import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" text-center gap-10 font-semibold h-screen flex flex-col items-center justify-center">
            <h2 className=" text-6xl ">Oops !!</h2>
            <h1 className="bg-slate-400 px-4 py-2 text-white rounded-2xl"><Link to="/">Go Home..</Link></h1>
        </div>
    );
};

export default ErrorPage;