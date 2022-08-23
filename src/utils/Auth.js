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
  storeUserInfoToCookie(data) {
    if (!data.access || !data.refresh) return null;
    const { access, refresh, sub } = data;
    const accessExpires = new Date(access.expires);
    const refreshExpires = new Date(refresh.expires);
    Cookies.set('token', access.token, { expires: accessExpires });
    Cookies.set('rt', refresh.token, { expires: refreshExpires });
    Cookies.set('sub', sub, { expires: accessExpires });
    return data;
  },
};

export default Auth;
