import Cookies from 'js-cookie';

const Auth = {
  isAuthorization() {
    return Cookies.get('token');
  },
  signOut(navigate) {
    Cookies.remove('token');
    navigate('/signin');
  },
};

export default Auth;
