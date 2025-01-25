import React from 'react';
import { Line } from 'react-chartjs-2';
import "./LVDT.css"

const SinGraph = ({ x, y }) => {
  const data = {
    labels: [],
    datasets: [
      {
        label: `Vin`,
        borderColor: 'red',
        backgroundColor: 'red',
        data: [],
        fill: false,
      },
      {
        label: `Vout`,
        borderColor: 'blue',
        backgroundColor: 'blue',
        data: [],
        fill: false,
      },
    ],
  };

  for (let i =0; i <= 2 * Math.PI+1; i += 0.3) {
    data.labels.push(i.toFixed(2));
    data.datasets[0].data.push(x * Math.sin(i));
    data.datasets[1].data.push(y * Math.sin(i));
  }

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
          font: {
            size: 30  // Adjust the font size for x-axis label
          }
        },
        ticks: {
          font: {
            size: 26  // Adjust the font size for x-axis ticks
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Vin, Vout',
          font: {
            size: 30  // Adjust the font size for y-axis label
          }
        },
        ticks: {
          font: {
            size: 26  // Adjust the font size for y-axis ticks
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 29 // Adjust the font size for legend labels
          }
        }
      }
    }
  };

  return <Line data={data} options={options} className="sineCurve" />;
};

export default SinGraph;
