import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageJopApplication } from "../../Utility/LocalStorage";
import StoreJobs from "../StoreJobs/StoreJobs";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobFilter = filter =>{
    if(filter === 'all'){
      setDisplayJobs(appliedJob);
    }
    else if (filter === 'remote'){
      const remoteJobs  = appliedJob.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs);
    }
    else if (filter === 'on'){
      const onsideJobs  = appliedJob.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsideJobs);
    }
  }
  useEffect(() => {
    const storedJobIds = getStorageJopApplication();
    console.log(jobs);
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      console.log(jobApplied);
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
    }
  }, []);
  return (
    <div className="max-w-[1320px] mx-auto mt-14">
      <div className="flex justify-end">
        <div>
        <details className="dropdown">
          <summary className="m-1 btn text-xl px-5">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobFilter('all')}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobFilter('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobFilter('on')}>
              <a>Onside</a>
            </li>
          </ul>
        </details>
        </div>
      </div>
      <div className="">
        {displayJobs.map((job) => (
          <StoreJobs key={job.id} job={job}></StoreJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
