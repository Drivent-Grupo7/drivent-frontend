import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useTicket from '../../../hooks/api/useTicket';
import TicketArea from '../../../components/TicketArea';
import PaymentArea from '../../../components/PaymentArea';
import { useEffect } from 'react';

export default function Payment() {
  const { ticket, getTicket } = useTicket();

  useEffect(() => {
  }, [ticket]);
  
  if (ticket) {
    return (
      <>
        <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
        {ticket.id ? <PaymentArea ticket={ticket} getTicket={getTicket}/> : <TicketArea getTicket={getTicket}/>}
      </>
    );
  } else {
    return (<>loading</>);
  }
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
