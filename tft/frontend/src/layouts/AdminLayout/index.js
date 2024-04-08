import { useState } from 'react';
import Drawer from "@mui/material/Drawer";
import Header from './../../components/AdminHeader/index';
import NavSide from '../../components/NavSide';
import Footer from '../../components/Footer';


export default function AdminLayout({ slot }) {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <Header />
            <div className='content row'>
                <div className='main-content'>
                    <button
                        className='btn btn-teal mt-5 ms-2'
                        onClick={toggleDrawer(true)}
                    >
                        Open Dashborad
                    </button>

                    <div className="container">

                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            <NavSide />
                        </Drawer>

                        {slot}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}