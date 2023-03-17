import React, { useRef, useEffect }from 'react';
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
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
          },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'HVAC',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1200 })),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Cabina',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1200 })),
      backgroundColor: 'rgb(59, 131, 189)',
    },
 
  ],
};


export function Grafica3() {
    const chartRef = useRef<ChartJS>(null);
  
    useEffect(() => {
      const chart = chartRef.current;
  
    }, []);
  
    return <Bar options={options} data={data} />;
}