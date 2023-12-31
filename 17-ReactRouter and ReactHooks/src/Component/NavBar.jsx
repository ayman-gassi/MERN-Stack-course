import { NavLink, Outlet } from "react-router-dom";

export default function NavBar(){
    return (
        <>
            <div>
                <nav>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/page2" >page2</NavLink>
                    <NavLink to="/page3" >page3</NavLink>
                </nav>
                <Outlet></Outlet>
            </div>
        </>
    )
}