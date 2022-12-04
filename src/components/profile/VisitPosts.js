import { useState, useEffect } from "react";
import { BASE_URL } from "../../api/api"
import Posts from '../Posts';
import { getToken } from "../storage/Storage";
function VisitPosts(props) {
    const [postInfo, setPostInfo] = useState([]);
    const token = getToken();
    const url = BASE_URL + "/social/profiles/" + props.name + "/posts";
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
              <Posts key={post.id} title={post.title} date={post.created} avatar={props.avatar} user={post.name} id={post.id} />
              )
          }
    </div>  
  )
}

export default VisitPosts