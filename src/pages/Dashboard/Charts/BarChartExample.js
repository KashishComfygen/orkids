import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartExample = ({ graphData }) => {
  let { data } = graphData && graphData ? graphData : {}
  let { finalResult } = data && data ? data : {}

  let graphdatatoShow = finalResult ? finalResult.slice(0, 8) : []

  return (
    <div style={{ position: 'relative' }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={graphdatatoShow}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
      <div className='absolute whitespace-nowrap top-0 text-gray-500' style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg) translate(-50%, -50%)' }}>
        No. of Students
      </div>
      <div className=' absolute bottom-3 left-16 text-gray-500' >
        Weeks
      </div>

    </div>

  );
};

export default BarChartExample;
