import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validate } from "../../utils/validateLoginForm";
import { login } from "../../controllers/loginController";
import facebookIcon from "../../assets/facebook-icon.svg";
import googleIcon from "../../assets/google-icon.svg";
import "animate.css";
import "./LoginForm.css";

export default function LoginForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(input);
    setInput({
      username: "",
      password: "",
    });
  };

  return (
    <section className="login-form-container">
      <div className="top-divider" />

      <header className="text-start">
        <h1 className="form-title">Bem-vindo de volta!</h1>
        <p className="form-subtitle">
          Estamos felizes que esteja de volta para retomar seus
          <br /> projetos no ProjetoList.
        </p>
      </header>

      <form className="login-form-wrapper" onSubmit={handleSubmit}>
        <div className="username-field form-group form-floating">
          <input
            required
            id="usernamefloatingInput"
            className={`form-control ${
              Boolean(errors.username) ? "is-invalid" : ""
            }`}
            type="email"
            placeholder="E-mail"
            name="username"
            value={input.username}
            onChange={handleInputChange}
            aria-label="E-mail"
          />
          <label htmlFor="usernamefloatingInput">E-mail</label>
          {Boolean(errors.username) && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>

        <div className="senha-field form-group form-floating">
          <input
            required
            id="passwordfloatingInput"
            className={`form-control ${
              Boolean(errors.password) ? "is-invalid" : ""
            }`}
            type="password"
            placeholder="Senha"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            aria-label="Senha"
          />
          <label htmlFor="passwordfloatingInput">Senha</label>
          {Boolean(errors.password) && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <div className="reset-password text-end">
          <Link to="/reset-password">
            <p>Esqueceu sua senha?</p>
          </Link>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="submit-btn btn btn-primary col-12 rounded-pill"
            disabled={Object.keys(errors).length}
          >
            Entrar
          </button>
        </div>
      </form>

      <div className="text-center">
        <div className="signin-icons">
          <p>OU ENTRE COM</p>
          <div className="icons d-flex justify-content-between">
            <div id="facebook-icon">
              <Link to="/signin">
                <img src={facebookIcon} alt="Facebook Icon" />
              </Link>
            </div>
            <div id="google-icon">
              <Link to="/sigin">
                <img src={googleIcon} alt="Facebook Icon" />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p>
            Ainda não tem uma conta?&nbsp;
            <Link
              className="text-decoration-none"
              to="/signup"
              onClick={(e) => e.preventDefault()}
            >
              <b>Cadastre-se</b>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
