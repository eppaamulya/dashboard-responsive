import React, { useState, useEffect } from 'react';

import AppContext from '../../context/AppContext';
import './index.css'
import { BarChart, LineChart, PieChart, AreaChart, Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Pie } from 'recharts';
import { FaDollarSign } from "react-icons/fa";
import { RiFundsBoxLine } from "react-icons/ri";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";

const Content = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://mocki.io/v1/3a674b02-eb1d-4749-90a1-846650188597')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            {isDarkTheme ? (
              <div className='content-container'>
              <h1 className='top-head'>Overview</h1>
              <div className='top-content-div'>
                <div className='top-overview-content'>
                  <div className='overview-div-1'>
                    <FaDollarSign className='over-icon'/>
                    <div className='overview-div-div'>
                        <p className='over-para'>Total Income</p>
                        <p className='over-para-1'>{data.overview.totalIncome}</p>
                    </div>
                  </div>
                  <div className='overview-div-2'>
                    <FcMoneyTransfer className='over-icon'/>
                    <div className='overview-div-div'>
                        <p className='over-para'>Total Expenses</p>
                        <p className='over-para-1'>{data.overview.totalExpenses}</p>
                    </div>
                  </div>
                  <div className='overview-div-3'>
                    <MdOutlineAccountBalanceWallet className='over-icon'/>
                    <div className='overview-div-div'>
                        <p className='over-para'>Total Savings</p>
                        <p className='over-para-1'>{data.overview.totalSavings}</p>
                    </div>
                  </div>
                  <div className='overview-div-4'>
                    <RiFundsBoxLine className='over-icon'/>
                    <div className='overview-div-div'>
                        <p className='over-para'>Total Investments</p>
                        <p className='over-para-1'>{data.overview.totalInvestments}</p>
                    </div>
                  </div>
                </div>
                <div className='charts-container'>
                  <div className='charts-container-1-dark'>
                    <h2 className='chart-title-dark'>Monthly Expenses Breakdown</h2>
                    <BarChart width={450} height={300} data={data.monthlyExpenses}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Rent" fill="#8884d8" />
                      <Bar dataKey="Groceries" fill="rgb(255, 97, 40)" />
                    </BarChart>
                  </div>
                  <div className='charts-container-1-dark'>
                    <h2 className='chart-title-dark'>Savings Growth</h2>
                    <LineChart width={450} height={300} data={data.savingsGrowth}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="savings" stroke="#8884d8" />
                    </LineChart>
                  </div>
                  <div className='charts-container-1-dark'>
                    <h2 className='chart-title-dark'>Investments Distribution</h2>
                    <PieChart width={450} height={400}>
                      <Pie data={data.investmentsDistribution} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
                      <Tooltip />
                    </PieChart>
                  </div>
                  <div className='charts-container-1-dark'>
                    <h2 className='chart-title-dark'>Expense Trends</h2>
                    <AreaChart width={450} height={300} data={data.expenseTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="Essential" stackId="1" stroke="#8884d8" fill="#8884d8" />
                      <Area type="monotone" dataKey="Non-Essential" stackId="1" stroke="rgb(255, 97, 40)" fill="rgb(255, 97, 40)" />
                    </AreaChart>
                  </div>
                  <div className='charts-container-1-dark'>
                    <h2 className='chart-title-dark'>Budget vs Actual</h2>
                    <BarChart width={450} height={300} data={data.budgetVsActual}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Budget" fill="#8884d8" />
                      <Bar dataKey="Actual" fill="rgb(255, 97, 40)" />
                    </BarChart>
                  </div>
                </div>
              </div>   
              </div>
            ): (
              <div className='content-container'>
                <h1 className='top-head'>Overview</h1>
                <div className='top-content-div'>  
                  <div className='top-overview-content'>
                    <div className='overview-div-1'>
                      <FaDollarSign className='over-icon'/>
                      <div className='overview-div-div'>
                          <p className='over-para'>Total Income</p>
                          <p className='over-para-1'>{data.overview.totalIncome}</p>
                      </div>
                    </div>
                    <div className='overview-div-2'>
                      <FcMoneyTransfer className='over-icon'/>
                      <div className='overview-div-div'>
                          <p className='over-para'>Total Expenses</p>
                          <p className='over-para-1'>{data.overview.totalExpenses}</p>
                      </div>
                    </div>
                    <div className='overview-div-3'>
                      <MdOutlineAccountBalanceWallet className='over-icon'/>
                      <div className='overview-div-div'>
                          <p className='over-para'>Total Savings</p>
                          <p className='over-para-1'>{data.overview.totalSavings}</p>
                      </div>
                    </div>
                    <div className='overview-div-4'>
                      <RiFundsBoxLine className='over-icon'/>
                      <div className='overview-div-div'>
                          <p className='over-para'>Total Investments</p>
                          <p className='over-para-1'>{data.overview.totalInvestments}</p>
                      </div>
                    </div>
                  </div>
                  <div className='charts-container'>
                    <div className='charts-container-1'>
                      <h2 className='chart-title'>Monthly Expenses Breakdown</h2>
                      <BarChart width={450} height={300} data={data.monthlyExpenses}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Rent" fill="#8884d8" />
                        <Bar dataKey="Groceries" fill="rgb(255, 97, 40)" />
                      </BarChart>
                    </div>
                    <div className='charts-container-1'>
                      <h2 className='chart-title'>Savings Growth</h2>
                      <LineChart width={450} height={300} data={data.savingsGrowth}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="savings" stroke="#8884d8" />
                      </LineChart>
                    </div>
                    <div className='charts-container-1'>
                      <h2 className='chart-title'>Investments Distribution</h2>
                      <PieChart width={450} height={400}>
                        <Pie data={data.investmentsDistribution} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
                        <Tooltip />
                      </PieChart>
                    </div>
                    <div className='charts-container-1'>
                      <h2 className='chart-title'>Expense Trends</h2>
                      <AreaChart width={450} height={300} data={data.expenseTrends}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="Essential" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="Non-Essential" stackId="1" stroke="rgb(255, 97, 40)" fill="rgb(255, 97, 40)" />
                      </AreaChart>
                    </div>
                    <div className='charts-container-1'>
                      <h2 className='chart-title'>Budget vs Actual</h2>
                      <BarChart width={450} height={300} data={data.budgetVsActual}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Budget" fill="#8884d8" />
                        <Bar dataKey="Actual" fill="rgb(255, 97, 40)" />
                      </BarChart>
                    </div>
                  </div>
                </div>   
              </div>
            )}
          </>
        )
      }}
    </AppContext.Consumer>  
  );
};

export default Content;
