import React from 'react';

export const LogIn: React.FC = () => {
  document.querySelector('.to-sign-up')?.addEventListener('click', toggleAuth);
  document.querySelector('.to-log-in')?.addEventListener('click', toggleAuth);
  return (
    <>
      <form className="sign-up hide">
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account</p>
          <hr></hr>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input className="sign-up__input-text" type="text" placeholder="Enter Email" name="email" required />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input className="sign-up__input-password" type="password" placeholder="Enter Password" name="psw" required />
          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input className="sign-up__input-password" type="password" placeholder="Repeat Password" name="psw-repeat" required />
          <label>
            <input type="checkbox" defaultChecked name="remember" /> Remember me
          </label>
          <p>
            By creating an account you agree to our{' '}
            <a href="#" style={{ color: 'dodgerblue' }}>
              Terms & Privacy
            </a>
            .
          </p>
          <div className="container">
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
            <p className="psw">
              Already have an account? <span className="to-log-in">Log In?</span>
            </p>
          </div>
        </div>
      </form>
      <form className="log-in">
        <div className="container">
          <h1>Log in</h1>
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input className="log-in__input-text" type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input className="log-in__input-password" type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Log in</button>
          <label>
            <input type="checkbox" /* checked="checked"*/ name="remember" /> Remember me
          </label>
        </div>

        <div className="container">
          <p className="psw">
            No account yet? <span className="to-sign-up">Sign Up?</span>
          </p>
          <p className="psw">
            Forgot <a href="!#">password?</a>
          </p>
        </div>
      </form>
    </>
  );
};

function toggleAuth(event: Event) {
  const target = event.target as HTMLSpanElement;
  if (!target?.classList.contains('to-log-in')) {
    console.log(event);
    document.querySelector('.log-in')?.classList.add('hide');
    document.querySelector('.sign-up')?.classList.remove('hide');
  } else {
    document.querySelector('.log-in')?.classList.remove('hide');
    document.querySelector('.sign-up')?.classList.add('hide');
  }
}
