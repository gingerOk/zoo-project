import React, {useState, useContext, useEffect} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import _find from "lodash/find";
import {saveAnimal, useAnimals} from "../contexts/AnimalsContext";

const initialData = {
  id: null,
  title: "",
  img: "",
  shortDescription: "",
};

const PostForm = () => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useAnimals();
  const history = useHistory();
  const {id} = useParams();

  useEffect(() => {
    const animal = _find(state.animals, {id}) || {};
    if (animal.id && animal.id !== data.id) {
      setData(animal);
      console.log("edit item");
    }
    if (!animal.id && data.id) {
      setData(initialData);
      console.log("new item");
    }
  }, [id, data.id, state]);

  const validate = data => {
    const errors = {};
    if (!data.title) errors.title = "Title cannot be blank";
    if (!data.img) errors.img = "Image cannot be blank";
    if (!data.description) errors.description = "Description cannot be blank";

    return errors;
  };

  const handleChange = e => {
    setData({...data, [e.target.name]: e.target.value});
    console.log(data);
    setErrors({...errors, [e.target.name]: ""});
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
          setErrors(err.response.data.errors);
          setLoading(false);
        });
    }
  };

  const setFormObj = (data, fn) => ({target}) => {
    const value = target.value;
    return fn({...data, [target.name]: value});
  };

  return (
    <form onSubmit={handleSubmit}>
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
                  onChange={setFormObj(data, setData)}
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
                  <input type="file" id="photo" className="custom-file-input" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className={`form-group ${errors.img ? "alert-danger" : ""}`}>
                <label htmlFor="img">Image</label>
                <input
                  name="img"
                  value={data.img}
                  onChange={setFormObj(data, setData)}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          {/*  img field END */}
          {/* description START */}
          <div
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
          </div>
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
