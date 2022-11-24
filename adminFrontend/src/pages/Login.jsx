import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthProvider';
import StatusMessage, { FAILED, SUCCESS } from '../components/StatusMessage';
import { useCheckToken } from '../hooks/useCheckToken';
import { useSessionStorage } from '../hooks/useSessionStorage';

const BTN_STATE = {
  DISABLE: 'disable',
  ENABLE: 'enable'
}

function Login() {
  const { setToken, attemptLogin, isOnline, setAdminUsername } = useAuthContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameErrorMsg, setUsernameErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

  const [message, setMessage] = useState({});


  async function handleSubmit(e) {
    e.preventDefault();
    console.log('submit proceed');
    if (username === '') {
      setUsernameErrorMsg('Username is required');
      return;
    } else {
      setUsernameErrorMsg('');
    }

    if (password === '') {
      setPasswordErrorMsg('Password is required');
      return;
    } else {
      setPasswordErrorMsg('');
    }

    disableSubmitBtn(e.target.submitBtn);
    const result = await attemptLogin({ username, password });

    if (result.success === true) {
      setMessage({ success: true, message: 'Signed In' });
      setAdminUsername(result.data.admin.username)
      setToken(result.data.admin.token);
    } else {
      setMessage({
        success: false,
        message: result.message || 'Could not login. Try again...',
      });
    }
    enableSubmitBtn(e.target.submitBtn);
  }

  function disableSubmitBtn(button) {
    changeSubmitBtnState(button, BTN_STATE.DISABLE);
  }

  function enableSubmitBtn(button) {
    changeSubmitBtnState(button, BTN_STATE.ENABLE)
  }

  function changeSubmitBtnState(button, btnState) {
    switch (btnState) {
      case BTN_STATE.DISABLE:
        button.disabled = true
        button.textContent = "Processing..."
        break;
      case BTN_STATE.ENABLE:
        button.disabled = false
        button.textContent = "Continue"
        break;
      default:
        throw new Error("Unknown button state")
    }
  }

  return (
    <>
      <header>
        <h1>Admin Login</h1>
      </header>
      <main
        style={{
          paddingInline: '1.2rem',
          paddingBlock: '2rem',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {isOnline === false && (
          <div
            style={{
              position: 'fixed',
              top: '1rem',
              left: '1rem',
              right: '1rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                backgroundColor: 'var(--error-clr)',
                borderRadius: '1rem',
                fontSize: '1rem',
                paddingInline: '2rem',
                paddingBlock: '1rem',
                color: 'var(--primary-clr)',
                fontWeight: '700'
              }}
            >
              Oops, you're offline. Check your Internet!
            </p>
          </div>
        )}
        {message.message && (
          <>
            <div
              style={{
                position: 'fixed',
                top: '5px',
                left: '1rem',
                right: '1rem',
                display: 'flex',
                justifyContent: 'center',
                zIndex: '2222',
              }}
            >
              <StatusMessage
                status={message.success ? SUCCESS : FAILED}
                message={message.message}
                setMessage={setMessage}
              />
            </div>
          </>
        )}
        <div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <h2>Login as Admin</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="string"
                id="username"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameErrorMsg && (
                <p className="missing-field-alert">{usernameErrorMsg}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordErrorMsg && (
                <p className="missing-field-alert">{passwordErrorMsg}</p>
              )}
            </div>

            <div className="form-group">
              <button type="submit" name='submitBtn'>Continue</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
