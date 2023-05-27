import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import openActivity from '../../../assets/images/openActivity.png';
import closedActivity from '../../../assets/images/closedActivity.png';
import registered from '../../../assets/images/registered.png';
import useToken from '../../../hooks/useToken';
import * as activityApi from '../../../services/activityApi';

export function ActivitiesDayContentOne() {
  const token = useToken();
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showAuditoriums, setShowAuditoriums] = useState([]);
  const [showActivities, setShowActivities] = useState([]);

  useEffect(() => {
    const fetchAuditoriums = async() => {
      const res = await activityApi.listAuditoriums(token);
      setShowAuditoriums(res);
    };

    const fetchActivities = async() => {
      const res = await activityApi.listActivitiesOne(token);
      setShowActivities(res);
    };

    fetchAuditoriums();
    fetchActivities();
  }, [token]);

  const handleActivityClick = (activityId) => {
    const clickedActivity = showActivities.find(
      (activity) => activity.id === activityId
    );

    if (clickedActivity) {
      setSelectedActivity((prevState) =>
        prevState === activityId ? null : activityId
      );
    }
  };

  return (
    <Container>
      <Main>
        <Box>
          {showAuditoriums.map((auditorium) => (
            <ActivitesTitleBox key={auditorium.name}>
              <PlaceOfActivity>
                <h3>{auditorium.name}</h3>
              </PlaceOfActivity>
            </ActivitesTitleBox>
          ))}
        </Box>
        <ContentBox>
          <Content>
            <Activities>
              {showActivities.map((activity, index) => {
                if (activity.auditoriumId === 1) {
                  const startTime = activity.startsAt;
                  const startObject = new Date(startTime);
                  const startTimeString = startObject.toLocaleTimeString();

                  const endTime = activity.endsAt;
                  const endObject = new Date(endTime);
                  const endTimeString = endObject.toLocaleTimeString();

                  return (
                    <ActivityBox
                      key={index}
                      isSelected={selectedActivity === index}
                      onClick={() => handleActivityClick(index)}
                      disableBackground={activity.capacity === 0}
                    >
                      <Activity>
                        <h5>{activity.title}</h5>
                        <p>
                          {startTimeString}-{endTimeString}
                        </p>
                      </Activity>

                      <Participate>
                        <img
                          src={
                            selectedActivity === index
                              ? registered
                              : activity.capacity === 0
                                ? closedActivity
                                : openActivity
                          }
                          alt="Activity"
                        />
                        <p style={{ color: activity.capacity === 0 ? 'red' : 'green' }}>
                          {selectedActivity === index ? 'Inscrito' : `${activity.capacity} vagas`}
                        </p>
                      </Participate>
                    </ActivityBox>
                  );
                }
              })}
            </Activities>
          </Content>

          <Content>
            <Activities>
              {showActivities.map((activity, index) => {
                if (activity.auditoriumId === 2) {
                  const startTime = activity.startsAt;
                  const startObject = new Date(startTime);
                  const startTimeString = startObject.toLocaleTimeString();

                  const endTime = activity.endsAt;
                  const endObject = new Date(endTime);
                  const endTimeString = endObject.toLocaleTimeString();

                  return (
                    <ActivityBox
                      key={index}
                      isSelected={selectedActivity === index}
                      onClick={() => handleActivityClick(index)}
                      disableBackground={activity.capacity === 0}
                    >
                      <Activity>
                        <h5>{activity.title}</h5>
                        <p>
                          {startTimeString}-{endTimeString}
                        </p>
                      </Activity>

                      <Participate>
                        <img
                          src={
                            selectedActivity === index
                              ? registered
                              : activity.capacity === 0
                                ? closedActivity
                                : openActivity
                          }
                          alt="Activity"
                        />
                        <p style={{ color: activity.capacity === 0 ? 'red' : 'green' }}>
                          {selectedActivity === index ? 'Inscrito' : `${activity.capacity} vagas`}
                        </p>
                      </Participate>
                    </ActivityBox>
                  );
                }
              })}
            </Activities>
          </Content>

          <Content>
            <Activities>
              {showActivities.map((activity, index) => {
                if (activity.auditoriumId === 3) {
                  const startTime = activity.startsAt;
                  const startObject = new Date(startTime);
                  const startTimeString = startObject.toLocaleTimeString();

                  const endTime = activity.endsAt;
                  const endObject = new Date(endTime);
                  const endTimeString = endObject.toLocaleTimeString();

                  return (
                    <ActivityBox
                      key={index}
                      isSelected={selectedActivity === index}
                      onClick={() => handleActivityClick(index)}
                      disableBackground={activity.capacity === 0}
                    >
                      <Activity>
                        <h5>{activity.title}</h5>
                        <p>
                          {startTimeString}-{endTimeString}
                        </p>
                      </Activity>

                      <Participate>
                        <img
                          src={
                            selectedActivity === index
                              ? registered
                              : activity.capacity === 0
                                ? closedActivity
                                : openActivity
                          }
                          alt="Activity"
                        />
                        <p style={{ color: activity.capacity === 0 ? 'red' : 'green' }}>
                          {selectedActivity === index ? 'Inscrito' : `${activity.capacity} vagas`}
                        </p>
                      </Participate>
                    </ActivityBox>
                  );
                }
              })}
            </Activities>
          </Content>
        </ContentBox>
      </Main>
    </Container>
  );
}

export function ActivitiesDayContentTwo() {
  const token = useToken();
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showAuditoriums, setShowAuditoriums] = useState([]);
  const [showActivities, setShowActivities] = useState([]);

  useEffect(() => {
    const fetchAuditoriums = async() => {
      const res = await activityApi.listAuditoriums(token);
      setShowAuditoriums(res);
    };

    const fetchActivities = async() => {
      const res = await activityApi.listActivitiesTwo(token);
      setShowActivities(res);
    };

    fetchAuditoriums();
    fetchActivities();
  }, [token]);

  const handleActivityClick = (activityId) => {
    const clickedActivity = showActivities.find(
      (activity) => activity.id === activityId
    );

    if (clickedActivity) {
      setSelectedActivity((prevState) =>
        prevState === activityId ? null : activityId
      );
    }
  };

  return (
    <Container>
      <Main>
        <Box>
          {showAuditoriums.map((auditorium) => (
            <ActivitesTitleBox key={auditorium.name}>
              <PlaceOfActivity>
                <h3>{auditorium.name}</h3>
              </PlaceOfActivity>
            </ActivitesTitleBox>
          ))}
        </Box>
        <ContentBox>
          <Content>
            <Activities>
              {showActivities.map((activity, index) => {
                if (activity.auditoriumId === 1) {
                  const startTime = activity.startsAt;
                  const startObject = new Date(startTime);
                  const startTimeString = startObject.toLocaleTimeString();

                  const endTime = activity.endsAt;
                  const endObject = new Date(endTime);
                  const endTimeString = endObject.toLocaleTimeString();

                  return (
                    <ActivityBox
                      key={index}
                      isSelected={selectedActivity === index}
                      onClick={() => handleActivityClick(index)}
                      disableBackground={activity.capacity === 0}
                    >
                      <Activity>
                        <h5>{activity.title}</h5>
                        <p>
                          {startTimeString}-{endTimeString}
                        </p>
                      </Activity>

                      <Participate>
                        <img
                          src={
                            selectedActivity === index
                              ? registered
                              : activity.capacity === 0
                                ? closedActivity
                                : openActivity
                          }
                          alt="Activity"
                        />
                        <p style={{ color: activity.capacity === 0 ? 'red' : 'green' }}>
                          {selectedActivity === index ? 'Inscrito' : `${activity.capacity} vagas`}
                        </p>
                      </Participate>
                    </ActivityBox>
                  );
                }
              })}
            </Activities>
          </Content>

          <Content>
            <Activities>
              {showActivities.map((activity, index) => {
                if (activity.auditoriumId === 2) {
                  const startTime = activity.startsAt;
                  const startObject = new Date(startTime);
                  const startTimeString = startObject.toLocaleTimeString();

                  const endTime = activity.endsAt;
                  const endObject = new Date(endTime);
                  const endTimeString = endObject.toLocaleTimeString();

                  return (
                    <ActivityBox
                      key={index}
                      isSelected={selectedActivity === index}
                      onClick={() => handleActivityClick(index)}
                      disableBackground={activity.capacity === 0}
                    >
                      <Activity>
                        <h5>{activity.title}</h5>
                        <p>
                          {startTimeString}-{endTimeString}
                        </p>
                      </Activity>

                      <Participate>
                        <img
                          src={
                            selectedActivity === index
                              ? registered
                              : activity.capacity === 0
                                ? closedActivity
                                : openActivity
                          }
                          alt="Activity"
                        />
                        <p style={{ color: activity.capacity === 0 ? 'red' : 'green' }}>
                          {selectedActivity === index ? 'Inscrito' : `${activity.capacity} vagas`}
                        </p>
                      </Participate>
                    </ActivityBox>
                  );
                }
              })}
            </Activities>
          </Content>

          <Content>
            <Activities>
              {showActivities.map((activity, index) => {
                if (activity.auditoriumId === 3) {
                  const startTime = activity.startsAt;
                  const startObject = new Date(startTime);
                  const startTimeString = startObject.toLocaleTimeString();

                  const endTime = activity.endsAt;
                  const endObject = new Date(endTime);
                  const endTimeString = endObject.toLocaleTimeString();

                  return (
                    <ActivityBox
                      key={index}
                      isSelected={selectedActivity === index}
                      onClick={() => handleActivityClick(index)}
                      disableBackground={activity.capacity === 0}
                    >
                      <Activity>
                        <h5>{activity.title}</h5>
                        <p>
                          {startTimeString}-{endTimeString}
                        </p>
                      </Activity>

                      <Participate>
                        <img
                          src={
                            selectedActivity === index
                              ? registered
                              : activity.capacity === 0
                                ? closedActivity
                                : openActivity
                          }
                          alt="Activity"
                        />
                        <p style={{ color: activity.capacity === 0 ? 'red' : 'green' }}>
                          {selectedActivity === index ? 'Inscrito' : `${activity.capacity} vagas`}
                        </p>
                      </Participate>
                    </ActivityBox>
                  );
                }
              })}
            </Activities>
          </Content>
        </ContentBox>
      </Main>
    </Container>
  );
}

export function ActivitiesDayContentThree() {
  const token = useToken();
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showAuditoriums, setShowAuditoriums] = useState([]);
  const [showActivities, setShowActivities] = useState([]);

  useEffect(() => {
    const fetchAuditoriums = async() => {
      const res = await activityApi.listAuditoriums(token);
      setShowAuditoriums(res);
    };

    const fetchActivities = async() => {
      const res = await activityApi.listActivitiesThree(token);
      setShowActivities(res);
    };

    fetchAuditoriums();
    fetchActivities();
  }, [token]);

  const handleActivityClick = (activityId) => {
    const clickedActivity = showActivities.find(
      (activity) => activity.id === activityId
    );

    if (clickedActivity) {
      setSelectedActivity((prevState) =>
        prevState === activityId ? null : activityId
      );
    }
  };

  return (
    <Container>
      <Main>
        <Box>
          {showAuditoriums.map((auditorium) => (
            <ActivitesTitleBox key={auditorium.name}>
              <PlaceOfActivity>
                <h3>{auditorium.name}</h3>
              </PlaceOfActivity>
            </ActivitesTitleBox>
          ))}
        </Box>
        <ContentBox>
          <Content>
            <Activities>
              {showActivities.map((activity, index) => {
                if (activity.auditoriumId === 1) {
                  const startTime = activity.startsAt;
                  const startObject = new Date(startTime);
                  const startTimeString = startObject.toLocaleTimeString();

                  const endTime = activity.endsAt;
                  const endObject = new Date(endTime);
                  const endTimeString = endObject.toLocaleTimeString();

                  return (
                    <ActivityBox
                      key={index}
                      isSelected={selectedActivity === index}
                      onClick={() => handleActivityClick(index)}
                      disableBackground={activity.capacity === 0}
                    >
                      <Activity>
                        <h5>{activity.title}</h5>
                        <p>
                          {startTimeString}-{endTimeString}
                        </p>
                      </Activity>

                      <Participate>
                        <img
                          src={
                            selectedActivity === index
                              ? registered
                              : activity.capacity === 0
                                ? closedActivity
                                : openActivity
                          }
                          alt="Activity"
                        />
                        <p style={{ color: activity.capacity === 0 ? 'red' : 'green' }}>
                          {selectedActivity === index ? 'Inscrito' : `${activity.capacity} vagas`}
                        </p>
                      </Participate>
                    </ActivityBox>
                  );
                }
              })}
            </Activities>
          </Content>

          <Content>
            <Activities>
              {showActivities.map((activity, index) => {
                if (activity.auditoriumId === 2) {
                  const startTime = activity.startsAt;
                  const startObject = new Date(startTime);
                  const startTimeString = startObject.toLocaleTimeString();

                  const endTime = activity.endsAt;
                  const endObject = new Date(endTime);
                  const endTimeString = endObject.toLocaleTimeString();

                  return (
                    <ActivityBox
                      key={index}
                      isSelected={selectedActivity === index}
                      onClick={() => handleActivityClick(index)}
                      disableBackground={activity.capacity === 0}
                    >
                      <Activity>
                        <h5>{activity.title}</h5>
                        <p>
                          {startTimeString}-{endTimeString}
                        </p>
                      </Activity>

                      <Participate>
                        <img
                          src={
                            selectedActivity === index
                              ? registered
                              : activity.capacity === 0
                                ? closedActivity
                                : openActivity
                          }
                          alt="Activity"
                        />
                        <p style={{ color: activity.capacity === 0 ? 'red' : 'green' }}>
                          {selectedActivity === index ? 'Inscrito' : `${activity.capacity} vagas`}
                        </p>
                      </Participate>
                    </ActivityBox>
                  );
                }
              })}
            </Activities>
          </Content>

          <Content>
            <Activities>
              {showActivities.map((activity, index) => {
                if (activity.auditoriumId === 3) {
                  const startTime = activity.startsAt;
                  const startObject = new Date(startTime);
                  const startTimeString = startObject.toLocaleTimeString();

                  const endTime = activity.endsAt;
                  const endObject = new Date(endTime);
                  const endTimeString = endObject.toLocaleTimeString();

                  return (
                    <ActivityBox
                      key={index}
                      isSelected={selectedActivity === index}
                      onClick={() => handleActivityClick(index)}
                      disableBackground={activity.capacity === 0}
                    >
                      <Activity>
                        <h5>{activity.title}</h5>
                        <p>
                          {startTimeString}-{endTimeString}
                        </p>
                      </Activity>

                      <Participate>
                        <img
                          src={
                            selectedActivity === index
                              ? registered
                              : activity.capacity === 0
                                ? closedActivity
                                : openActivity
                          }
                          alt="Activity"
                        />
                        <p style={{ color: activity.capacity === 0 ? 'red' : 'green' }}>
                          {selectedActivity === index ? 'Inscrito' : `${activity.capacity} vagas`}
                        </p>
                      </Participate>
                    </ActivityBox>
                  );
                }
              })}
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

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
