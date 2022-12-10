import React, { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useBaseUrl from '../hooks/useBaseUrl';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { useCheckToken } from '../hooks/useCheckToken'

const AuthContext = React.createContext();

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};

const ADMIN_USER_TOKEN_KEY = 'adminUserToken';
const ADMIN_USERNAME_KEY = 'adminUsername';


const JWT_EXPIRED = 'jwt expired'

function AuthProvider({ children }) {
  const [token, setToken] = useLocalStorage(ADMIN_USER_TOKEN_KEY, '');
  //   const [adminUsername, setAdminUsername] = useLocalStorage(ADMIN_USERNAME_KEY);
  const [adminUsername, setAdminUsername] = useSessionStorage(ADMIN_USERNAME_KEY, '');
  const { baseUrl } = useBaseUrl();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showCountdown, setShowCountdown] = useState(false)
  const [startTokenCheck, setStartTokenCheck] = useState(false);


  useEffect(() => {
    let timerId = "";

    if (startTokenCheck === true) {
      timerId = setInterval(
        async () => {
          const resp = await checkTokenAboutToExpire();
          // showCountdown !== true // makes sure you don't set countdown if the showCountdown is already true
          if (resp.success === true && resp.aboutToExpire === true) {
            console.log("resp: ", resp, "   isinvalid: ", )
            setShowCountdown(true)
          } else if (resp.success === false && resp.message === JWT_EXPIRED) {
            setToken("")
          }
        }, 3000
      )
    }

    if (token === "") {
      if (timerId !== "") {
        clearInterval(timerId)
      }
    }

    return () => {
      if (timerId !== "") {
        clearInterval(timerId)
      }
    }

  }, [startTokenCheck, token])


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



  const checkTokenAboutToExpire = async () => {
    try {
      const data = await (
        await fetch(baseUrl + 'auth/checkToken', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
      ).json();

      return data;
    } catch (err) {

      if (err === "jwt expired") {
        return { success: false, message: JWT_EXPIRED }
      } else {
        return { success: false };
      }
    }
  };

  async function refreshToken() {
    try {
      const data = await (
        await fetch(baseUrl + 'auth/signNewToken', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
      ).json();

      return data;
    } catch (err) {
      return { success: false, message: err}
    }
  }


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
        showCountdown,
        setShowCountdown,
        setStartTokenCheck,
        refreshToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
