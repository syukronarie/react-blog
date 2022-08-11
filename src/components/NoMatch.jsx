/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

function NoMatch() {
  console.log('hello');
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/signin">Go to the home page</Link>
      </p>
    </div>
  );
}

export default NoMatch;
