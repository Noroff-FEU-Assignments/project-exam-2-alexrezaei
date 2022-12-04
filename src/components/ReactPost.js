import React from 'react'
import { BASE_URL } from "../api/api";
import { getToken } from "./storage/Storage"
function ReactPost(props) {
	const postId = props.id
	const token = getToken()
	async function submitReact() {
		const symbol = "❤️"
		const url = BASE_URL + "/social/posts/" + postId + "/react/" + symbol;
		const options = {
			method: "PUT",
			headers: {
				Authorization: "Bearer " + token,
			},
		}
		try {
			const res = await fetch(url, options)
			window.location.reload(true)
		} catch {
		}
	}
  return (
      <div className='cursor-pointer' onClick={submitReact}><p>❤️</p></div>
  )
}

export default ReactPost