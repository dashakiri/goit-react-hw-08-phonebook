import { NavLink } from "react-router-dom";

export default function AuthNav() {
    return (
        <NavLink to="/register" exact>
            Register
        </NavLink>
    )
};