import React from 'react';
import { Bar, BarChart, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const BarChart1 = ({ desiredApp }) => {
  if (!desiredApp) return null;
  const { ratings } = desiredApp;
  return (
    <div style={{ width: "100%", height: "400px" }}>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={ratings}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <defs>
            <linearGradient id="customGradient" x1="0" y1="0" x2="0" y2="1">
              {/* Start color */}
              <stop offset="0%" stopColor="rgba(99, 46, 227, 1)" stopOpacity={1} />
              {/* End color */}
              <stop offset="100%" stopColor="rgba(159, 98, 242, 1)" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="" />
          <XAxis type="number" stroke='black' />
          <YAxis dataKey="name" type="category" scale="band" stroke='black' />
          <Tooltip />
          <Bar dataKey="count" barSize={20} fill="url(#customGradient)" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart1;