import { Outlet } from 'react-router-dom';
import { HeaderStyled, LayoutSyled, MainStyled } from './styled';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <LayoutSyled>
      <HeaderStyled>
        <Navbar />
      </HeaderStyled>
      <MainStyled>
        <Outlet />
      </MainStyled>
    </LayoutSyled>
  );
};

export default Layout;
