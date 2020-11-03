import React from "react";
import {posts} from '../../data'
import PostsList from "./components/PostsList";

const BlogPage = () => {
    return (

        <PostsList posts={posts}/>
    )
};

export default BlogPage;
