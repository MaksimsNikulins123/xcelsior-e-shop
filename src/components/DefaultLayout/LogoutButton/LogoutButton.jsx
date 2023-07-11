import { Link } from "react-router-dom";

export default function LogoutButton(props){
    return (
        <div>
            <Link to="/login" onClick={props.logout}>Logout</Link>
        </div>
    )
}