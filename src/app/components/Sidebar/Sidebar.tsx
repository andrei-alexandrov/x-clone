import Link from "next/link";
import { RiTwitterXFill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <Link href={"/"}>
        <RiTwitterXFill className="sidebar-icons logo-icon" />
      </Link>

      <Link className="home-container" href={"/"}>
        <HiHome className="sidebar-icons home-icon" />
        <span className="home-content">Home</span>
      </Link>
      
      <button className="sidebar-btn">Sign In</button>
    </div>
  );
};

export default Sidebar;
