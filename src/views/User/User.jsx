/* eslint-disable react/jsx-no-useless-fragment */
import { Link } from 'react-router-dom';
import { convertUTCtoID } from '../../utils/helpers';
import userIcon from '../../assets/svg/user-solid-icon.svg';

const User = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { data: item, loading } = props.data || {};

  if (!loading)
    return (
      <>
        {item ? (
          <div className="user">
            <img src={userIcon} alt="user-logo" className="user__photo" />
            <h2 className="user__title">@{item.userName}</h2>
            <div className="user__meta">
              <span className="user__meta-name">
                {item.firstName.toUpperCase()} {item.lastName.toUpperCase()}
              </span>
              <div className="user__meta-divider">
                ― <time className="user__meta-time">created at {convertUTCtoID(item.createdAt)}</time>
              </div>

              <p className="user__meta-email">
                ― mail: <a href={`mailto:${item.email}`}>{item.email}</a>
              </p>
            </div>
          </div>
        ) : (
          <p>
            Please <Link to="/signin">sign in</Link>{' '}
          </p>
        )}
      </>
    );

  return null;
};

export default User;
