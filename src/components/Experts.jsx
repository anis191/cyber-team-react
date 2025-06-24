import { useEffect, useState } from "react";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";

const Experts = () => {
    const[experts, setExperts] = useState([])
    const[addedExpert, setAddedExpert] = useState([])

    useEffect(() => {
        fetch('./experts.json')
        .then(res => res.json())
        .then(data => setExperts(data))
    },[])

    const handleAddExperts = (newExpert) =>{
        const checkExist = addedExpert.find(
            (expert) =>(
                expert.id === newExpert.id
            )
        )
        if (!checkExist){
            setAddedExpert([...addedExpert, newExpert])
        }
    }
    const TotalCost = addedExpert.reduce((total,expert)=>total + expert.salary, 0)
    return (
        <div className="max-w-[1170px] mx-auto grid md:grid-cols-[75%_auto] grid-cols-1 items-start">
            <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 order-2 md:order-1">
                {experts.map((expert =>(
                    <div key={expert.id} className="bg-gray-200 m-2 px-2 py-3 text-center shadow-md rounded-md space-y-3">
                        <img src={`${expert.img}`} alt={`${expert.name}`} className="rounded-[50%] mx-auto pb-1" />
                        <h2 className="py-1">{expert.name}</h2>
                        <p><span className="font-bold">Age:</span> {expert.age}</p>
                        <p><span className="font-bold">Designation:</span> {expert.designation}</p>
                        <p><span className="font-bold">Address:</span> {expert.address}</p>
                        <p><span className="font-bold">Salary:</span> {expert.salary}</p>
                        <Button onClick={()=>handleAddExperts(expert)} color="primary"> <ShoppingCart className="inline-block" /> Add to List</Button>
                    </div>
                )))}
            </section>
            <section className="m-2 px-2 py-3 text-center bg-gray-200 min-h-[20vh] sticky top-4 self-start w-full order-1 md:order-2">
                <div className="rounded-md space-y-2">
                    <p>Expert Added: {addedExpert.length}</p>
                    <p>Total Cost: ${TotalCost}</p>
                    <div className="space-y-2">
                        {addedExpert.map((expert)=>(
                            <div key={expert.name} className="flex items-center bg-white space-x-5">
                                <img src={expert.img} alt="img" className="h-[50px] w-[50px]" />
                                <p>{expert.name}</p>
                            </div>
                        ))}
                    </div>
                    {addedExpert.length > 0 ? <Button color="primary" width="w-full">Confirm List</Button> : ''}
                </div>
            </section>
        </div>
    );
};

export default Experts;