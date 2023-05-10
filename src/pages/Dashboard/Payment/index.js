import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useTicket from '../../../hooks/api/useTicket';
import TicketArea from '../../../components/TicketArea';
import PaymentArea from '../../../components/PaymentArea';

export default function Payment() {
  const { ticket } = useTicket();
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {ticket? <PaymentArea /> : <TicketArea />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
