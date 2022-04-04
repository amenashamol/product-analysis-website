import React  from 'react';
import { LineChart,Line,XAxis,YAxis,Tooltip, PieChart, Pie } from 'recharts';
import './MyLinechart.css'

const MyLineChart = () => {
    const data = [
        {
          name: 'supplier A',
          price: 4000,
          pv: 2400,
          sales: 2400,
        },
        {
          name: 'supplier B',
          price: 3000,
          pv: 1398,
          sales: 2210,
        },
        {
          name: 'supplier C',
          price: 2000,
          pv: 9800,
          sales: 2290,
        },
        {
          name: 'supplier D',
          price: 2780,
          pv: 3908,
          sales: 2000,
        },
        {
          name: 'supplier E',
          price: 1890,
          pv: 4800,
          sales: 2181,
        },
        {
          name: 'supplier F',
          price: 2390,
          pv: 3800,
          sales: 2500,
        },
        {
          name: 'supplier G',
          price: 3490,
          pv: 4300,
          sales: 2100,
        },
      ];
    
    return (
       <div className='chart'>
          <div className='line'>
            <h2>LineChart</h2>
          <LineChart width={400} height={300} data={data}>
          <Line dataKey={'price'}> </Line>
          <Line dataKey={'sales'}> </Line>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
            </LineChart>  
          </div>

          <div className='pie'>
          <h2>PieChart</h2>
            <PieChart width={400} height={300}>
              <Pie data={data} dataKey="sales" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"></Pie>
              <Pie data={data} dataKey="sales" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
              <Tooltip />
            </PieChart>
          </div>
       </div>

       
    );
};

export default MyLineChart;

