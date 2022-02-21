import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useStateAuth } from 'entities/auth/stateAuth';

export const SigninPage: React.FC = () => {
  const [content, setContent] = useState<string>('signin');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [localError, setLocalError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const { isAuth, error, isRegistered, signin, register } = useStateAuth();

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const changeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const changeRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalError(false);
    setPasswordError(false);
    if (content === 'signin') {
      signin(email, password);
    } else {
      if (password.length < 8) {
        setPasswordError(true);
      } else if (password !== repeatPassword) {
        setLocalError(true);
      } else {
        register({ name, email, password });
      }
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  if (content === 'registration' && isRegistered) {
    setContent('signin');
  }

  return (
    <div className="pt-40">
      <div className="signin-page__bg">
        <div className="container">
          <div className="signin-page__title">
            <h1>{content === 'signin' ? 'Вход' : 'Регистрация'}</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="signin-page">
          <div className={`signin-page__error ${(error || localError || passwordError) && 'signin-page__error-visible'}`}>
            {content === 'registration' && localError && 'Пароли должны совпадать'}
            {content === 'registration' && error && 'Пользователь с таким email уже существует'}
            {content === 'signin' && 'Неверный email или пароль'}
            {passwordError && 'Пароль должен быть не менее 8 символов'}
          </div>
          <form className="signin-page__form" onSubmit={onSubmit}>
            <input className="signin-page__form-item" type="email" placeholder="email" onChange={changeEmail} />
            {content === 'registration' && (
              <input className="signin-page__form-item" type="text" placeholder="имя" onChange={changeName} />
            )}
            <input className="signin-page__form-item" type="password" placeholder="пароль" onChange={changePassword} min={8} />
            {content === 'registration' && (
              <input
                className="signin-page__form-item"
                type="password"
                placeholder="подтвердить пароль"
                onChange={changeRepeatPassword}
                min={8}
              />
            )}
            {content === 'signin' ? (
              <button className="signin-page__form-btn">Войти</button>
            ) : (
              <button className="signin-page__form-btn">Зарегистрироваться</button>
            )}
            {content === 'signin' ? (
              <p>
                Еще не с нами? Тогда{' '}
                <a className="signin-page__link" onClick={() => setContent('registration')}>
                  зарегистрируйтесь
                </a>
              </p>
            ) : (
              <p>
                Уже с нами?
                <a className="signin-page__link" onClick={() => setContent('signin')}>
                  Войти
                </a>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
