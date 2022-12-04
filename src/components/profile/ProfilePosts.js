import React from 'react'
import { useState, useEffect } from "react";
import { BASE_URL } from "../../api/api"
import Posts from '../Posts';
import { getToken, getUser, getAvatar } from "../storage/Storage";
function ProfilePosts() {
		const avatar = getAvatar()
		const user = getUser()
		const [postInfo, setPostInfo] = useState([]);
		const token = getToken();
		const url = BASE_URL + "/social/profiles/" + getUser() + "/posts";
		useEffect(() => {
			checkPosts()
		}, [])

		async function checkPosts() {
			const options = {
				headers: {
				Authorization: "Bearer " + token,
				},
			}
			try {
				const res = await fetch(url, options)
				const json = await res.json();
				setPostInfo(json)
			} catch(error){
				console.log(error)
			}
		};

    return (
      <div>
		  <h2 className='text-center'>Posts</h2>
				{
					postInfo.map(post =>
					<Posts key={post.id} title={post.title} date={post.created} user={user} id={post.id} avatar={avatar} />
					)
				}
      </div>
  )
}

export default ProfilePosts