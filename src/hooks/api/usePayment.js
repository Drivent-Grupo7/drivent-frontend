import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function usePayment() {
  const token = useToken();
  
  const {
    data: payments,
    loading: paymentsLoading,
    error: paymentsError,
    act: processPayment
  } = useAsync(() => paymentApi.processPayment(token));

  return {
    payments,
    paymentsLoading,
    paymentsError,
    processPayment
  };
}
