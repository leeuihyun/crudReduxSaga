import client from './client';

//login
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

//register
export const register = ({ username, password, passwordConfirm }) =>
  client.post('/api/auth/register', { username, password, passwordConfirm });

export const check = () => client.get('/api/auth/check');
