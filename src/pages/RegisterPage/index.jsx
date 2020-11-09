import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import RegisterForm from "pages/RegisterPage/components/RegisterForm";
import {users} from "api";

const RegisterPage = ({setMessage}) => {
  const history = useHistory();

  const submit = user =>
    users.create(user).then(() => {
      setMessage("User has created");
      history.push("/login");
    });

  return (
    <div className="row">
      <div className="col-md-8">
        <RegisterForm submit={submit} />
      </div>
    </div>
  );
};

RegisterPage.propTypes = {
  setMessage: PropTypes.func.isRequired,
};

export default RegisterPage;