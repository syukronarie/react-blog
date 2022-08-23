import { Outlet } from 'react-router-dom';
import { ContainerSyled, HeaderStyled, LayoutSyled, MainStyled } from './styled';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <LayoutSyled>
      <HeaderStyled>
        <Navbar />
      </HeaderStyled>
      <MainStyled>
        <ContainerSyled>
          <Outlet />
        </ContainerSyled>
      </MainStyled>
    </LayoutSyled>
  );
};

export default Layout;
