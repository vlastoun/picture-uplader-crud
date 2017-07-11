import axios from 'axios';
import { HOST } from 'constants/host';
const TOKEN = localStorage.getItem('token');

const getEmailAndUsername = (data) => new Promise((resolve) => {
  const usernameURL = `${HOST}api/categories/count?where=%7B%22name%22%3A%22${data.name}%22%7D&access_token=${TOKEN}`;
  Promise.all([
    axios.get(usernameURL),
  ]).then((response) => {
    const result = { name: 0 };
    result.name = response[0].data.count;
    resolve(result);
  });
});

const asyncValidate = (values) => {
  const data = values.toJS();
  return getEmailAndUsername(data).then((result) => {
    if (result.name > 0) {
      throw { name: 'Category already exists' }; // eslint-disable-line no-throw-literal
    }
  });
};

export default asyncValidate;
