import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export function useSaveSubscription() {
  const token = useToken();

  const {
    loading: saveSubscriptionLoading,
    error: saveSubscriptionError,
    act: saveSubscription
  } = useAsync((data) => activityApi.save(data, token), false);

  return {
    saveSubscriptionLoading,
    saveSubscriptionError,
    saveSubscription
  };
}

export function useDeleteSubscription() {
  const token = useToken();

  const {
    loading: deleteSubscriptionLoading,
    error: deleteSubscriptionError,
    act: deleteSubscription
  } = useAsync((activityId) => activityApi.deleteSub(activityId, token), false);

  return {
    deleteSubscriptionLoading,
    deleteSubscriptionError,
    deleteSubscription
  };
}

export function useAuditoriums() {
  const token = useToken();

  const {
    data: auditoriums,
    loading: auditoriumsLoading,
    error: auditoriumsError,
    act: listAuditoriums,
  } = useAsync(() => activityApi.listAuditoriums(token));

  return {
    auditoriums,
    auditoriumsLoading,
    auditoriumsError,
    listAuditoriums,
  };
};

export function useActivities() {
  const token = useToken();

  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: listActivities,
  } = useAsync((dateId) => activityApi.listActivities(token, dateId));

  return {
    activities,
    activitiesLoading,
    activitiesError,
    listActivities,
  };
};
