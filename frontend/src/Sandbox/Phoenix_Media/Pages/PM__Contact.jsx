import { Helmet, HelmetProvider } from "react-helmet-async";

import "../Styles/pm__contact.css";

const PM__Contact = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | Contact</title>
        </Helmet>
      </HelmetProvider>
      <div className="pm__contact-wrap">
        <h1>contact me</h1>

        <form action="" method="POST">
          <div className="pm__contact_input-group">
            <label>Full Name *</label>
            <input
              type="text"
              class="pm__contact_input-item"
              placeholder="Enter Your Name"
              name="name"
              required
            />
          </div>
          <div className="pm__contact_input-groups">
            <div className="pm__contact_input-group">
              <label>Email *</label>
              <input
                type="email"
                class="pm__contact_input-item"
                placeholder="PrivateAlex@TheMonies.Uganda"
                name="email"
                required
              />
            </div>
            <div className="pm__contact_input-group">
              <label>Phone</label>
              <input
                type="text"
                class="pm__contact_input-item"
                placeholder="Enter Your Phone Number"
                name="phone"
              />
            </div>
          </div>
          <div className="pm__contact_input-group">
            <label>Message *</label>
            <textarea
              class="pm__contact_input-textarea"
              placeholder="Your Message Here"
              name="message"
              required
            />
          </div>
          <input
            type="submit"
            value="Send Message"
            name="submit"
            className="pm__contact_input-button"
          />
        </form>
      </div>
    </>
  );
};

export default PM__Contact;
