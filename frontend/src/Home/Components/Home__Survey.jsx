import Details from "./Survey/Home__Survey-Details";
import Quote from "./Survey/Home__Survey-Quote";

const Home__Survey = () => {
  return (
    <div className="home__survey-wrap">
      <h1>web dev / design</h1>
      <section className="survey_tabs">
        <p>details</p>
        <p>request a quote</p>
      </section>
      <Details />
      <Quote />
    </div>
  );
};

export default Home__Survey;
