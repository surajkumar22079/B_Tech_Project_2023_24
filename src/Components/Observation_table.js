import React from 'react';
import './observation_table.css'; // CSS file for styling

const XYDataTable = ({ data }) => {
  return (
    <div>
        <h2>Observation Table</h2>
    <table className="xy-table">
      <thead>
        <tr>
          <th>X</th>
          <th>Y</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.x.toFixed(2)}</td>
            <td>{item.y.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default XYDataTable;
