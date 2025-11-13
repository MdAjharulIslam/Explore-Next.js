import Link from 'next/link';
import React from 'react'

const  page = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
  return (
    <div >
      <h1>Here is all posts</h1>
      <ul>
        {posts.map((post)=>{

            return <li key={post.id}>
                <Link href={`posts/${post.id}`}>{post.title}</Link>
                </li>
        })}
      </ul>
    </div>
  )
}

export default page
