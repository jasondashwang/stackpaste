import axios from 'axios';
import { EMAIL_REGEX } from './constants';

export const validateEmail = (email) => {
  const pattern = EMAIL_REGEX;
  return pattern.test(email);
};

export const submitMessage = (name, email, body) => {
  return axios.post('/api/contact', {name, email, body})
  .then(res => {
    return 'Message was successfully sent!';
  })
  .catch(err => {
    console.error(err);
    return 'Server Error: Try again later';
  });
};
