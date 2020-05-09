import React from 'react';
import MainNavbar from "../MainNavbar";
import SLtable from './SLtable/SLtable';

const StudentList = () => {
    
    return (
        <div>
            <MainNavbar title="Student List"/>
            <SLtable />
        </div>
    );
};

export default StudentList;