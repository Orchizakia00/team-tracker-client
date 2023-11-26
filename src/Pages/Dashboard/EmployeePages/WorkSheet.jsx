import { Button, Label, Table } from "flowbite-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useWork from "../../../Hooks/useWork";

const WorkSheet = () => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [works, refetch] = useWork();

    console.log(works);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const hour = form.hour.value;
        const task = form.task.value;
        const date = form.date.value;

        const workDetails = {
            email: user.email,
            hour,
            task,
            date
        }
        console.log(workDetails);

        axiosSecure.post('/works', workDetails)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Work details saved successfully!')
                }
                refetch();
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

            <SectionTitle heading={'Saved Works'}></SectionTitle>
            <div className="mb-20">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Index</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Task</Table.HeadCell>
                        <Table.HeadCell>Working Hour</Table.HeadCell>
                        <Table.HeadCell>Date</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            works.map((work, index) =>
                                <Table.Row key={work._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {work.email}
                                    </Table.Cell>
                                    <Table.Cell>{work.task}</Table.Cell>
                                    <Table.Cell>
                                        {work.hour}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {work.date}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default WorkSheet;