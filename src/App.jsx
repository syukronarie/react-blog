/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
// lib
import { ConfigProvider } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';
import { useEffect, useState } from 'react';
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

const CountState = ({ state }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      setCount(0);
      console.log('Unmounting');
    };
  }, []);

  useEffect(() => {
    console.log({ count });
    if (state) setCount(state);
  }, [state, count]);

  return <p>{count}</p>;
};

function App() {
  // const element = useRoutes(routes);

  const [state, setState] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    console.log('mounting');
  }, []);

  useEffect(() => {
    console.log('updating');
    console.log({ state });
  }, [state]);

  return (
    <>
      <p>test</p>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => setHide(!hide)}>Hide Result Count</button>
      {!hide && <CountState state={state} />}
    </>
    // <ConfigProvider>
    //   <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    //     {element}
    //   </ErrorBoundary>
    // </ConfigProvider>
  );
}

export default App;
