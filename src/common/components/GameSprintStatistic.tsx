import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ICanvasStat, ISprintStat, IStateOfPopupData } from 'common/interfaces/interfaces';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const GameSprintStatistic = (props: ISprintStat) => {
  console.log(props);
  const { dataOfStats } = props;

  const filterProps = () => {
    const fail = dataOfStats.filter((item: IStateOfPopupData) => item.isCorrectChoice);
    const corr = dataOfStats.filter((item: IStateOfPopupData) => item.isCorrectChoice === false);

    return [fail, corr];
  };

  const [inCorrect, correct] = filterProps();

  const data: ICanvasStat = {
    labels: ['Не правильно', 'Правильно'],
    datasets: [
      {
        data: [inCorrect.length, correct.length],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="sprint__statisitc">
      <div className="sprint__statistic__inner">
        <Pie data={data} />
      </div>
    </div>
  );
};
