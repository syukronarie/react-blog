import Cookies from 'js-cookie';

const Auth = {
  isAuthorization() {
    if (Cookies.get('token') || Cookies.get('rt')) return true;
    return null;
  },
  getAccessToken() {
    return Cookies.get('token');
  },
  getRefreshToken() {
    return Cookies.get('rt');
  },
  getUserId() {
    return Cookies.get('sub');
  },
  signOut(navigate) {
    Cookies.remove('token');
    Cookies.remove('rt');
    navigate('/signin');
  },
};

export default Auth;
