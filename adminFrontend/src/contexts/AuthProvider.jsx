import React, { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useBaseUrl from '../hooks/useBaseUrl';
import { useCallback } from 'react';

const AuthContext = React.createContext();

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};

const ADMIN_USER_TOKEN_KEY = 'adminUserToken';
const ADMIN_USERNAME_KEY = 'adminUsername';

function AuthProvider({ children }) {
  const [token, setToken] = useLocalStorage(ADMIN_USER_TOKEN_KEY);
  //   const [adminUsername, setAdminUsername] = useLocalStorage(ADMIN_USERNAME_KEY);
  const [adminUsername, setAdminUsername] = useState('');
  const { baseUrl } = useBaseUrl();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  function logoutAdmin() {
    setToken('');
  }

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    // Listen to the online status
    window.addEventListener('online', handleStatusChange);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  const getAdminInfo = async () => {
    // console.log(token)

    try {
      const data = await (
        await fetch(baseUrl + 'auth/@me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
      ).json();

      if (data.success) {
        setAdminUsername(data.data.admin.username);
      }
      return data;
    } catch (err) {
      return { success: false };
    }
  };

  async function attemptLogin({ username, password }) {
    try {
      const response = await fetch(baseUrl + 'auth/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  }

  // useEffect(() => {
  //   if (token) {
  //     getAdminInfo();
  //   }
  // }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        adminUsername,
        setAdminUsername,
        logoutAdmin,
        attemptLogin,
        getAdminInfo,
        isOnline,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
