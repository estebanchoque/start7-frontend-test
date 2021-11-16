import React, { useState } from "react";
import { login } from "../../controllers/loginController";
import "./LoginForm.css";

export default function LoginForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
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
    <div className="login-form-container">
      <header className="text-start">
        <h1 className="form-title">Bem-vindo de volta!</h1>
        <p className="form-subtitle">
          Estamos felizes que esteja de volta para retomar seus
          <br /> projetos no ProjetoList
        </p>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            required
            className="username-field form-control"
            type="email"
            placeholder="E-mail"
            name="username"
            value={input.username}
            onChange={handleInputChange}
            aria-label="E-mail"
          />
        </div>
        <div className="form-group">
          <input
            required
            className="senha-field form-control"
            type="password"
            placeholder="Senha"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            aria-label="Senha"
          />
        </div>
        <div className="form-group text-end">
          <a href="/">Esqueceu sua senha?</a>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="submit-btn btn btn-primary col-12 rounded-pill"
          >
            Entrar
          </button>
        </div>
        <div className="form-group">
          <p>OU ENTRE COM</p>
        </div>
        <div className="form-group">
          <p>
            Ainda não tem uma conta?&nbsp;
            <a
              href="/"
              className="text-decoration-none"
              onClick={(e) => e.preventDefault()}
            >
              <b>Cadastre-se</b>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
