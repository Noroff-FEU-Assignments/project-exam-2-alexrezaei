import React from "react";
import { Link } from "react-router-dom";
import blankProfile from "../assets/blankprofile.png";
import DeletePost from "./DeletePost";
function Posts(props) {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center py-[18px] px-[46px] bg-[#1A1919] mt-[10px]">
                <div className="w-full flex items-center flex-col justify-around md:flex-row md:justify-between">
                    <div className="w-[80px] h-[80px]">
                        <img
                            className="w-[100%] h-[100%]"
                            src={props.avatar ? props.avatar : blankProfile}
                            alt="User avatar"
                        />
                    </div>
                    <div className="flex flex-col text-center">
                        <p>title:</p>
                        <p>{props.title}</p>
                    </div>
                    <div className="flex flex-col text-center">
                        <p>Posted by:</p>
                        <p>{props.user}</p>
                    </div>
                    <div className="flex flex-col text-center">
                        <p className="">Post date:</p>
                        <p>{props.date}</p>
                    </div>
                    <div className="flex flex-col">
                        <Link to={"/posts/" + props.id}>View more</Link>
                        <DeletePost id={props.id} />
                        <Link to={"/editpost/" + props.id}>Edit post</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;
