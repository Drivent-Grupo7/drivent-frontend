import useAsync from '../useAsync';
import useToken from '../useToken';
import * as paymentApi from '../../services/paymentApi';
import useTicket from './useTicket';

export default function usePayment() {
  const token = useToken();
  const { ticket } = useTicket();
  
  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: getPayment
  } = useAsync(() => paymentApi.getPayment(ticket.id, token));

  return {
    payment,
    paymentLoading,
    paymentError,
    getPayment
  };
}
