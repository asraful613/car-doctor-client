import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [sercices,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl text-orange-600">Our Services</h3>
                <h2 className="text-5xl font-bold my-2">Our Service Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate ratione rem, omnis in esse assumenda a nisi, reiciendis natus dolor impedit blanditiis similique tempore corporis dicta odio sapiente accusantium.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
                {
                    sercices.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;