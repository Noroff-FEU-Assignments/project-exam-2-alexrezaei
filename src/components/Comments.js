import React from 'react'
import { useState, useEffect} from "react";
import { getToken } from './storage/Storage';
import { BASE_URL } from "../api/api"
import { useParams, Link } from 'react-router-dom';
function Comments(props) {
	const id = useParams();
	const token = getToken();
	const [postInfo, setPostInfo] = useState(
		{
			comments: [ {
				author: {
					avatar: "",
					banner: "",
					email: "",
					name: "",
				},
				body: "",
				created: "",
				id: 0,
				owner: "",
				postId: 0,
				replyToId: null,
			}]
		}
	);

	async function getComments() {
		const url = BASE_URL + "/social/posts/" + id.postId + "?_comments=true"
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
		getComments()
	},[])
  return (
		<div>
			<div>{postInfo.comments.map(comment => 
					<div className='flex items-center border-[1px] border-solid rounded-[5px] p-[10px] mt-[20px]'>
						<div className='flex flex-col'>
							<p className='mb-[10px]'><Link className='text-[#13D5FF]' to={"/profile/" + comment.author.name}>{comment.author.name}</Link></p>
							<div className='w-[80px] h-[80px] rounded-[5px]'>
								<img className='w-full h-full' src={comment.author.avatar} />
							</div>
						</div>
						<div>
						<p className='ml-[10px]'>{comment.body}</p>
						</div>
					</div>
					)}
				</div>
		</div>
  )
}

export default Comments