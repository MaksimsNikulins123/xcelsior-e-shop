import { Link } from "react-router-dom";

export default function LoginButton(){
    return (
        <div>
            <Link to="/login">Login</Link>
            {/* <button type="button">
                Login
            </button> */}
        </div>
    )
}