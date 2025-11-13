
import React from 'react'

const page = async({params}) => {
 const {id} = await params
 const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
 const post = await res.json();
  return (
    <div>
        <h4>{post.id}</h4>
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
    </div>
  )
}

export default page
