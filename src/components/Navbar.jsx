import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../utils/Auth';
import { NavbarStyled } from './styled';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarStyled>
      <h3>Blog App</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-post">Create Post</Link>
        </li>
        <li>
          <Link to="/create-category">Create Category</Link>
        </li>
      </ul>
      {Auth.isAuthorization() && (
        <Button type="text" onClick={() => Auth.signOut(navigate)}>
          Log out
        </Button>
      )}
    </NavbarStyled>
  );
};

export default Navbar;
