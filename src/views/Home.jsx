import { useEffect } from 'react';
import APIPosts from '../api/post.api';
import Alert from '../components/Alert';
import useQuery from '../hooks/useQuery';
import Post from './Post/Post';

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
      {isSuccess ? <Post data={data.data || []} /> : <p>Loading</p>}
    </>
  );
};

export default Home;
