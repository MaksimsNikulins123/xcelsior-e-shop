import React from 'react';
import { Link } from "react-router-dom";

const LogoutButton:React.FunctionComponent = (props:any) =>(
    <div>
        <Link to="/login" onClick={props.logout}>Logout</Link>
    </div>
    )

export default LogoutButton;