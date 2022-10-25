import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useBaseUrl from "../hooks/useBaseUrl";
import { useCallback } from "react";

const AuthContext = React.createContext();

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};

const ADMIN_USER_TOKEN_KEY = "adminUserToken";
const ADMIN_USERNAME_KEY = "adminUsername";

function AuthProvider({ children }) {
  const [token, setToken] = useLocalStorage(ADMIN_USER_TOKEN_KEY);
  //   const [adminUsername, setAdminUsername] = useLocalStorage(ADMIN_USERNAME_KEY);
  const [adminUsername, setAdminUsername] = useState("");
  const { baseUrl } = useBaseUrl();

  function logoutAdmin() {
    setToken("");
  }

  const getAdminInfo = async () => {
    // console.log(token)

    try {
      const data = await (
        await fetch(baseUrl + "auth/@me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
      ).json();

      if (data.success) {
        setAdminUsername(data.data.admin.email);
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function attemptLogin({ email, password }) {
    try {
      const response = await fetch(baseUrl + "auth/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
      return { success: false, message: "Couldn't fetch data" };
    }
  }

  useEffect(() => {
    if (token) {
      getAdminInfo();
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        adminUsername,
        setAdminUsername,
        logoutAdmin,
        attemptLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
