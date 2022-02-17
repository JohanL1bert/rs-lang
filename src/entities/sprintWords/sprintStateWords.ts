import create from 'zustand';
import { basePath } from 'common/config/env.config';
import { responseCatch } from 'entities/responseStatus';

interface ISprintWords {
  sprintWords: [];
  getSprintWords: (group: number, page: number) => void;
}

// Заглушкаю Нужно как-то переделать
export const useSprinStateWords = create<ISprintWords>((set) => ({
  sprintWords: [],
  getSprintWords: async (group: number, page: number) => {
    try {
      const response = await fetch(`${basePath}/words?group=${group}&page=${page}`, {
        method: 'GET',
        cache: 'no-cache',
      });
      responseCatch(response.status, response.statusText);
      set({ sprintWords: await response.json() });
    } catch (err: unknown) {
      if (err instanceof Error) {
        err.message;
      } else {
        throw new Error('err');
      }
    }
  },
}));
