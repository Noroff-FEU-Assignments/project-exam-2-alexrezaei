import React from 'react'
import AllPosts from '../components/AllPosts'

function Postpage() {
  document.title = 'All Posts'
  return (
    <div>
      <AllPosts />
    </div>
  )
}

export default Postpage