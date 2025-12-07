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
          <CartesianGrid stroke="" />
          <XAxis type="number" stroke='#ff0000'/>
          <YAxis dataKey="name" type="category" scale="band" stroke='black'/>
          <Tooltip />
          <Bar dataKey="count" barSize={20} fill="#FF8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    );
};

export default BarChart1;