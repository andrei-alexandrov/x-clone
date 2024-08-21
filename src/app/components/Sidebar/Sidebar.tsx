"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { RiTwitterXFill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import Link from "next/link";
import Profile from "../Profile/Profile";

import "./Sidebar.scss";

const Sidebar = () => {
  const { data: session, status } = useSession();
  return (
    <div style={{display: "flex", flexDirection: "column", padding: "0.75rem", justifyContent: "space-between", height: "95vh"}}>
      <div className="sidebar-wrapper">
        <Link href={"/"}>
          <RiTwitterXFill className="sidebar-icons logo-icon" />
        </Link>

        <Link className="home-container" href={"/"}>
          <HiHome className="sidebar-icons home-icon" />
          <span className="home-content">Home</span>
        </Link>

        {status === "loading" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Loading...
          </div>
        ) : session ? (
          <button className="sidebar-btn" onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className="sidebar-btn" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
      {session && <Profile session={session} />}
    </div>
  );
};

export default Sidebar;
