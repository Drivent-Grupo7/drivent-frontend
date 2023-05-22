import React, { useState } from 'react';
import styled from 'styled-components';
import openActivity from '../../../assets/images/openActivity.png';
import closedActivity from '../../../assets/images/closedActivity.png';
import registered from '../../../assets/images/registered.png';

const activities = [
  {
    title: 'Minecraft: montando o PC ideal',
    time: '09:00 - 10:00',
    image: openActivity,
    vacancies: 27,
  },
  {
    title: 'LoL: montando o PC ideal',
    time: '10:00 - 11:00',
    image: closedActivity,
    vacancies: 0,
  },
  {
    title: 'Palestra x',
    time: '09:00 - 11:00',
    image: openActivity,
    vacancies: 27,
  },
  {
    title: 'Palestra y',
    time: '09:00 - 10:00',
    image: openActivity,
    vacancies: 27,
  },
  {
    title: 'Palestra z',
    time: '10:00 - 11:00',
    image: closedActivity,
    vacancies: 0,
  },
];

export default function ActivitiesDayContent() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleActivityClick = (index) => {
    const selectedActivityHasVacancies = activities[index].vacancies > 0;

    if (selectedActivityHasVacancies) {
      setSelectedActivity(index === selectedActivity ? null : index);
    }
  };

  return (
    <Container>
      <Main>
        <ContentBox>
          <Content>
            <ActivitesTitleBox>
              <PlaceOfActivity>
                <h3>Auditório Principal</h3>
              </PlaceOfActivity>
            </ActivitesTitleBox>

            <Activities>
              {activities.slice(0, 2).map((activity, index) => (
                <ActivityBox
                  key={index}
                  isSelected={selectedActivity === index}
                  onClick={() => handleActivityClick(index)}
                  disableBackground={activity.image === closedActivity || activity.vacancies === 0}
                >
                  <Activity>
                    <h5>{activity.title}</h5>
                    <p>{activity.time}</p>
                  </Activity>

                  <Participate>
                    <img src={selectedActivity === index ? registered : activity.image} alt="Activity" />
                    <p style={{ color: activity.vacancies === 0 ? 'red' : 'green' }}>
                      {selectedActivity === index ? 'Inscrito' : `${activity.vacancies} vagas`}
                    </p>
                  </Participate>
                </ActivityBox>
              ))}
            </Activities>
          </Content>

          <Content>
            <ActivitesTitleBox>
              <PlaceOfActivity>
                <h3>Auditório Lateral</h3>
              </PlaceOfActivity>
            </ActivitesTitleBox>

            <Activities>
              {activities.slice(2, 3).map((activity, index) => (
                <ActivityBox
                  key={index + 2}
                  isSelected={selectedActivity === index + 2}
                  onClick={() => handleActivityClick(index + 2)}
                  disableBackground={activity.image === closedActivity || activity.vacancies === 0}
                >
                  <Activity>
                    <h5>{activity.title}</h5>
                    <p>{activity.time}</p>
                  </Activity>

                  <Participate>
                    <img src={selectedActivity === index + 2 ? registered : activity.image} alt="Activity" />
                    <p style={{ color: activity.vacancies === 0 ? 'red' : 'green' }}>
                      {selectedActivity === index + 2 ? 'Inscrito' : `${activity.vacancies} vagas`}
                    </p>
                  </Participate>
                </ActivityBox>
              ))}
            </Activities>
          </Content>

          <Content>
            <ActivitesTitleBox>
              <PlaceOfActivity>
                <h3>Sala de Workshop</h3>
              </PlaceOfActivity>
            </ActivitesTitleBox>

            <Activities>
              {activities.slice(3).map((activity, index) => (
                <ActivityBox
                  key={index + 3}
                  isSelected={selectedActivity === index + 3}
                  onClick={() => handleActivityClick(index + 3)}
                  disableBackground={activity.image === closedActivity || activity.vacancies === 0}
                >
                  <Activity>
                    <h5>{activity.title}</h5>
                    <p>{activity.time}</p>
                  </Activity>

                  <Participate>
                    <img src={selectedActivity === index + 3 ? registered : activity.image} alt="Activity" />
                    <p style={{ color: activity.vacancies === 0 ? 'red' : 'green' }}>
                      {selectedActivity === index + 3 ? 'Inscrito' : `${activity.vacancies} vagas`}
                    </p>
                  </Participate>
                </ActivityBox>
              ))}
            </Activities>
          </Content>
        </ContentBox>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #d7d7d7;
`;

const PlaceOfActivity = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 13px;
  h3 {
    width: 139px;
    height: 20px;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #7b7b7b;
    white-space: nowrap;
  }
`;

const Activities = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActivityBox = styled.div`
  width: 265px;
  height: 79px;
  border-radius: 5px;
  background-color: ${(props) => (props.isSelected ? '#c3e2ff' : '#f1f1f1')};
  display: flex;
  align-items: center;
  margin: 10px;
  cursor: ${(props) => (props.disableBackground ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disableBackground ? '0.5' : '1')};
`;

const Activity = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h5 {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #4b4b4b;
    margin-top: 5px;
  }
`;

const Participate = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 34px;
    height: 34px;
    margin-bottom: 5px;
  }
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
  }
`;

const ActivitesTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;
