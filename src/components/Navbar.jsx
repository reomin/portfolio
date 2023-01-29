import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import "../index.css";

const Navbar = () => {
    return (
        <>
	   <div className="navMenu">
            <NavLink to='/' className="navItem">
                Home
            </NavLink>
            <NavLink to='/Project' className="navItem">
            Project
            </NavLink>
            <NavLink to='/Resume' className="navItem">
                Resume
            </NavLink>
            <NavLink to='/AboutMe' className="navItem">
                About me
            </NavLink>
	   </div>
        </>
    );
};

export default Navbar;