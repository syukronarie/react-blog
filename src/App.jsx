/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
// lib
import { ConfigProvider } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';
import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';

// routes
import routes from './routes';
// css
import './App.css';
import { colors } from './utils/Constants';
import Alert from './components/Alert';

ConfigProvider.config({
  theme: {
    primaryColor: `${colors.primary[500]}`,
  },
});

const ErrorFallback = ({ resetErrorBoundary }) => {
  useEffect(() => {
    resetErrorBoundary();
  }, [resetErrorBoundary]);

  return null;
};

const myErrorHandler = (error) => {
  if (error.name.includes('API Error')) {
    const { statusText, message } = error;
    Alert.error(statusText, message);
  }
};

function App() {
  const element = useRoutes(routes);
  return (
    <ConfigProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        {element}
      </ErrorBoundary>
    </ConfigProvider>
  );
}

export default App;
