import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { saveJobApplication } from "../../Utility/LocalStorage";





const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id)
    const job = jobs.find(jobs => jobs.id == intId);
    console.log(job);
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;

    const applyJobBtn = () =>{
        saveJobApplication(id)
        toast("You have successfully applied !");
    }
    return (
        <div className="">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100">
                <h1 className="text-3xl font-extrabold text-center py-8 lg:py-20">Job Details</h1>
            </div>
            <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
            <div className="space-y-5 lg:col-span-2 p-7">
                <p><span className="text-xl font-semibold">Job Description: </span> {job_description}</p>
                <p><span  className="text-xl font-semibold">Job Responsibility: </span>{job_responsibility}</p>
                <p><span className="text-xl font-semibold">Educational Requirements: </span> <br />
                {educational_requirements}
                </p>
                <p><span className="text-xl font-semibold">Experiences: </span> <br />
                {experiences}
                </p>
            </div>
            <div className=" m-3">
            <div className="p-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                <h1 className="border-b-2 border-slate-300 pb-5 text-xl font-extrabold ">Job Details</h1>
                <h3 className="pt-4 text-lg"><span className="text-lg font-bold">Salary: </span>{salary}</h3>
                <h3 className="pt-2 text-lg"><span className="text-lg font-bold">Job Title: </span>{job_title}</h3>
                <h3 className="pt-4 pb-5 border-b-2 border-slate-300"><span className="text-xl font-extrabold">Contact Information </span></h3>
                <h3 className="pt-4 text-lg"><span className="text-lg font-bold">Phone: </span>{contact_information.phone}</h3>
                <h3 className="pt-2 text-lg"><span className="text-lg font-bold">Email: </span>{contact_information.email}</h3>
                <h3 className="pt-2 text-lg"><span className="text-lg font-bold">Address: </span>{contact_information.address}</h3>
            </div>
            <button onClick={applyJobBtn} className="btn w-full bg-blue-400 mt-5 text-white text-lg">Apply</button>
            <ToastContainer />
            </div>
        </div>
        </div>
    );
};

export default JobDetails;