import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

import '../../Styles/home__survey.css';
import { useTabs } from '../../Hooks/useTabs';
import { detailsList } from '../../Data/detailsList';
import { useState } from 'react';

const Home__Survey_Details = () => {
  const { goToTab, tab, tabId } = useTabs(detailsList);
  const [lastItemOnClick, setLastItemOnClick] = useState();

  return (
    <main className="survey_services">
      <div className="service_card">
        <div className="card_content">
          <div className="column">
            {detailsList.map((item) => (
              <div
                className={
                  'row ' +
                  (item.id === lastItemOnClick
                    ? 'row-active'
                    : item.id === tabId
                    ? 'row-hover'
                    : '')
                }
                key={item.id}
                onClick={() => {
                  setLastItemOnClick(item.id);
                  goToTab(item.id);
                }}
                onMouseOverCapture={() => goToTab(item.id)}
                onMouseLeave={() => goToTab(lastItemOnClick)}
              >
                <FontAwesomeIcon icon={faCheck} />
                <p>{item.caption}</p>
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="icon-hover"
                  id={item.id}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="card_details">
          {/* <i>more details here</i> */}
          {tab === undefined ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <p
                style={{
                  fontSize: '1.5rem',
                  color: 'green',
                  textAlign: 'center',
                }}
              >
                Select an item to see more info
              </p>
            </div>
          ) : (
            tab.content
          )}
        </div>
      </div>
    </main>
  );
};

export default Home__Survey_Details;
