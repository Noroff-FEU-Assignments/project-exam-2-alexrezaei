import React from 'react'
import { BASE_URL } from "../api/api";
import { getToken } from "./storage/Storage";
function DeletePost(props) {
		async function deletePost() {
    const url = BASE_URL + "/social/posts/" + props.id;
    const token = getToken()
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        }
    };
    try {
			const res = await fetch(url, options);
			const json = await res.json();
			window.location.reload(true)
    }catch{}
	}
	return (
		<p onClick={deletePost} className='cursor-pointer text-[#13D5FF]'>Delete</p>
	)
}

export default DeletePost