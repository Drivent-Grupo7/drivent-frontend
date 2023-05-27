import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

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
