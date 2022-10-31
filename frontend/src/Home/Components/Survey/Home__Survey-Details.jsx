import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

import "../../Styles/home__survey.css";

const Home__Survey_Details = () => {
  const detailsList = [
    {
      id: "icon_pages",
      text: "the more pages, the bigger the budget, but we are equipped to handle projects of any size!",
    },
    {
      id: "icon_responsive",
      text: "our content looks great on all devices!",
    },
    {
      id: "icon_contact",
      text: "we use emailJS to intuitively handle all contact form requests!",
    },
    {
      id: "icon_domains",
      text: "as long as the name is available, we cover domains from multiple sources! <Need this as a list if you can??> .co.uk, .com, .net, .tv, .info, .me, .biz just to name a few!",
    },
    {
      id: "icon_hosting",
      text: "our hosting provider not only is powered by 100% green renewable sources, it also boasts a 99.9% uptime rating!",
    },
    {
      id: "icon_https",
      text: "as security should be a major focus on all modern websites, we offer https security as standard!",
    },
    {
      id: "icon_seo",
      text: "search engine optimisation is an important art when crafting websites. for those needing a more detailed SEO approach to force themselves up the google rankings, we offer a higher tier service just for you! <br><br> For those without the budget or need to push for the first 5 search results, the basic package still contains all the rudimentary seo techniques!",
    },
    {
      id: "icon_support",
      text: "we use emailJS to intuitively handle all contact form requests!",
    },
  ];
  return (
    <main className="survey_services">
      <div className="service_card">
        <div className="card_content">
          <div className="column">
            <div className="row">
              <FontAwesomeIcon icon={faCheck} />
              <p>unlimited pages</p>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="icon-hover"
                id="icon_pages"
              />
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faCheck} />
              <p>mobile responsive</p>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="icon-hover"
                id="icon_responsive"
              />
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faCheck} />
              <p>multiple contact forms</p>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="icon-hover"
                id="icon_contact"
              />
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faCheck} />
              <p>custom domains</p>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="icon-hover"
                id="icon_domains"
              />
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faCheck} />
              <p>99.9% web hosting uptime</p>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="icon-hover"
                id="icon_hosting"
              />
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faCheck} />
              <p>HTTPS certified</p>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="icon-hover"
                id="icon_https"
              />
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faCheck} />
              <p>search engine optimisation</p>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="icon-hover"
                id="icon_seo"
              />
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faCheck} />
              <p>multiple support options</p>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="icon-hover"
                id="icon_support"
              />
            </div>
          </div>
        </div>
        <div className="card_details hidden">
          <i>more details here</i>
        </div>
      </div>
    </main>
  );
};

export default Home__Survey_Details;
