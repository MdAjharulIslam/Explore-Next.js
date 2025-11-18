"use client"
import React from 'react'
import { posts } from '@/app/search/post.js';

const Page = ({ params }) => {
  const { category } = params;

  const fetchPost = posts.filter((post) => 
    post.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <h2>Category: {category}</h2>

      {fetchPost.length === 0 && <p>No posts found.</p>}

      {fetchPost.map((post, index) => (
        <div key={index}>
          <li>{post.title}</li>
          <li>{post.category}</li>
        </div>
      ))}
    </div>
  );
};

export default Page;
