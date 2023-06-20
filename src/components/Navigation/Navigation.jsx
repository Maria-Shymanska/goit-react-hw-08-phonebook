import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &.active {
    color: #2196f3;
  }
`;

export default function Navigation() {
  return (
    <nav>
      <StyledLink to="/contacts"> Contacts</StyledLink>
    </nav>
  );
}
