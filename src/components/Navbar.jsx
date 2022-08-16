import { NavbarStyled } from './styled';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
