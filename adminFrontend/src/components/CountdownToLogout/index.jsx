import React from "react";
import { useEffect, useState } from "react";
import Styles from "./styles.module.css";
import ModalDialog from "../ModalDialog";
import { useAuthContext } from "../../contexts/AuthProvider";

const CountdownToLogout = ({ children, hide }) => {
  const [remainingTime, setRemainingTime] = useState(60);
  const { logoutAdmin, refreshToken, setToken } = useAuthContext();

  useEffect(() => {
    // timerId should be ""  when no timer is currently running or a non-empty value when a timer is running
    let timerId = "";
    // starting the timer
    if (timerId === "") {
      timerId = setInterval(() => countdown(timerId, remainingTime), 1000);
    }

    function countdown() {
      if (remainingTime <= 0) {
        clearInterval(timerId);
        logoutAdmin();
        return;
      } else {
        setRemainingTime((prevValue) => prevValue - 1);
      }
    }

    return () => {
      if (timerId !== "") {
        console.log("timer stopped");
        clearInterval(timerId);
      }
    };
  }, [remainingTime]);

  useEffect(() => {
    console.log("remainingTime: ", remainingTime);
  }, [remainingTime]);

  return (
    <div className={Styles.Countdown}>
      {/* <div className={Styles.Countdown__RemainingTime}>
        <p className={Styles.RemainingTime__Value}>{remainingTime}</p>
      </div> */}
      <ModalDialog
        hide={() => hide()}
        title="Logout"
        mainContent={`You're about to be logged out in less than ${remainingTime} seconds. "Continue" to work or "Logout" to well... logout`}
        btnGroup={{
          proceedBtnText: "Continue",
          proceedBtnOnClick: async () => {
            // get a new token to replace the old one.
            const response = await refreshToken();
            if (response.success === true) {
              setToken(response.data.token);
            } else {
              console.log(response.message);
            }

            // restart this timer
          },
          cancelBtnText: "Leave",
          cancelBtnOnClick: () => {
            logoutAdmin();
          },
        }}
      />
    </div>
  );
};

export default CountdownToLogout;
