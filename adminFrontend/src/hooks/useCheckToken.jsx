import { useEffect } from 'react';
import { useAuthContext } from '../contexts/AuthProvider';
import { useState } from 'react';

export function useCheckToken() {
  const [isChecking, setIsChecking] = useState(true);
  const { getAdminInfo } = useAuthContext();
  const [isValid, setIsValid] = useState();
  const [response, setResponse] = useState();

  async function checkToken() {
    setIsChecking(true);
    const res = await getAdminInfo();
    setResponse(res);
    setIsChecking(false);
  }

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (!isChecking) {
      console.log(response);
      if (response.success === true) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  }, [isChecking]);

  return {
    isValid,
    isChecking,
    retryCheckToken: checkToken,
  };
}
