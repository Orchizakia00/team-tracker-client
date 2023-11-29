import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Table } from "flowbite-react";
import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FaArrowCircleDown, FaCheck } from "react-icons/fa";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const Progress = () => {
    const [selectedName, setSelectedName] = useState({ name: 'All Works' });
    const [selectedMonth, setSelectedMonth] = useState({ month: 'All Dates' });
    const [filteredWorks, setFilteredWorks] = useState([]);
    const axiosSecure = useAxiosSecure();

    const { data: works = [] } = useQuery({
        queryKey: ['works'],
        queryFn: async () => {
            const res = await axiosSecure.get('/works/hr');
            return res.data;
        }
    });

    const uniqueNames = Array.from(new Set(works.map((work) => work.name)));
    const uniqueMonths = Array.from(new Set(works.map((work) => work.date)));

    const people = [{ name: 'All Works' }, ...uniqueNames.map((employeeName) => ({ name: employeeName }))];
    const months = [{ month: 'All Dates' }, ...uniqueMonths.map((month) => ({ month }))];

    useEffect(() => {
        // Filter works data based on selected name and month
        const filteredData = works.filter((work) => {
            const isNameMatched = selectedName.name === 'All Works' || selectedName.name === work.name;
            const isMonthMatched = selectedMonth.month === 'All Dates' || selectedMonth.month === work.date;

            return isNameMatched && isMonthMatched;
        });

        // Update the state with the filtered works data
        setFilteredWorks(filteredData);
    }, [selectedName, selectedMonth, works]);

    return (
        <div className="mb-16">
            <SectionTitle heading={'Progress'} subHeading={'Works Submitted By Employees'}></SectionTitle>

            {/* dropdown for filtering */}
            <div className="flex justify-between">
                {/* dropdown for filtering with name */}
                <div className="relative mb-6 w-72 z-50">
                    <Listbox value={selectedName} onChange={setSelectedName}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selectedName.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <FaArrowCircleDown
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {people.map((person, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={person}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {person.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <FaCheck className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>

                {/* Dropdown for filtering by month */}
                <div className="relative mb-6 w-72 z-50">
                    <Listbox value={selectedMonth} onChange={setSelectedMonth}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selectedMonth.month}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <FaArrowCircleDown
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {months.map((monthOption, monthIdx) => (
                                        <Listbox.Option
                                            key={monthIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={monthOption}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {monthOption.month}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <FaCheck className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>
            </div>

            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Index</Table.HeadCell>
                        <Table.HeadCell>Employee Name</Table.HeadCell>
                        <Table.HeadCell>Tasks</Table.HeadCell>
                        <Table.HeadCell>Working Hour</Table.HeadCell>
                        <Table.HeadCell>Date</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            filteredWorks.map((work, index) =>
                                <Table.Row key={work._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {work?.name}
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

export default Progress;