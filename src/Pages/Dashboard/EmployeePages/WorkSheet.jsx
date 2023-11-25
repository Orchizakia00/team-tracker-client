import { Button, Label } from "flowbite-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const WorkSheet = () => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosPublic = useAxiosPublic();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const hour = form.hour.value;
        const task = form.task.value;
        const date = form.date.value;

        const workDetails = {
            hour,
            task,
            date
        }
        console.log(workDetails);

        axiosPublic.post('/works', workDetails)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Work details saved successfully!')
                }
            })
    }

    return (
        <div>
            <SectionTitle heading={'Work Sheet'} subHeading={'Save your work'}></SectionTitle>
            <form onSubmit={handleSubmit} className="flex w-full mx-auto flex-col gap-4 px-10 rounded-md">
                <div className="flex justify-between gap-4 mb-4">
                    <div className="flex-1">
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Working Hour" />
                        </div>
                        <input className="w-full rounded-md" id="hour" name="hour" type="number" placeholder="Working Hour" required />
                    </div>
                    <div className="flex-1">
                        <div className="mb-2 block">
                            <Label htmlFor="photo" value="Task" />
                        </div>
                        <select name="task" defaultValue="default"
                            className="w-full rounded-md">
                            <option disabled value="default">Select Task</option>
                            <option value="sales">Sales</option>
                            <option value="support">Support</option>
                            <option value="paper">Paper Work</option>
                            <option value="content">Content</option>
                        </select>
                    </div>
                </div>
                {/* <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Date" />
                    </div>
                    <TextInput id="date" name="date" type="date" placeholder="Date" required />
                </div> */}
                <Label htmlFor="name" value="Working Date" />
                <DatePicker className="w-full rounded-md mb-4" name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default WorkSheet;