"use client";
import React, { useState } from "react";
import { posts } from "../search/post.js";
import Link from "next/link.js";
const page = () => {
 
  const cetagory = ["CSS", "Programming", "Frontend", "Web-Dev"];
  

  return (
    <div>
      <h1>Category page</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <li>{post.title}</li>
            <li>{post.category}</li>
          </div>
        );
      })}
<br /><br /><br /><br />
      <div>
        {cetagory.map((k, index) => {
          return <li key={index} >
          <Link href={`/cetagory/${k}`}>{k}</Link>
          </li>
        })}
      </div>
      <br /><br /><br /><br />
      
    </div>
  );
};

export default page;
