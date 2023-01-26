import Navbar from "./Navbar";
import "../styles/Header.css";
import Icons from "./Icons";

const Header = () => {
  return (
      <div className="navBar">
          <Icons/>
          <Navbar />
      </div>
  );
};

export default Header;