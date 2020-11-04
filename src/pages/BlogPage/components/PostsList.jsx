import React from "react";

const PostsList = ({posts}) => {
  return (
    <div className="container">
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4" key={post.id}>
            <div className="card my-3" style={{maxWidth: 540}}>
              <img src={post.img} className="card-img-top" alt={post.title} />

              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.shortDescription}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
