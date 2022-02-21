import { IWord } from 'common/interfaces/interfaces';

export interface IParam {
  difficulty: string;
  optional: {
    isDeleted: boolean;
  };
}

export interface IWordsRequestParams {
  group: number;
  page: number;
}

export interface IStateWords {
  words: IWord[];
  loading: boolean;
  totalCount: number | null;
  getWords: ({ group, page }: IWordsRequestParams) => void;
  addToDifficulty: (id: string, wordId: string, params: IParam, token: string) => void;
  addToRemote: (id: string, wordId: string, token: string, params: IParam) => void;
  getAggregatedWords: (id: string, token: string, group: number, page: number, filter: string) => void;
  deleteWord: (id: string, wordId: string, token: string) => void;
}
