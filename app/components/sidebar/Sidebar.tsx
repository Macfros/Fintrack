"use client";

import {useState,useContext} from "react";
import Image from "next/image";
import Link from "next/link";
import {MdDashboard} from "react-icons/md";
import {AiOutlineHome} from "react-icons/ai";
import {BsPeople} from "react-icons/bs";
import {TiContacts} from "react-icons/ti";
import {FiMail} from "react-icons/fi";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md";
import {SidebarContext} from "./SidebarContext";

const sidebarItems=[
{
    name: "Home",
    href: "/",
    icon:AiOutlineHome,
},
{
    name: "About",
    href: "/",
    icon:BsPeople,
},
{
    name: "Mails",
    href: "/",
    icon:FiMail,
},
{
    name: "Contact",
    href: "/",
    icon:TiContacts,
},
];

const Sidebar = () => {
    const {isCollapsedSidebar,toggleSidebarCollapseHandler} = useContext(SidebarContext);

    return (
        <div className="sidebar_wrapper">
            <button className="btn" onClick={toggleSidebarCollapseHandler}>
                <MdKeyboardArrowLeft />
            </button>
        <aside className="sidebar" data-collapse={isCollapsedSidebar}>
            <div className="sidebar_top">
                <Image src="/logo.png" height={80} width={80} className="sidebar_logo" alt="logo"/>
                <p className="sidebar_logo-name">FinTrack</p>
            </div>
            <ul className="sidebar_list">
                {sidebarItems.map(({name,href,icon:Icon})=> (
                    <li className="sidebar_item" key={name}>
                        <Link href={href} className="sidebar_link">
                            <div className="sidebar_icon">
                                <Icon/>
                            </div>
                            <span className="sidebar_name">{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
        </div>
        )
}

export default Sidebar;