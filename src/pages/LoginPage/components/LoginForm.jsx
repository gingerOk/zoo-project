import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const initialData = {
    email: "",
    password: "",
  };

const LoginForm = () => {
const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = (data) => {
    const errors = {}
    if (!data.email) errors.email = "Email cannot be blank"
    if (!data.password) errors.password = "Password cannot be blank"

    return errors
  }

  const handleSubmit = async e => {
      e.preventDefault();
      const errors = validate(data);
      setErrors(errors);
    //   if (Object.keys(errors).length === 0) {
    //     setLoading(true);
    //     try {
    //       await props.submit(data);
    //       setLoading(false);
    //     } catch (error) {
    //       setErrors(error.response.data.errors);
    //       setLoading(false);
    //     }
    //   }
  }
  
  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="mt-2 text-center alert alert-dark">Please Login</h1>
      <label htmlFor="inputEmail" className="mt-2">
        Email address
      </label>
      <input
        type="email"
        value={data.email}
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        required
        autoFocus
      />
      <label htmlFor="inputPassword" className="mt-2">
        Password
      </label>
      <input
        type="text"
        value={data.password}
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required
      />
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
