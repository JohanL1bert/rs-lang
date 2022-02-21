import run from 'app/assets/images/run.png';
import audio from 'app/assets/images/audio.png';
import statisitc from 'app/assets/images/statistic.png';

export const InfoGames = [
  {
    id: 1,
    title: 'Словарь',
    description:
      'Создай свой собственный словарь для изучения слов - добавляй слова, которым хочешь уделить больше внимания и удаляй, если слово тебе уже хорошо известно',
    img: statisitc,
  },
  {
    id: 2,
    title: 'Аудио',
    description: 'Попробуй понять, какое слово было произнесено',
    img: audio,
  },
  {
    id: 3,
    title: 'Спринт',
    description: 'Как можно быстрее определи, верный перевод слова или нет',
    img: run,
  },
];
