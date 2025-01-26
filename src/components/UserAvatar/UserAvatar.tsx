import { Avatar } from '@mui/material';
import { useUser } from 'providers';

export const UserAvatar: React.FC = () => {
  const { user } = useUser();
  const initials =
    `${user.firstName.charAt(0) || ''}${user.lastName.charAt(0) || ''}`.toUpperCase();

  return (
    <Avatar sx={{ bgcolor: 'secondary.main', marginLeft: 2 }}>
      {initials || 'U'}
    </Avatar>
  );
};
