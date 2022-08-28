import { useEffect, useState } from 'react';

const useQuery = (fn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isIdle, setIsIdle] = useState(true);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    setIsIdle(true);
    if (!isFetched) {
      if (fn) {
        setIsLoading(true);
        fn()
          .then((res) => {
            setData(res);
            setIsSuccess(true);
          })
          .catch((err) => {
            setIsError(true);
            setError(err);
          });
        setIsIdle(false);
        setIsLoading(false);
        setIsFetched(true);
      }
    }
  }, [fn, isFetched]);

  return { isIdle, isLoading, isError, isSuccess, error, data };
};

export default useQuery;
