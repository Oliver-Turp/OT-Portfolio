import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Content from "../../GenericContent";

import "../../Styles/contact__mailto.css";

const MailTo = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox | MailTo: Button</title>
        </Helmet>
      </HelmetProvider>
      <div className="theme__mailto-wrap">
        <Content />
        <div className="clickMe">
          <p>Click</p>
          <a
            href="mailto:someone@example.com?subject=Pretend Business Enquiry&body=This Is Only A Test, Do NOT Send This"
            id="generic__mailto"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <p>Me</p>
        </div>
      </div>
    </>
  );
};

export default MailTo;
