import { useEffect } from 'react';
import APIPosts from '../api/posts.api';
import Alert from '../components/Alert';
import useQuery from '../hooks/useQuery';

const Home = () => {
  const posts = useQuery(() => APIPosts.getPosts());
  const { data, error, isError, isSuccess, isLoading } = posts;

  useEffect(() => {
    if (isError) {
      const { statusText, message } = error;
      Alert.error(statusText, message);
    }
  }, [isError, error]);

  return (
    <>
      <h1>Blog News</h1>
      {isLoading && <p>Loading...</p>}
      {isSuccess ? (
        <div>
          {data.data.map((val) => (
            <div key={val.id}>
              <h3>{val.title}</h3>
              <p>{val.content}</p>
              <p>{Date(val.createdAt)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Home;
