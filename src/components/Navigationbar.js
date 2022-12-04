import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { getToken } from "./storage/Storage";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUser } from "./storage/Storage"
function Navigationbar() {
    const user = getUser();
    const navigate = useNavigate();
    let token = JSON.parse(localStorage.getItem("token"));
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    const logOut = () => {
        localStorage.clear();
        navigate("/");
    };
    return (
        <div className="w-full h-[80px]">
            <div className="flex items-center justify-between w-full h-full">
                <div className="flex items-center">
                    <p className="font-bold text-[28px] text-white">
                        Social You
                    </p>
                    <ul className="hidden lg:flex">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        {token ? (
                            <>
                            <li>
                            <NavLink to="/allposts">Posts</NavLink>
                            </li>
                            <li>
                            <NavLink to="/profiles">Profiles</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile">Profile</NavLink>
                            </li>
                            <li className="cursor-pointer" onClick={logOut}>
                                Logout
                            </li>
                            </>
                        ) : (
                            <div className="flex">
                                <li className="">
                                    <NavLink className="text-bold" to="/login">Login</NavLink>
                                </li>
                                <li><NavLink className="text-bold" to="/register">register</NavLink></li>
                            </div>
                        )}
                    </ul>
                </div>
                <div className="lg:hidden" onClick={handleNav}>
                    {!nav ? (
                        <MenuIcon className="w-7 text-white" />
                    ) : (
                        <XIcon className="w-7 text-white" />
                    )}
                </div>
            </div>

            <ul className={!nav ? "hidden" : "relative bg-black w-full px-8 flex flex-col items-center"}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {token ? (
                    <>
                    <li>
                    <NavLink to="/allposts">Posts</NavLink>
                    </li>
                    <li>
                    <NavLink to="/profiles">Profiles</NavLink>
                    </li>
                    <li>
                    <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li className="cursor-pointer text-[#13D5FF]" onClick={logOut}>
                        Logout
                    </li>
                    </>
                ) : (
                    <div className="flex flex-col lg:flex items-center">
                        <li className="">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>Register</li>
                    </div>
                )}
            </ul>
        </div>
    );
}

export default Navigationbar;
