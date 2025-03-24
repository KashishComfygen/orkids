import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from "../../components/Loader/Loader";
import DonutChart from './Charts/DonutChart';
import BarChartExample from './Charts/BarChartExample';

const Dashboard = () => {
  // Replace the selector with static data
  const dashboardData = {
    data: {
      allUserCount: 1200,
      allStudentCount: 800,
      screeningCount: 500,
      allLanguageCount: 5,
      // static data for graph
      graphData: {
        data: {
          finalResult: [
            { value: 100, name: 'English' },
            { value: 200, name: 'Spanish' },
            { value: 150, name: 'French' },
            { value: 50, name: 'German' },
            { value: 250, name: 'Mandarin' },
          ],
        },
      },
    },
  };

  let { data } = dashboardData;
  let { graphData } = data;

  let sum = 0;
  if (graphData && graphData.data && graphData.data.finalResult) {
    sum = graphData.data.finalResult.reduce((acc, curr) => acc + curr.value, 0);
  }

  return (
    <div className='my-3 mx-5 h-[90vh] overflow-y-scroll'>
      {/* <Testing/> */}

      <Loading loading={false} /> {/* If you want to disable Loading for the static data */}
      <div className='flex flex-col gap-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
          <div className='bg-[#EB5757] rounded-[10px] space-x-1 p-5'>
            <h1 className='text-white font-[900] text-[64px]'>
              {dashboardData?.data?.allUserCount || '--'}
            </h1>
            <p className='text-white font-[500] text-[20px]'>User</p>
          </div>
          <div className='bg-[#2D9CDB] rounded-[10px] space-x-1 p-5'>
            <div className='text-white font-[900] text-[64px]'>
              {dashboardData?.data?.allStudentCount || '--'}
            </div>
            <div className='text-white font-[500] text-[20px]'>Children</div>
          </div>
          <div className='bg-[#EAAB00] rounded-[10px] space-x-1 p-5'>
            <div className='text-white font-[900] text-[64px]'>
              {dashboardData?.data?.screeningCount || '--'}
            </div>
            <div className='text-white font-[500] text-[20px]'>Screening Done</div>
          </div>
          <div className='bg-[#4CD964] rounded-[10px] space-x-1 p-5'>
            <div className='text-white font-[900] text-[64px]'>
              {dashboardData?.data?.allLanguageCount || '--'}
            </div>
            <div className='text-white font-[500] text-[20px]'>Language</div>
          </div>
        </div>
        {/* Second Line */}
        <div className='border-t-2 border-b-2 p-5'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className=' flex-1 border-r-2 flex flex-col justify-between pr-2 '>
              <div>
                <div className=''>Student Added For Screening weekly</div>
                <div className='text-gray-900 font-bold'>{sum ? sum : '--'}</div>
              </div>
              <div>
                <BarChartExample graphData={graphData} />
              </div>
            </div>
            <div className='flex-1'>
              <div>
                <div className=''>Top 5 Language wise Screening</div>
                <div className='text-gray-400'>Lifetime</div>
              </div>
              <div>
                <DonutChart graphData={graphData} /> {/* Passing the graphData */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
