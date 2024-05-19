import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { signin } = useAuth();

  const fromPage = state?.from || '/blog/new'; // за замовчуванням на /blog/new

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.userName.value;
    const password = form.password.value;

    signin(username, password, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div className="login-page">
      <h1>Сторінка входу, з: { fromPage }</h1>

      <form onSubmit={ handleSubmit } className="login-page__form">
        <label>
          Ім'я користувача: <input type="text" name="userName" required />
        </label>
        <label>
          Пароль: <input type="password" name="password" required />
        </label>
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
};                                           