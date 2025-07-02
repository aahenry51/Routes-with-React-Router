import { Outlet } from "react-router"

export default function Dashboard(){

    //Must have outlet to display nested paths
    return <div>Dashboard
 
    <Outlet/> 
    </div>
}