import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary, id} = job;
    return (
        <div className="lg:space-y-4 space-y-2 m-2 border-2 p-8 rounded-lg">
            <img src={logo} alt="" />
            <h1 className="text-2xl font-bold">{job_title}</h1>
            <p className="text-lg font-semibold">{company_name}</p>
            <div className="flex gap-4">
                <p className="p-2 border-2 w-fit text-blue-500 border-blue-500 rounded-lg">{remote_or_onsite}</p>
                <p className="p-2 border-2 w-fit text-blue-500 border-blue-500 rounded-lg">{job_type}</p>
            </div>
            <div className="text-lg flex gap-6">
                <div className="flex items-center gap-1">
                    <p><SlLocationPin /></p>
                    <p>{location}</p>
                </div>
                <div className="flex items-center gap-1">
                    <p><AiOutlineDollar /></p>
                    <p>{salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`}><button className="bg-gradient-to-r from-blue-500 mt-6 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-medium py-2 px-4 rounded">View Details</button></Link>
        </div>
    );
};

export default Job;