import { createContext, useState } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('userData', {});
  const [ confirmedPayment, setConfirmedPayment ] = useState(false);
  const [ haveTicket, setHaveTicket ] = useState(false);
  
  return (
    <UserContext.Provider value={{ 
      userData, 
      setUserData, 
      confirmedPayment, 
      setConfirmedPayment,
      haveTicket,
      setHaveTicket }}>
      {children}
    </UserContext.Provider>
  );
}
