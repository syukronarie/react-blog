import { message } from 'antd';

const signInSuccess = (navigate) => {
  message
    .loading(`One second...`, 1)
    .then(() => message.info('Here we go...', 1))
    .then(() => message.success('You are successfully signed in', 2))
    .then(() => message.info('Redirecting to dashboard', 1))
    .then(() => navigate('/'));
};

const signUpSuccess = (navigate) => {
  message
    .loading(`One second...`, 1)
    .then(() => message.info('Here we go...', 1))
    .then(() => message.success('You are successfully signed up', 2))
    .then(() => message.info('Redirecting to sign in', 1))
    .then(() => navigate('/signin'));
};

const createPostSuccess = (navigate) => {
  message
    .loading(`One second...`, 1)
    .then(() => message.info('Here we go...', 1))
    .then(() => message.success('created post successfully', 2))
    .then(() => navigate('/'));
};

const createCategorySuccess = (navigate) => {
  message
    .loading(`One second...`, 1)
    .then(() => message.info('Here we go...', 1))
    .then(() => message.success('created category successfully', 2))
    .then(() => navigate('/'));
};

const error = (statusText, textMessage) => {
  message
    .loading(`One second...`, 1)
    .then(() => message.info('Here we go...', 1))
    .then(() => message.error('Hmmm', 1))
    .then(() => message.error(`${statusText}: ${textMessage}`, 2.5));
};

const Alert = { signInSuccess, signUpSuccess, createPostSuccess, createCategorySuccess, error };

export default Alert;
