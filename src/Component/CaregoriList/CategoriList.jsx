import { useEffect, useState } from "react";
import Catagori from "../Catagori/Catagori";


const CategoriList = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCatagories(data))
    }, [])
    return (
       <div className=" mt-[80px] max-w-[1320px] mx-auto">
         <div className="space-y-4">
            <h2 className=" text-4xl font-bold text-center ">Job Category List</h2>
            <p className="text-base font-normal text-center text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-4 mt-9 gap-8  px-2">
            {
                catagories.map(catagori => <Catagori key={catagori.id} catagori={catagori}></Catagori>)
            }
        </div>
       </div>
    );
};

export default CategoriList;