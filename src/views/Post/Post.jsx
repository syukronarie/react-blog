import PostItem from './PostItem';
import APIVotes from '../../api/vote.api';
import useMutation from '../../hooks/useMutation';
import { ContentInner } from '../../components/styled';

const Post = (props) => {
  const { data } = props;
  const createVote = useMutation((postId) => APIVotes.createVote(postId));
  const updateVote = useMutation((postId) => APIVotes.updateVote(postId));
  return (
    <ContentInner>
      {data.map((item) => (
        <PostItem key={item.id} item={item} handleCreateVote={createVote.mutate} handleUpdateVote={updateVote.mutate} />
      ))}
    </ContentInner>
  );
};

export default Post;
