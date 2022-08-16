/* eslint-disable react/jsx-no-useless-fragment */
// lib
import { useRoutes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
// routes
import routes from './routes';
// css
import './App.css';
import { colors } from './utils/Constants';

ConfigProvider.config({
  theme: {
    primaryColor: `${colors.primary[500]}`,
  },
});

function App() {
  const element = useRoutes(routes);
  return <ConfigProvider>{element}</ConfigProvider>;
}

export default App;
