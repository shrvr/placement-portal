import React, { useState } from "react"
import { Collapse } from "reactstrap";

import MainNavbar from "../MainNavbar";
import Filter from "./Filter/Filter";
import PDtable from "./PDtable/PDtable";

const PlacementDrives = () => {

    const [isOpenFilter, setisOpenFilter] = useState(false);
    const toggleFilter = () => setisOpenFilter(!isOpenFilter);

    return (
        <div>
            <MainNavbar title="Placement Drives" toggleFilter={toggleFilter} />

            <Collapse isOpen={isOpenFilter}>
                <Filter toggleFilter={toggleFilter} />
            </Collapse>

            <PDtable />
        </div>
    )
}

export default PlacementDrives;