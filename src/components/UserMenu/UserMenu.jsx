import { useSelector } from 'react-redux';
import { getUsername } from 'redux/authSlice';
import { useLogoutMutation } from 'redux/authAPI';
import { Container, UserName } from './UserMenu.styled';
import Avatar, { genConfig } from 'react-nice-avatar';

export default function UserMenu() {
  const name = useSelector(getUsername);
  const [logOut] = useLogoutMutation();
  const AvatarConfig = {};
  const config = genConfig(AvatarConfig);

  return (
    <Container>
      <Avatar style={{ width: '2rem', height: '2rem' }} {...config} />
      <UserName>Welcome, {name}</UserName>
      <button type="button" onClick={() => logOut()}>
        Log Out
      </button>
    </Container>
  );
}
