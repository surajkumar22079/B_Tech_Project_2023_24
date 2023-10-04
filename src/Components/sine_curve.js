import React from 'react';
import { Line } from 'react-chartjs-2';
import "./LVDT.css"

const SinGraph = ({ x, y }) => {
  const data = {
    labels: [],
    datasets: [
      {
        label: `sin(x)`,
        borderColor: 'red',
        backgroundColor: 'red',
        data: [],
        fill: false,
      },
      {
        label: `sin(y)`,
        borderColor: 'blue',
        backgroundColor: 'blue',
        data: [],
        fill: false,
      },
    ],
  };

  for (let i = -2 * Math.PI; i <= 2 * Math.PI; i += 0.1) {
    data.labels.push(i.toFixed(2));
    data.datasets[0].data.push(x*Math.sin(i  ));
    data.datasets[1].data.push(y*Math.sin(i ));
  }

  

  return <Line data={data}  className="sineCurve"/>;
};

export default SinGraph;