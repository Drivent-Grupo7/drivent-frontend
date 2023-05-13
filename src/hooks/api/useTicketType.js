import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicketType() {
  const token = useToken();

  const {
    data: ticketTypes,
    loading: ticketTypesLoading,
    error: ticketTypesError,
    act: getTicketTypes,
  } = useAsync(() => ticketApi.getTicketTypes(token));

  return {
    ticketTypes,
    ticketTypesLoading,
    ticketTypesError,
    getTicketTypes,
  };
}

export function useSaveReserve() {
  const token = useToken();

  const {
    loading: saveReserveLoading,
    error: saveReserveError,
    act: saveReserve,
  } = useAsync((data) => ticketApi.save(data, token), false);

  return {
    saveReserveLoading,
    saveReserveError,
    saveReserve,
  };
}
