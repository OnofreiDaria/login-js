import axios from '../plugins/axios';

/**
 * Function login. Make login request to API
 * @param {string} email
 * @param {string} password
 */

export async function getNews(email, password) {
  try {
    const response = await axios.get(`/auth/login`);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
