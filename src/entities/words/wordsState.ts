import create from 'zustand';
import { basePath } from 'common/config/env.config';
import { IWord } from 'common/interfaces/interfaces';

interface IWordsState {
  words: IWord[];
  loading: boolean;
  getWords: ({ group, page }: IWordsParams) => void;
}

interface IWordsParams {
  group: number;
  page: number;
}

export const useWordsState = create<IWordsState>((set) => ({
  words: [],
  loading: true,
  getWords: async ({ group, page }: IWordsParams) => {
    try {
      set({ loading: true });
      const response = await fetch(`${basePath}/words?group=${group}&page=${page}`);
      set({ words: await response.json(), loading: false });
    } catch (error) {
      console.log(error);
    }
  },
}));
