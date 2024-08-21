"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { RiTwitterXFill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import Link from "next/link";

import "./Sidebar.scss";

const Sidebar = () => {
  const session = useSession();

  return (
    <div className="sidebar-wrapper">
      <Link href={"/"}>
        <RiTwitterXFill className="sidebar-icons logo-icon" />
      </Link>

      <Link className="home-container" href={"/"}>
        <HiHome className="sidebar-icons home-icon" />
        <span className="home-content">Home</span>
      </Link>

      {session ? (
        <button className="sidebar-btn" onClick={() => signOut()}>
          Sign Out
        </button>
      ) : (
        <button className="sidebar-btn" onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default Sidebar;
