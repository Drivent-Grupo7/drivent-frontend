import useAsync from '../useAsync';
import useToken from '../useToken';
import * as paymentApi from '../../services/paymentApi';
import useTicket from './useTicket';

export default function useSavePayment() {
  const token = useToken();
  const { ticket } = useTicket();
  
  const {
    loading: savePaymentsLoading,
    error: savePaymentsError,
    act: processPayment
  } = useAsync((data) => paymentApi.processPayment(ticket.id, data, token), false);

  return {
    savePaymentsLoading,
    savePaymentsError,
    processPayment
  };
}
