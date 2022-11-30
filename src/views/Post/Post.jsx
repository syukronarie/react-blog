import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import PostItem from './PostItem';
import APIVotes from '../../apis/vote.api';
import useMutation from '../../hooks/useMutation';
import Auth from '../../utils/Auth';

const Post = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const createVote = useMutation((postId) => APIVotes.createVote(postId));
  const updateVote = useMutation((postId) => APIVotes.updateVote(postId));
  const { isError: isErrorCV } = createVote;
  const [modal, contextHolder] = Modal.useModal();

  useEffect(() => {
    const config = {
      title: 'Please sign in first...',
      content: <p>You need to sign in to vote this post.</p>,
      okText: 'Sign In',
      onOk: () => {
        Auth.signOut(navigate);
      },
    };
    if (isErrorCV) {
      modal.error(config);
    }
  }, [isErrorCV, modal, navigate]);

  return (
    <div className="posts">
      {contextHolder}
      {data.map((item) => (
        <PostItem key={item.id} item={item} handleCreateVote={createVote.mutate} handleUpdateVote={updateVote.mutate} />
      ))}
    </div>
  );
};

export default Post;
