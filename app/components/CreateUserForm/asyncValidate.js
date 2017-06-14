/* eslint-disable */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncValidate = (values) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      const data = values.toJS();
      if (['john', 'paul', 'george', 'ringo'].includes(data.username)) {
        console.log('error');
        throw { username: 'That username is taken' };
      }
    });
};

export default asyncValidate;
