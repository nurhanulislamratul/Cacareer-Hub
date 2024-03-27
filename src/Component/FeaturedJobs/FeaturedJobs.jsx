import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);

    const handleShowAllBtn = () =>{
        setDataLength(jobs.length);

    }

    return (
        <div className="max-w-[1320px] mx-auto px-2">
        <div className="space-y-4 mt-[90px]">
            <h2 className=" text-4xl font-bold text-center ">Featured Jobs</h2>
            <p className="text-base font-normal text-center text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className=" mt-11 grid-cols-1 grid lg:grid-cols-2 gap-6">
            {
                jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
            
        </div>
        <div className={dataLength === jobs.length? 'hidden' : 'block'}>
        <div className="flex justify-center mt-7">
            <button onClick={handleShowAllBtn} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-medium py-2 px-4 rounded">See All Jobs</button>
        </div>
        </div>
        </div>
    );
};

export default FeaturedJobs;