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
  transcription: string;
  wordTranslate: string;
  isCorrectChoice: boolean;
}

interface ICanvasDataSet {
  data: Array<number>;
  backgroundColor: Array<string>;
  borderColor: Array<string>;
  borderWidth: number;
}

export interface ICanvasStat {
  labels: Array<string>;
  datasets: Array<ICanvasDataSet>;
}

export interface ISprintStat {
  dataOfStats: Array<IStateOfPopupData>;
}

export interface ICardResult {
  audio: string;
  isWordReal: string;
  transcription: string;
  truthy: number;
  word: string;
  wordTranslate: string;
}

export interface ISprintCard {
  audioV: boolean;
  funData: () => void;
  setStateOfPopup: React.Dispatch<React.SetStateAction<IStateOfPopupData[]>>;
  wordObj: ICardResult;
}

export interface ISprintPopup {
  data: Array<IStateOfPopupData>;
}
