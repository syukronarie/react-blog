import { useEffect, useState } from 'react';

const useMutation = (fn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isIdle, setIsIdle] = useState(true);
  const [error, setError] = useState(null);
  const [payload, mutate] = useState(null);

  useEffect(() => {
    setIsIdle(true);

    if (payload) {
      setIsLoading(true);
      fn(payload)
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
      mutate(null);
    }
  }, [fn, payload]);

  // useEffect(() => {
  //   if (data)
  //     setTimeout(() => {
  //       setData(null);
  //       setIsIdle(false);
  //       setIsSuccess(false);
  //       setIsError(false);
  //       setError(null);
  //     });
  // }, [data]);

  return { mutate, isIdle, isLoading, isError, isSuccess, error, data };
};

export default useMutation;
