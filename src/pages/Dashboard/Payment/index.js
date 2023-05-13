import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useTicket from '../../../hooks/api/useTicket';
import TicketArea from '../../../components/TicketArea';
import PaymentArea from '../../../components/PaymentArea';
import { useEffect, useContext } from 'react';
import UserContext from '../../../contexts/UserContext';

export default function Payment() {
  const { ticket } = useTicket();
  const { haveTicket, setHaveTicket } = useContext(UserContext);

  useEffect(() => {
    if(ticket) setHaveTicket(true);
  }, [ticket]);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {haveTicket? <PaymentArea /> : <TicketArea />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
