import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getToken } from "./storage/Storage"
import { BASE_URL } from "../api/api";
import Navigationbar from './Navigationbar';
import ReactPost  from "./ReactPost";
import blankProfile  from "../assets/blankprofile.png";
import Comments from './Comments';
function SinglePost() {
	const [postInfo, setPostInfo] = useState({
		author: "",
		body: "",
		comments: "",
		created: "",
		id: "",
		media: "",
		reactions: "",
		tags: "",
		title: "",
		updated: "",
		_count: {
			comments: 0,
			reactions: 0,
		}
	})
	const { postId } = useParams();
	const token = getToken();
	const url = BASE_URL + "/social/posts/" + postId + "?_author=true&_comments=true&_reactions=true";

	useEffect(() => {
		getSinglePost()
	}, [])

	async function getSinglePost() {
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

  return (
    <div className='px-[70px]'>
			<Navigationbar />
			<div className='max-w-[650px] px-[20px] py-[20px] mt-[70px] bg-[#1A1919] mx-[auto] rounded-[10px]'>
					<div className='flex flex-col items-center'>
						<div className='w-[80px] h-[80px]'>
							<img className='w-full h-full rounded-[5px]' src={postInfo.author.avatar ? postInfo.author.avatar : blankProfile } alt='User avatar'/>
						</div>
						<Link className='text-[20px] text-[#13D5FF]' to={"/profile/" + postInfo.author.name}>{postInfo.author.name}</Link>
					</div>
				<div className='flex flex-wrap justify-between mt-[20px]'>
					<p>Title: {postInfo.title}</p>
					<p>Post date: {postInfo.created}</p>
				</div>
				<div className='border-[1px] border-solid border-white min-h-[100px] rounded-[5px] my-[15px] p-[10px]'>
					<p>{postInfo.body}</p>
					<div>
						{postInfo.media ? (<img src={postInfo.media} alt='user posted media' />) : "" }
					</div>
				</div>
				<div className='flex justify-between'>
					<div className='flex'>
						<p className='mr-[20px]'>{postInfo._count.comments} comments</p>
						<p>{postInfo._count.reactions} ❤️</p>
					</div>
					<ReactPost id={postInfo.id} />
				</div>
				<Comments comments={postInfo.comments}/>
			</div>
		</div>
  )
}

export default SinglePost