import React, {useState} from "react";
import {Link} from "react-router-dom";
import FormMessage from "components/FormMessage";
import isEmail from "validator/es/lib/isEmail";
import equals from "validator/es/lib/equals";

const initialData = {
  email: "",
  password: "",
  passwordConfirmation: "",
};

const RegisterForm = props => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const setFormObj = (data, fn) => ({target}) => {
    return fn({...data, [target.name]: target.value});
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

  const validate = data => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = "Wrong email";
    if (!data.password) errors.password = "Password cannot be blank";
    if (!data.passwordConfirmation)
      errors.passwordConfirmation = "Password confirmation cannot be blank";
    if (!equals(data.password, data.passwordConfirmation))
      errors.password = "Password is not equals to password confirm";
    return errors;
  };
  return (
    <form
      className={`${loading ? "spinner-border" : ""}`}
      onSubmit={handleSubmit}
    >
      <h1 className="h3 mb-3 font-weight-normal">Please signup yourself</h1>
      <div className={`form-group ${errors.email ? "alert-danger" : ""}`}>
        <label htmlFor="inputEmail">
          Email address
        </label>
        <input
          value={data.email}
          onChange={setFormObj(data, setData)}
          name="email"
          type="text"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          autoFocus
        />
        {errors.email && <FormMessage>{errors.email}</FormMessage>}
      </div>
      <div className={`form-group ${errors.password ? "alert-danger" : ""}`}>
        <label htmlFor="inputPassword" className="mt-2">
          Password
        </label>
        <input
          value={data.password}
          type="text"
          onChange={setFormObj(data, setData)}
          name="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
        />
        {errors.password && <FormMessage>{errors.password}</FormMessage>}
      </div>
      <div
        className={`form-group ${
          errors.passwordConfirmation ? "alert-danger" : ""
        }`}
      >
        <label htmlFor="confirmPassword" className="mt-2">
          Confirm Password
        </label>
        <input
          value={data.passwordConfirmation}
          type="text"
          onChange={setFormObj(data, setData)}
          name="passwordConfirmation"
          id="confirmPassword"
          className="form-control"
          placeholder="Confirm Password"
        />
        {errors.passwordConfirmation && (
          <FormMessage>{errors.passwordConfirmation}</FormMessage>
        )}
      </div>
      <div>
        <button className="btn btn-dark mt-2 w-50" type="submit">
          Register
        </button>
        <Link to="/" className="btn btn-light mt-2 w-50">
          Cencel
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
