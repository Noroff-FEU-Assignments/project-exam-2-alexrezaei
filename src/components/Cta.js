import React from "react";
import img1 from "../assets/georgia-de-lotz-rncny1536Xs-unsplash.jpg";
import { Link } from "react-router-dom";
import { getToken } from "./storage/Storage";
import { useNavigate } from "react-router-dom";
function Cta() {
    const navigate = useNavigate()
    const token = getToken()

    const redirectForPosts = () => {
        if(token.length < 1) {
            navigate("/login")
        } else {
            navigate("/allposts")
        }
    }

    const redirectForProfiles = () => {
        if(token.length < 1) {
            navigate("/login")
        } else {
            navigate("/profiles")
        }
    }
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[50%]">
                <h2>View fresh posts from our users!</h2>
                <div className="mt-[30px] mb-[30px]">
                    <button onClick={redirectForPosts} className="md:mb-[20px]">View posts</button>
                    <button onClick={redirectForProfiles}>View profiles</button>
                </div>
            </div>
            <div className="w-[100%] md:w-[50%] ">
                <img className="rounded-10px rounded-[10px]" src={img1} />
            </div>
        </div>
    );
}

export default Cta;
