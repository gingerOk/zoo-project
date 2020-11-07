import React from "react";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  const submit = () => {};
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <LoginForm submit={submit} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
