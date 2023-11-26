import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import { Card } from "flowbite-react";
// import Image from 'next/image';


const EmployeeDetails = () => {

    const employee = useLoaderData();

    const { name, email, role, photo } = employee;

    return (
        <div>
            <SectionTitle heading={`Employee Details`} />

            <Card className="max-w-sm mx-auto space-y-4">
                <div className="flex flex-col items-center pb-10">
                    {/* <Image
                        alt="Bonnie image"
                        height="96"
                        src="/images/people/profile-picture-3.jpg"
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    /> */}
                    <img src={photo} className="w-[200px] h-[200px] rounded" alt="avatar of Jese"  />
                    {/* <img src="" alt="" /> */}
                    <h5 className="mb-2 mt-4 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-sm mb-2 text-gray-500 dark:text-gray-400">Email: {email}</span>
                    <span className="text-sm mb-2 text-gray-500 dark:text-gray-400">Designation: {role}</span>
                </div>
            </Card>
        </div>
    );
};

export default EmployeeDetails;