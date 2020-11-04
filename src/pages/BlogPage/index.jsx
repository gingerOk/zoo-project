import React from "react";
import {posts} from "../../data";
import PostsList from "./components/PostsList";
import {FaPlus} from "react-icons/fa";

const BlogPage = () => {
  const handleClick = e => {
    e.preventDefault();
  };
  return (
    <>
      <div className="row justify-content-end">
        <div className="col-4">
          <button
            type="button"
            className="btn btn-dark px-5 py-2 my-4"
            onClick={handleClick}
          >
            <FaPlus />
            Add Post
          </button>
        </div>
      </div>
      <PostsList posts={posts} />
    </>
  );
};

export default BlogPage;
