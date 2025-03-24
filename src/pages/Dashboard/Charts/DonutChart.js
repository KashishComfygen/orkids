import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const colors = [
  '#4CD964', '#EAAB00', '#F4A26C', '#2D9CDB', '#FB5050'
];

const DonutChart = ({ graphData }) => {
 
  const { finalResult } = graphData?.data || {};

 
  const result = finalResult
    ? finalResult
        .sort((a, b) => b.value - a.value)
        .slice(0, 5)
    : [];

 
  const dataWithColor = result.map((item, index) => ({
    ...item,
    color: colors[index] || '#8884d8' // Default fallback color
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart className="flex">
        <Pie
          data={dataWithColor}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
        >
          {dataWithColor.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#37375C',
            border: '1px solid white',
            borderRadius: '0px 30px 30px 30px',
            color: 'white',
          }}
          labelStyle={{ fontWeight: 'bold', color: 'white' }}
          itemStyle={{ color: 'white' }}
        />
        <Legend iconType="circle" iconSize={10} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
