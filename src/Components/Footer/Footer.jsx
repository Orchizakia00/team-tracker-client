
'use client';

import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Component() {
    return (
        <Footer container>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="/"
                        src="/icon.png"
                        alt="Flowbite Logo"
                        name="Team Tracker"
                    />
                    <Footer.LinkGroup className='gap-5 mr-4'>
                        <Link to={'/'}><Footer.Link href="#">Home</Footer.Link></Link>
                        <Link to={'/contact'}><Footer.Link href="#">Contact Us</Footer.Link></Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="Team Tracker" year={2023} />
            </div>
        </Footer>
    );
}
export default Component;