import styled from '@emotion/styled';
import { colors } from '../../utils/Constants';

const LayoutSyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 56px;
`;

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 64px;
  padding: 0 64px;
  background-color: #ffffff;
  top: 0;
  z-index: 2;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 11%);

  h3,
  ul {
    margin: 0;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 200px;
  }

  li {
    text-decoration: none;
    list-style: none;
  }

  h3,
  a {
    color: ${colors.primary[500]};
  }
`;

const MainStyled = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ContainerSyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding: 40px 0;

  h1 {
    margin-bottom: 30px;
  }
`;

const ContentInner = styled.div`
  padding: 1.875rem 1.25rem;
`;

export { LayoutSyled, HeaderStyled, NavbarStyled, MainStyled, ContainerSyled, ContentInner };
