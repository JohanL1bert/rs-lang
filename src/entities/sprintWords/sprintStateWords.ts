import create from 'zustand';
import { basePath } from 'common/config/env.config';
import { IWord } from 'common/interfaces/interfaces';
import { responseCatch } from 'entities/responseStatus';

interface ISprintWords {
  sprintLoading: boolean;
  sprintWords: IWord[];
  getSprintWords: (group: number, page: number) => void;
  setData: (array: Array<IWord>) => void;
}

export const useSprinStateWords = create<ISprintWords>((set) => ({
  sprintLoading: true,
  sprintWords: [],
  getSprintWords: async (group: number, page: number) => {
    try {
      set({ sprintLoading: true });
      const response = await fetch(`${basePath}/words?group=${group}&page=${page}`, {
        method: 'GET',
        cache: 'no-cache',
      });
      responseCatch(response.status, response.statusText);
      set({ sprintWords: await response.json(), sprintLoading: false });
    } catch (err: unknown) {
      if (err instanceof Error) {
        err.message;
      } else {
        throw new Error('err');
      }
    }
  },
  setData: (array: IWord[]) => set({ sprintWords: array }),
}));
