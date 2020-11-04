import React from "react";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
