"use client";
import React, { useState } from "react";
import { posts } from "../search/post.js";
const page = () => {
  const [query, setQuiry] = useState("");
  const cetagory = ["CSS", "Programming", "Frontend", "Web Dev"];
  const fetchCetagory = posts.filter((post) => {
    return post.category.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
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
          return <li key={index} onClick={() => setQuiry(k)}>{k}</li>;
        })}
      </div>
      <br /><br /><br /><br />
      <div>
        {fetchCetagory.map((post) => {
          return (
            <div key={post.id}>
              <li>{post.title}</li>
              <li>{post.category}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
