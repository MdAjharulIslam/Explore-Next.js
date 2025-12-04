"use client";
import React, { useState } from "react";
import { posts } from "../search/post.js";
import Link from "next/link.js";
const page = () => {
  const cetagory = ["CSS", "Programming", "Frontend", "Web-Dev"];
  const [c, setc] = useState("");
  const filterdPost = posts.filter(
    (post) => post.category.toLowerCase() === c.toLowerCase()
  );

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
      <br />
      <br />
      <br />
      <br />
      <div>
        {cetagory.map((k, index) => {
          return (
            <li key={index}>
              <Link href={`/cetagory/${k}`}>{k}</Link>

              {/* <h1 onClick={() => setc(k)}>{k}</h1> */}
            </li>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* <div>
        {filterdPost.map((ca, index) => {
          return (
            <div key={index}>
              <h1>{ca.id}</h1>
              <h1>{ca.title}</h1>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default page;
