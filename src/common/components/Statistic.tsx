import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ICanvasStat, ISprintStat, IStateOfPopupData } from 'common/interfaces/interfaces';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const Statistic = () => {
  return (
    <div className="statistic">
      <div className="statistic__inner">
        <div className="statistic__stats">
          <h2 className="statistic__stats__header">Результаты:</h2>
          <div className="statsitc__stats__today">Статистика за сегодня</div>
          <div className="statistic__stats__inner">
            <div className="statistic__stats__correct__words">Правильных слов</div>
            <div className="statistic__stats__correct__percent">Проценты</div>
          </div>
        </div>
        <div className="statistic__result">
          <div className="statistic__result__correct__words"></div>
          <div className="statistic__result__sprint"></div>
          <div className="statistic__result__audio"></div>
          <div className="statistic__result__all__time"></div>
        </div>
      </div>
    </div>
  );
};
