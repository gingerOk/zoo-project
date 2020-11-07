import React from "react";
import {posts} from "../../data";
import PostsList from "./components/PostsList";
import AddBtn from "../../components/AddBtn"
import {BsPlus} from "react-icons/bs";

const BlogPage = () => {
  const handleClick = e => {
    e.preventDefault();
  };
  return (
    <>
      <AddBtn text='Add Post' handleClick={handleClick} />
      <PostsList posts={posts} />
    </>
  );
};

export default BlogPage;
