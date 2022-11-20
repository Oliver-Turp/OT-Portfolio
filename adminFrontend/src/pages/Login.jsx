import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthProvider';
import StatusMessage, { FAILED, SUCCESS } from '../components/StatusMessage';
import { useCheckToken } from '../hooks/useCheckToken';
import { useSessionStorage } from '../hooks/useSessionStorage';

function Login({ setIsAuthenticated }) {
  const { setToken, attemptLogin, token, isOnline, setAdminUsername } = useAuthContext();

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

    const result = await attemptLogin({ username, password });

    if (result.success === true) {
      setIsAuthenticated(true)
      setMessage({ success: true, message: 'Signed In' });
      setAdminUsername(result.data.admin.username)
      setToken(result.data.admin.token);
    } else {
      setMessage({
        success: false,
        message: result.message || 'Could not login. Try again...',
      });
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
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
