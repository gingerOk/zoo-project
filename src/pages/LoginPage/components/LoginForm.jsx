import React, {useState} from "react";
import {propTypes} from "react-bootstrap/esm/Image";
import {Link} from "react-router-dom";
import FormMessage from "../../../components/FormMessage";

const initialData = {
  email: "",
  password: "",
};

const LoginForm = props => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = data => {
    const errors = {};
    if (!data.email) errors.email = "Email cannot be blank";
    if (!data.password) errors.password = "Password cannot be blank";

    return errors;
  };

  const handleChange = e => {
    e.preventDefault();
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const errors = validate(data);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        await props.submit(data);

        setLoading(false);
      } catch (error) {
        setErrors(error.response.data.errors);
        setLoading(false);
      }
    }
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="mt-2 text-center alert alert-dark">Please Login</h1>
      <div className="form-group">
        <label htmlFor="inputEmail" className="mt-2">
          Email address
        </label>
        <input
          type="email"
          onChange={handleChange}
          value={data.email}
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          autoFocus
        />
        {errors.email && <FormMessage>{errors.email}</FormMessage>}
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword" className="mt-2">
          Password
        </label>
        <input
          type="text"
          onChange={handleChange}
          value={data.password}
          id="inputPassword"
          className="form-control"
          placeholder="Password"
        />
        {errors.email && <FormMessage>{errors.email}</FormMessage>}
      </div>
      <button type="submit" className="btn btn-dark mt-4 w-50">
        Login
      </button>
      <Link to="/" className="btn btn-light mt-4 w-50">
        Cansel
      </Link>
    </form>
  );
};

export default LoginForm;
