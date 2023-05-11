import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function useSavePayment() {
  const token = useToken();
  
  const {
    loading: savePaymentsLoading,
    error: savePaymentsError,
    act: processPayment
  } = useAsync((data) => paymentApi.processPayment(data, token), false);

  return {
    savePaymentsLoading,
    savePaymentsError,
    processPayment
  };
}
