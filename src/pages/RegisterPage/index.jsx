import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import RegisterForm from "pages/RegisterPage/components/RegisterForm";
import {users} from "api";

const RegisterPage = ({setMessage}) => {
  const history = useHistory();

  const submit = ({email, password}) => {
    users.create({email, password}).then(() => {
      setMessage("User has created");
      history.push("/login");
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <RegisterForm submit={submit} />
        </div>
      </div>
    </div>
  );
};

RegisterPage.propTypes = {
  setMessage: PropTypes.func.isRequired,
};

export default RegisterPage;
