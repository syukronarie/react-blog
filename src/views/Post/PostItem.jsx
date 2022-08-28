/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import heartSolidIcon from '../../assets/svg/heart-solid-icon.svg';
import heartRegularIcon from '../../assets/svg/heart-regular-icon.svg';

const convertUTCtoID = (utc) => {
  const date = new Date(utc);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return date.toLocaleTimeString('en-id', options);
};

const PostItem = (props) => {
  const { item, handleCreateVote, handleUpdateVote } = props;
  const [hasVoted, setHasVoted] = useState(item.hasVoted);
  return (
    <div className="post">
      <div className="post__meta">
        <span className="post__meta-name">{item.authorDetails.userName}</span>
        <span className="post__meta-divider">―</span>
        <time className="post__meta-time">{convertUTCtoID(item.createdAt)}</time>
        <span className="post__meta-divider" />
        <span className="post__meta-category">
          <Link className="post__meta-category-link" to={`/category/${item.categories}`}>
            {item.categories}
          </Link>
        </span>
      </div>
      <h2 className="post__title">
        <Link to={`/posts/${item.id}`} className="post__title-link">
          {item.title}
        </Link>
      </h2>
      <p className="post__description">{item.content.substring(0, 250).concat('...')}</p>
      <div className="post__vote">
        {hasVoted ? (
          <img
            src={heartSolidIcon}
            alt="heart-solid-icon"
            className="post__vote-icon"
            onClick={() => {
              handleUpdateVote(item.id);
              setHasVoted(false);
            }}
          />
        ) : (
          <img
            src={heartRegularIcon}
            alt="heart-regular-icon"
            className="post__vote-icon"
            onClick={() => {
              handleCreateVote(item.id);
              setHasVoted(true);
            }}
          />
        )}
        <span className="post__vote-divider" />
      </div>
    </div>
  );
};

export default PostItem;
