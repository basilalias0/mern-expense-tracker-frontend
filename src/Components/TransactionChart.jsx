import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function TransactionChart({ totals }) {

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    maintainAspectRatio: false,
    aspectRatio: 10,
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

  const labels = [''];
  const data = {
    labels,
    datasets: [
      {
        label: ['Income'],
        data: [ totals?.income || 0],
        borderColor: [ '#78BF60',],
        backgroundColor: ['#98FB98'],
      },
      {
        label: ['Balance'],
        data: [totals?.balance || 0],
        borderColor:['rgb(53, 162, 235)'],
        backgroundColor: ['rgba(53, 162, 235, 0.5)'],
      },
      {
        label: ['Expense'],
        data: [ totals?.expense || 0],
        borderColor: ['rgb(255, 99, 132)'],
        backgroundColor: ['rgba(255, 99, 132, 0.5)'],
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "13.5rem" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
