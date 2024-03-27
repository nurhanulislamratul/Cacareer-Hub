const getStorageJopApplication = () =>{
    const storedJoApplication = localStorage.getItem('job-application');
    if(storedJoApplication){
        return JSON.parse(storedJoApplication);

    }
    else{
        return [];
    }
}

const saveJobApplication = id =>{
    console.log({id});
    const storedJoApplication = getStorageJopApplication();
    const exists = storedJoApplication.find(jobId => jobId === id);
    if(!exists){
        storedJoApplication.push(parseInt(id));
        localStorage.setItem('job-application', JSON.stringify(storedJoApplication))
    }
}

export {saveJobApplication, getStorageJopApplication};