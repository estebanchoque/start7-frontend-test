import React from "react";
import LoginForm from "../../components/LoginForm/index";
import SideImage from "../../components/SideImage";

export default function Login() {
  return (
    <div className="row">
      <div className="col-6">
        <LoginForm />
      </div>
      <div className="col-6">
        <SideImage />
      </div>
    </div>
  );
}
