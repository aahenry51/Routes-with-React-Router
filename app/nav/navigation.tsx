import { NavLink } from "react-router";

export default function Navigation(){

    return <div>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dashboard/finances">finances</NavLink>
    </div>
}