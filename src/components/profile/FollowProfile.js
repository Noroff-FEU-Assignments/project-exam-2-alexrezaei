
import { BASE_URL } from "../../api/api"
import { getToken } from "../storage/Storage";
function FollowProfile(props) {
	const token = getToken();

	async function followUser() {
		const url = BASE_URL + "/social/profiles/" + props.user + "/follow";
		const options = {
			method: "PUT",
		  headers: {
			Authorization: "Bearer " + token,
		  },
		}
		try {
			const res = await fetch(url, options)
			const json = await res.json()
			window.location.reload(true);
		} catch(error){
			console.log(error)
		}
	}
	async function unFollowUser() {
		const url = BASE_URL + "/social/profiles/" + props.user + "/unfollow";
		const options = {
			method: "PUT",
		  headers: {
			Authorization: "Bearer " + token,
		  },
		}
		try {
			const res = await fetch(url, options)
			const json = await res.json()
			window.location.reload(true);
		} catch(error){
			console.log(error)
		}
	}
  return (
    <div className="flex flex-col items-center m-[20px]">
        <button className="mb-[10px]" onClick={followUser}>Follow</button>
        <button onClick={unFollowUser}>Unfollow</button>
    </div>
  )
}

export default FollowProfile