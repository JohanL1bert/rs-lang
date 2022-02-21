import create from 'zustand';
import { basePath } from 'common/config/env.config';
import { INewUser, IStateAuth } from 'entities/auth/stateAuthTypes';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const useStateAuth = create<IStateAuth>((set) => ({
  user: null,
  token: '',
  isAuth: false,
  error: false,
  isRegistered: false,
  signin: async (email: string, password: string) => {
    try {
      const response = await fetch(`${basePath}/signin`, {
        method: 'POST',
        headers: {
          ...headers,
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('userId', data.userId);
      set({ isAuth: true, error: false });
    } catch (error) {
      set({ error: true });
    }
  },
  signout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    set({ isAuth: false });
  },
  auth: async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token) {
      const response = await fetch(`${basePath}/users/${userId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ user: await response.json(), token, isAuth: true });
    }
  },
  register: async (param: INewUser) => {
    try {
      const response = await fetch(`${basePath}/users`, {
        method: 'POST',
        headers: {
          ...headers,
        },
        body: JSON.stringify(param),
      });
      set({ user: await response.json(), isRegistered: true, error: false });
    } catch (error) {
      set({ error: true });
    }
  },
}));
