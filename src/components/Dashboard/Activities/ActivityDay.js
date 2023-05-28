import React, { useEffect } from 'react';
import styled from 'styled-components';
import useToken from '../../../hooks/useToken';
import { useActivities, useAuditoriums, useDeleteSubscription, useSaveSubscription } from '../../../hooks/api/useActivity';
import useUserId from '../../../hooks/useUserId';
import { RiLoginBoxLine } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

export function ActivitiesDayContent({ dateId }) {
  const token = useToken();
  const userId = useUserId();
  const { auditoriums, auditoriumsLoading } = useAuditoriums();
  const { activities, activitiesLoading, listActivities } = useActivities();
  const { saveSubscription, saveSubscriptionLoading } = useSaveSubscription();
  const { deleteSubscription, deleteSubscriptionLoading } = useDeleteSubscription();

  useEffect(() => {
    listActivities(dateId);
  }, [token, dateId]);

  const handleActivityClick = async(activityId, subscriber, capacity) => {
    if (!subscriber) {
      if (capacity < 1) {
        alert('Não há vagas!');
      } else {
        try {
          const data = {
            activityId
          };
          await saveSubscription(data);
          listActivities(dateId);
          toast('Informações salvas com sucesso!');
        } catch (err) {
          toast('Não foi possível salvar suas informações!');
          alert('Conflito com outra(s) atividade(s) nesse mesmo dia e horário! Primeiro se desinscreva dela(s) para se inscrever nesta!');
        }
      }
    } else {
      const deletar = window.confirm('Você já está inscrito! Deseja se desinscrever?');
      if (deletar) {
        try {
          await deleteSubscription(activityId);
          listActivities(dateId);
          toast('Informações salvas com sucesso!');
        } catch (err) {
          toast('Não foi possível salvar suas informações!');
        }
      }
    }
  };
  if (activities && !activitiesLoading && auditoriums && !auditoriumsLoading) {
    return (
      <Container>
        {auditoriums.map((auditorium) => (
          <ActivitesTitleBox key={auditorium.name}>
            <PlaceOfActivity>
              <h3>{auditorium.name}</h3>
            </PlaceOfActivity>
            <Activities>
              {activities.map((activity) => {
                if (activity.auditoriumId === auditorium.id) {
                  const startTime = activity.startsAt;
                  const startObject = new Date(startTime);
                  const startTimeString = startObject.toLocaleTimeString();

                  const endTime = activity.endsAt;
                  const endObject = new Date(endTime);
                  const endTimeString = endObject.toLocaleTimeString();

                  const height = endObject.getHours() - startObject.getHours();

                  const subscriber = activity.Subscriber.find((sub) => sub.userId === userId);
                  const capacity = activity.capacity - activity.Subscriber.length;
                  return (
                    <ActivityBox
                      key={activity.id}
                      subscriber={subscriber}
                      onClick={() => { (!saveSubscriptionLoading && !deleteSubscriptionLoading) && handleActivityClick(activity.id, subscriber, capacity); }}
                      height={height}
                    >
                      <Activity>
                        <h5>{activity.title}</h5>
                        <p>
                          {startTimeString}-{endTimeString}
                        </p>
                      </Activity>

                      <Participate subscriber={subscriber} capacity={capacity}>
                        <div>{
                          subscriber
                            ? <AiOutlineCheckCircle />
                            : activity.capacity - activity.Subscriber.length === 0
                              ? <TiDeleteOutline />
                              : <RiLoginBoxLine />
                        }
                        </div>
                        <p>
                          {subscriber ? 'Inscrito' : `${activity.capacity - activity.Subscriber.length} vagas`}
                        </p>
                      </Participate>
                    </ActivityBox>
                  );
                }
                return null;
              })}
            </Activities>
          </ActivitesTitleBox>
        ))}
      </Container>
    );
  } else {
    return (<>loading</>);
  }
}

const Container = styled.div`
  display: flex;
`;

const PlaceOfActivity = styled.div`
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
  height: 389px;
  display: flex;
  flex-direction: column;
  border: 1px solid #D7D7D7;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
`;

const ActivityBox = styled.div`
  width: 250px;
  height:  ${(props) => (props.height * 79) + (props.height === 1 ? 0 : (props.height - 1) * 10)}px;
  border-radius: 5px;
  background-color: ${(props) => (props.subscriber ? '#D0FFDB' : '#f1f1f1')};
  display: flex;
  padding: 10px;
  margin-top: 10px;
  cursor: ${(props) => (props.disableBackground ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disableBackground ? '0.5' : '1')};
`;

const Activity = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid #CFCFCF;
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
  color: ${(props) => (props.subscriber || props.capacity ? '#078632' : '#CC6666')};
  div {
    font-size: 28px;
    margin-bottom: 3px;
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
  flex-direction: column;
  margin-bottom: 20px;
`;

