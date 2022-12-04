import React from "react";
import { BASE_URL } from "../../api/api";
import { useState, useEffect } from "react";
import { getToken } from "../storage/Storage";
import { useParams } from "react-router-dom";
import VisitPosts from "./VisitPosts";
import FollowProfile from "./FollowProfile";
function VisitProfile() {
    /* this component is for the actual user that is logged inn not for visiting a user page */
    const { name } = useParams();
    const [userInformation, setUserInformation] = useState({
        _count: {
            following: 0,
            followers: 0,
            posts: 0,
        },
    });
    const token = getToken();
    const url =
        BASE_URL + "/social/profiles/" + name; /* change nav link to getuser */

    useEffect(() => {
        checkProfile();
    }, []);

    async function checkProfile() {
        const options = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        try {
            const res = await fetch(url, options);
            const json = await res.json();
            setUserInformation(json);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="bg-[#1A1919] max-w-[450px] mx-[auto] py-[40px] rounded-[10px] mt-[40px]">
                <div className="flex flex-col items-center">
                    <div className="w-[80px] h-[80px]">
                        <img
                            className="w-[100%] h-[100%] rounded-[5px]"
                            src={userInformation.avatar}
                        />
                    </div>
                    <div>
                        <p className="text-[20px] mt-[15px] text-center">
                            {userInformation.name}
                        </p>
                        <div className="flex flex-col sm:flex sm:flex-row">
                            <p>{userInformation._count.posts} Your Posts</p>
                            <p className="mx-[0] sm:mx-[16px]">
                                {userInformation._count.followers} Followers
                            </p>
                            <p>{userInformation._count.following} Following</p>
                        </div>
                    </div>
                    <FollowProfile user={userInformation.name} />
                </div>
            </div>
            <VisitPosts name={name} avatar={userInformation.avatar} />
        </div>
    );
}

export default VisitProfile;
