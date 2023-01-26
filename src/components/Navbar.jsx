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
            <NavLink to='/Portfolio' className="navItem">
            Portfolio
            </NavLink>
            <NavLink to='/pageB' className="navItem">
                pageB
            </NavLink>
	   </div>
        </>
    );
};

export default Navbar;