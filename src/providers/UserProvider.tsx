import { useState } from 'react';
import { UserProfile } from 'types';
import { UserContext } from './UserContext';

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
  });

  const updateUser = (user: UserProfile) => setUser(user);

  const value = {
    user,
    updateUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
