import React, {useState, useContext, useEffect, useRef} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import _find from "lodash/find";
import {generate} from "shortid";
import ImageLoader from "components/ImageLoader";
import {saveAnimal, useAnimals} from "contexts/AnimalsContext";
import axios from "axios";

const initialData = {
  id: null,
  name: "",
  imageLink: "",
  fact: "",
};

const PostForm = () => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useAnimals();
  const history = useHistory();
  const photoRef = useRef();
  const {id} = useParams();
  useEffect(() => {
    const animal = _find(state.animals, {id}) || {};
    if (animal.id && animal.id !== data.id) {
      setData(animal);
    }

    if (!animal.id && data.id) {
      setData(initialData);
    }
  }, [id, data.id, state]);

  const validate = data => {
    const errors = {};
    if (!data.name) errors.name = "Name cannot be blank";
    if (!data.imageLink) errors.imageLink = "Image cannot be blank";
    // if (!data.shortDescription)
    //   errors.shortDescription = "Description cannot be blank";

    return errors;
  };

  const updatePhoto = e => {
    const file = photoRef.current.files && photoRef.current.files[0];
    if (file) {
      const imageLink = "/img/" + file.name;
      setData(data => ({...data, imageLink}));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = validate(data);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      saveAnimal(dispatch, data)
        .then(() => {
          history.push("/animals");
        })
        .catch(err => {
          setLoading(false);
        });
    }
  };

  const setFormObj = (data, fn) => ({target}) => {
    return fn({...data, [target.name]: target.value});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="row">
            {/*  title START */}
            <div className="col-6">
              <div
                className={`form-group ${errors.name ? "alert-danger" : ""}`}
              >
                <label htmlFor="title">Animal Name</label>
                <input
                  value={data.name}
                  onChange={setFormObj(data, setData)}
                  type="text"
                  name="name"
                  id="title"
                  placeholder="Post title"
                  className="form-control"
                />
              </div>
              {/*  title END */}
              {/*  img field Start */}
              <div
                className={`form-group ${
                  errors.imageLink ? "alert-danger" : ""
                }`}
              >
                <label htmlFor="imageLink">Image</label>
                <input
                  name="imageLink"
                  value={data.imageLink}
                  onChange={setFormObj(data, setData)}
                  className="form-control"
                />
                <div className="custom-file">
                  <label htmlFor="photo" className="custom-file-label">
                    Photo
                  </label>
                  <input
                    ref={photoRef}
                    onChange={updatePhoto}
                    type="file"
                    id="photo"
                    className="custom-file-input"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              {/* <ImageLoader
                src={data.img}
                fallbackImg="http://via.placeholder.com/250x250"
                className="img_form"
                alt={data.name}
              /> */}
            </div>
          </div>
          {/*  img field END */}
          {/* description START */}
          {/* <div
            className={`form-group ${
              errors.shortDescription ? "alert-danger" : ""
            }`}
          >
            <label htmlFor="description">Short description</label>
            <textarea
              value={data.shortDescription}
              onChange={setFormObj(data, setData)}
              name="description"
              id="description"
              placeholder="Short description"
              className="form-control"
            ></textarea>
          </div> */}
          <div className={`form-group ${errors.fact ? "alert-danger" : ""}`}>
            <label htmlFor="fact">Fact about the animal</label>
            <textarea
              value={data.fact}
              onChange={setFormObj(data, setData)}
              name="fact"
              id="fact"
              placeholder="Fact"
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
