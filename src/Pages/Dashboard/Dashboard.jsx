import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../DashboardComponent/Sidebar/Sidebar';

function Dashboard(props) {
    return (
        <div className='flex w-full'>
            <div className='w-[400px] bg-red-600'>
                <Sidebar></Sidebar>
            </div>
            <div className='w-full bg-gray-500'>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Dashboard;