import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/authSlice';
import { Container } from './AppBar.styled';

export default function Appbar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
}
