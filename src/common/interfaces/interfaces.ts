export interface IDevelopInfo {
  id: number;
  name: string;
  imgPath: string;
  role: string;
  description: string;
  link: string;
}

export interface IInfoGames {
  id: number;
  title: string;
  description: string;
  img: string;
}

export interface IWord {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  id: string;
  image: string;
  page: number;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
}

export interface IVisiblePopup {
  changeVisibilityPopup: (data: boolean) => void;
}

export interface ISetAudio {
  audioV: boolean;
  setAudioV: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IStateOfPopupData {
  audio: string;
  word: string;
  wordTranslate: string;
  isCorrectChoid: boolean;
}
