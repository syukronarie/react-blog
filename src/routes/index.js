import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import Layout from '../components/Layout';
import NoMatch from '../components/NoMatch';
import SignIn from '../views/SignIn';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <PrivateRoute />, children: [{ index: true, element: <Home /> }] },
      {
        path: '/signin',
        element: <ProtectedRoute />,
        children: [{ index: true, element: <SignIn /> }],
      },
      // {
      //   path: '/signup',
      //   element: <ProtectedRoute />,
      //   children: [
      // { index: true, element: <SignUp /> },
      //   ],
      // },
      { path: '*', element: <NoMatch /> },
    ],
  },
];

export default routes;
