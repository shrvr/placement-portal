import React from "react";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard";
import PlacementDrives from "./PlacementDrives/PlacementDrives";
import Profile from "./Profile/Profile";
import EditProfile from "./EditProfile/EditProfile";
import AddDrive from "./AddDrive/AddDrive";
import StudentList from "./StudentList/StudentList";
import StudentLog from "./StudentLog/StudentLog";

const Main = () => {
  let match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={Dashboard} />
        <Route exact path={`${match.path}/placement-drives`} component={PlacementDrives} /> 
        <Route exact path={`${match.path}/profile`} component={Profile} /> 
        <Route exact path={`${match.path}/edit-profile`} component={EditProfile} /> 
        <Route exact path={`${match.path}/add-drive`} component={AddDrive} />
        <Route exact path={`${match.path}/student-list`} component={StudentList} />
        <Route exact path={`${match.path}/student-log`} component={StudentLog} />


      </Switch>
    </div>
  );
};

export default Main;
