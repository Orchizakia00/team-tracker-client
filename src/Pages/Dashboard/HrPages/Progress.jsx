import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Table } from "flowbite-react";
import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FaArrowCircleDown, FaCheck, FaUpload } from "react-icons/fa";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const Progress = () => {
    const [selected, setSelected] = useState({ name: 'All Works' })
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

    const people = [{ name: 'All Works' }, ...uniqueNames.map((employeeName) => ({ name: employeeName }))];

    useEffect(() => {
        const filteredData = works.filter((work) => {
            if (selected.name === 'All Works') {
                return true;
            } else if (selected.name === work.name) {
                return true;// Filter by selected name
            }
            return false;
        });
        setFilteredWorks(filteredData);
    }, [selected, works]);

    return (
        <div className="mb-16">
            <SectionTitle heading={'Progress'} subHeading={'Works Submitted By Employees'}></SectionTitle>

            {/* dropdown for filtering with name */}
            <div className="relative mb-6 w-72 z-50">
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">{selected.name}</span>
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
    );
};

export default Progress;