import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import Content from "../../GenericContent";

import "../../Styles/theme__toggle.css";

const Toggle = () => {
  const body = document.body;

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "EGLight"
  );

  if (theme === "EGLight" || theme === "EGDark") {
    body.classList.add(theme);
  } else {
    body.classList.add("EGLight");
  }

  const changeTheme = (e) => {
    let newTheme = theme === "EGDark" ? "EGLight" : "EGDark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    if (theme === "EGDark") {
      body.classList.replace("EGDark", "EGLight");
    } else {
      body.classList.replace("EGLight", "EGDark");
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox | Theme Toggle</title>
        </Helmet>
      </HelmetProvider>
      <div className="theme__toggle-wrap">
        <Content />
        <div className="clickMe">
          <p>Click</p>
          <FontAwesomeIcon
            id="generic__toggle"
            icon={theme === "EGDark" ? faMoon : faSun}
            onClick={(e) => changeTheme(e)}
          />
          <p>Me</p>
        </div>
      </div>
    </>
  );
};

export default Toggle;
