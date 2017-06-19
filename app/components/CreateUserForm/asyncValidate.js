import axios from 'axios';
import { HOST } from 'constants/host';

const getEmailAndUsername = (userdata) => new Promise((resolve) => {
  const usernameURL = `${HOST}api/users/count?where={%22username%22:%22${userdata.username}%22}`;
  const emailURL = `${HOST}api/users/count?where={%22email%22:%22${userdata.email}%22}`;
  Promise.all([
    axios.get(usernameURL),
    axios.get(emailURL),
  ]).then((response) => {
    const result = { username: 0, email: 0 };
    result.username = response[0].data.count;
    result.email = response[1].data.count;
    resolve(result);
  });
});

const asyncValidate = (values) => {
  const data = values.toJS();
  return getEmailAndUsername(data).then((result) => {
    if (result.email > 0 && result.username > 0) {
      throw { email: 'That email is taken', username: 'That username is taken' }; // eslint-disable-line no-throw-literal
    }
    if (result.username > 0) {
      throw { username: 'That username is taken' }; // eslint-disable-line no-throw-literal
    }
    if (result.email > 0) {
      throw { email: 'That email is taken' }; // eslint-disable-line no-throw-literal
    }
  });
};

export default asyncValidate;
