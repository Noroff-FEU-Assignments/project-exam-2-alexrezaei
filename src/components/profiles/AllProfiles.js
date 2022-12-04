import { getToken } from "../storage/Storage";
import { BASE_URL } from "../../api/api";
import { useState, useEffect } from "react"
import blankProfile from "../../assets/blankprofile.png"
import { Link } from "react-router-dom";
function AllProfiles() {
	document.title = 'Profiles'
	const [profileInfo, setProfileInfo] = useState([])
	const url = BASE_URL + "/social/profiles";
  const token = getToken();

  async function getAllProfiles() {
    const options = {
		  headers: {
			Authorization: "Bearer " + token,
		  },
		}
    try {
      const res = await fetch(url, options)
			const json = await res.json()
			console.log(json)
			setProfileInfo(json)
    }catch{}
  }

	useEffect(() => {
    getAllProfiles()
  }, [])

  return (
    <div>
			{profileInfo.map(profile => 
			<div className='flex flex-col items-center h-full bg-[#1A1919] mb-[20px] rounded-[10px] p-[20px] max-w-[350px]'>
				<div className='w-[80px] h-[80px]'>
					<img className='w-[100%] h-[100%] rounded-[5px]' src={profile.avatar ? profile.avatar :	blankProfile } />
				</div>
				<div>
					<p className='text-[20px] mt-[15px] text-center'>{profile.name}</p>
					<div className='flex'>
						<p>{profile._count.posts} Posts</p>
						<p className='mx-[0] sm:mx-[16px]'>{profile._count.followers} Followers</p>
						<p>{profile._count.following} Following</p>
					</div>
				</div>
				<Link className="text-[#13D5FF]" to={"/profile/" + profile.name} >Visit Profile </Link>
			</div>)}
		</div>
  )
}

export default AllProfiles