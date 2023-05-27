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
