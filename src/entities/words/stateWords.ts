import create from 'zustand';
import { basePath } from 'common/config/env.config';
import { IWord } from 'common/interfaces/interfaces';

interface IStateWords {
  words: IWord[];
  loading: boolean;
  getWords: ({ group, page }: IWordsRequestParams) => void;
}

interface IWordsRequestParams {
  group: number;
  page: number;
}

export const useStateWords = create<IStateWords>((set) => ({
  words: [],
  loading: true,
  getWords: async ({ group, page }: IWordsRequestParams) => {
    try {
      set({ loading: true });
      const response = await fetch(`${basePath}/words?group=${group}&page=${page}`);
      set({ words: await response.json(), loading: false });
    } catch (error) {
      console.log(error);
    }
  },
}));
