import create from 'zustand';
import { basePath } from 'common/config/env.config';
import { IParam, IStateWords, IWordsRequestParams } from 'entities/words/stateWordsTypes';

const headersOptions = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const useStateWords = create<IStateWords>((set) => ({
  words: [],
  loading: false,
  totalCount: null,
  getWords: async ({ group, page }: IWordsRequestParams) => {
    try {
      set({ loading: true });
      const response = await fetch(`${basePath}/words?group=${group}&page=${page}`);
      set({ words: await response.json(), loading: false });
    } catch (error) {
      console.log(error);
    }
  },
  addToDifficulty: async (id: string, wordId: string, params: IParam, token: string) => {
    try {
      await fetch(`${basePath}/users/${id}/words/${wordId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          ...headersOptions,
        },
        body: JSON.stringify(params),
      });
    } catch (error) {
      console.log(error);
    }
  },
  addToRemote: async (id: string, wordId: string, token: string, params: IParam) => {
    try {
      await fetch(`${basePath}/users/${id}/words/${wordId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          ...headersOptions,
        },
        body: JSON.stringify(params),
      });
      set((state) => ({ words: state.words.filter((word) => word.id !== wordId) }));
    } catch (error) {
      console.log(error);
    }
  },
  getAggregatedWords: async (id: string, token: string, group: number, page: number, filter: string) => {
    try {
      set({ loading: true });
      const response = await fetch(
        `${basePath}/users/${id}/aggregatedWords?group=${group}&page=${page}&filter=${filter}&wordsPerPage=20`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      set({ words: data[0].paginatedResults, totalCount: data[0].totalCount[0]?.count, loading: false });
    } catch (error) {
      console.log(error);
    }
  },
  deleteWord: (id: string, wordId: string, token: string) => {
    fetch(`${basePath}/users/${id}/words/${wordId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
}));
