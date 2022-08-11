import { Outlet } from 'react-router-dom';
import { HeaderStyled, LayoutSyled, MainStyled, NavbarStyled } from './styled';

const Layout = () => {
  return (
    <LayoutSyled>
      <HeaderStyled>
        <NavbarStyled>
          <h3>Blog App</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Category</a>
            </li>
            <li>
              <a href="/">Tag</a>
            </li>
          </ul>
        </NavbarStyled>
      </HeaderStyled>
      <MainStyled>
        <Outlet />
      </MainStyled>
    </LayoutSyled>
  );
};

export default Layout;
