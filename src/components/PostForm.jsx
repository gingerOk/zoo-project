import React, {useState} from "react";
import {Link} from "react-router-dom";

const initialData = {
  id: null,
  title: "",
  img: "",
  shortDescription: "",
};

const PostForm = ({item, saveItem}) => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = data => {
    const errors = {};
    if (!data.title) errors.title = "Title cannot be blank";
    if (!data.img) errors.img = "Image cannot be blank";
    if (!data.description) errors.description = "Description cannot be blank";

    return errors;
  };

  const handleChange = e => {
    const errors = validate(data);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
    }
  };
  return (
    <form>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="row">
            {/*  title START */}
            <div className="col-6">
              <div
                className={`form-group ${errors.title ? "alert-danger" : ""}`}
              >
                <label htmlFor="title">Post title</label>
                <input
                  value={data.title}
                  onChange={handleChange}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Post title"
                  className="form-control"
                />
              </div>
              {/*  title END */}
              {/*  img field Start */}
              <div className="form-group">
                <div className="custom-file">
                  <label htmlFor="photo" className="custom-file-label">
                    Photo
                  </label>
                  <input
                    onChange={handleChange}
                    type="file"
                    id="photo"
                    className="custom-file-input"
                  />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className={`form-group ${errors.img ? "alert-danger" : ""}`}>
                <label htmlFor="img">Image</label>
                <input
                  name="img"
                  value={data.img}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          {/*  img field END */}
          {/* description START */}
          <div className={`form-group ${errors.shortDescription ? "alert-danger" : ""}`}>
            <label htmlFor="description">Short description</label>
            <textarea
              value={data.shortDescription}
              onChange={handleChange}
              name="description"
              id="description"
              placeholder="Short description"
              className="form-control"
            ></textarea>
          </div>
          {/* description END */}
          {/* buttons start */}
          <div>
            <button className="btn btn-dark mt-2 w-50" type="submit">
              Save
            </button>
            <Link to="/blog" className="btn btn-light mt-2 w-50">
              Hide form
            </Link>
          </div>
          {/* buttons end */}
        </div>
      </div>
    </form>
  );
};

export default PostForm;
