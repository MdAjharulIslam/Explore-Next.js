"use client";
import React, { useState } from "react";
import { posts } from "./post";

const page = () => {
  const [quiry, setQuiry] = useState("");

  const filterPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(quiry.toLowerCase());
  });
  return (
    <div>
      <div>
        <h1>Search posts</h1>
        <input
          type="text" 
          name=""
          id=""
          onChange={(e) => setQuiry(e.target.value)}
        />
        {filterPosts.length > 0 ? (
          filterPosts.map((post) => {
            return (
              <div key={post.id}>
                <p>{post.title}</p>
                <p>{post.category}</p>
              </div>
            );
          })
        ) : (
          <h1>no posts</h1>
        )}
      </div>
      <div>
        <h1>All posts</h1>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <p>{post.title}</p>
              <p>{post.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
