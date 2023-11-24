
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';

function Component() {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res)
                toast.success('Logged Out Successfully!')
            })
            .catch(err => console.log(err))
    }

    const navLinks = <>
        <Link to={'/'}><Navbar.Link href="#">Home</Navbar.Link></Link>
        <Link to={'/contact'}><Navbar.Link href="#">Contact Us</Navbar.Link></Link>
        {
            !user && <Link to={'/login'}><Navbar.Link href="#">Login</Navbar.Link></Link> 
        }
    </>

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img src="/icon.png" className="mr-3 h-6 sm:h-9" alt="" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Team Tracker</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User" img={user?.photoURL} rounded />
                    }
                >
                    <Dropdown.Header>
                        {user && <span className="block text-sm">{user?.displayName}</span>}
                        {user && <span className="block truncate text-sm font-medium">{user.email}</span>}
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    {
                        user && <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                    }
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {navLinks}
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Component;