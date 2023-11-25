import { useEffect } from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle";


const EmployeeList = () => {

    // const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    },[])

    return (
        <div>
            <SectionTitle heading={'Employee List'}/>

        </div>
    );
};

export default EmployeeList;