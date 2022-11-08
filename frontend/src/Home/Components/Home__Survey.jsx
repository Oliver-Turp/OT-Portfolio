import Details from './Survey/Home__Survey-Details';
import Quote from './Survey/Home__Survey-Quote';
import { useTabs } from '../Hooks/useTabs';

const surveyTabs = [
  { id: 'details', content: { title: 'details', content: <Details /> } },
  { id: 'quote', content: { title: 'request a quote', content: <Quote /> } },
];

const Home__Survey = () => {
  const { tab, goToTab, tabId } = useTabs(surveyTabs, surveyTabs[0].id);
  console.log(tab)
  console.log(tabId)

  return (
    <div className="home__survey-wrap">
      <h1>web dev / design</h1>
      <section className="survey_tabs">
        {surveyTabs.map((surveyTab) => (
          <button
            key={surveyTab.id}
            type="button"
            onClick={() => goToTab(surveyTab.id)}
            className={tabId === surveyTab.id ? 'active' : ''}
          >
            {surveyTab.content.title}
          </button>
        ))}
      </section>
      {tab.content.content}
    </div>
  );
};

export default Home__Survey;
