import React, { useState } from "react"
import MainNavbar from "../MainNavbar";
import SLtable from "./SLtable";
// import PDtable from "./PDtable/PDtable";

const StudentLog = () => {

    return (
        <div>
            <MainNavbar title="Student Log" />
            
            <SLtable />
        </div>
    )
}

export default StudentLog;
