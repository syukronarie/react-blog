import { useEffect } from 'react';
import APIPosts from '../apis/post.api';
import APIUser from '../apis/user.api';
import Alert from '../components/Alert';
import useMutation from '../hooks/useMutation';
import useQuery from '../hooks/useQuery';
import Auth from '../utils/Auth';
import Post from './Post/Post';
import User from './User/User';

const Home = () => {
  const posts = useQuery(() => APIPosts.getPosts());
  const { data: dataProfile, isLoading: isLoadingProfile, mutate } = useMutation((id) => APIUser.getUserById(id));
  const { data, error, isError, isLoading } = posts;

  const id = Auth.getUserId();
  useEffect(() => {
    if (id) mutate(id);
  }, [id, mutate]);

  useEffect(() => {
    if (isError) {
      const { statusText, message } = error;
      Alert.error(statusText, message);
    }
  }, [isError, error]);

  return (
    <>
      <h1>Blog News</h1>
      <main className="home">
        {isLoadingProfile ? <p>loading...</p> : <User data={dataProfile} loading={isLoading} />}
        {isLoading ? <p>loading...</p> : <Post data={data.data || []} />}
      </main>
    </>
  );
};

export default Home;
