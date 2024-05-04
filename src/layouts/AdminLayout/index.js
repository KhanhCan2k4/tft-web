import { useState } from 'react';
import Drawer from "@mui/material/Drawer";
import Header from './../../components/AdminHeader/index';
import Footer from '../../components/Footer';
import NavSide from './../../components/AdminNavSide/index';


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
                        className='btn btn-teal mt-2 ms-2'
                        onClick={toggleDrawer(true)}
                    >
                        Mở Dashborad
                    </button>

                    <div className="container">

                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            <NavSide />
                        </Drawer>

                        {slot}
                    </div>
                </div>
            </div>
        </>
    );
}