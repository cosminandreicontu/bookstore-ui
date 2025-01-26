import { createContext, useContext } from 'react';
import { UserContextValue } from 'types';

export const UserContext = createContext<UserContextValue | undefined>(
  undefined,
);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
