import React from 'react'
import { useState, useEffect } from "react"
import { BASE_URL } from "../api/api"
import Navigationbar from './Navigationbar';
import NewPost from './NewPost';
import Posts from './Posts';
import { getToken } from "./storage/Storage"
function AllPosts() {
  const [postInfo, setPostInfo] = useState([]);
  const url = BASE_URL + "/social/posts?_author=true";
  const token = getToken();

  async function getAllPosts() {
    const options = {
		  headers: {
			Authorization: "Bearer " + token,
		  },
		}
    try {
      const res = await fetch(url, options)
			const json = await res.json()
      setPostInfo(json)
    }catch{}
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div className='px-[70px]'>
      <Navigationbar />
      <h1 className='text-center mt-[70px] mb-[20px]'>All posts</h1>
      <NewPost />
      <div>
        {postInfo.map(post => <Posts key={post.id} title={post.title} user={post.author.name} avatar={post.author.avatar} id={post.id} />)}
      </div>
    </div>
  )
}

export default AllPosts