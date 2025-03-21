import React from 'react'

function Dashboard() {
  return (
    <div className='my-3 mx-5 h-[90vh] overflow-y-scroll'>

    {/* <Testing/> */}
          
        
          <div className='flex flex-col gap-12'>
    
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
              <div className='bg-[#EB5757] rounded-[10px]  space-x-1  p-5'>
                <h1 className='text-white font-[900] text-[64px]'>{"--"}</h1>
                <p className='text-white font-[500] text-[20px] '>User</p>
              </div>
              <div className='bg-[#2D9CDB] rounded-[10px]  space-x-1  p-5'>
                <div className='text-white font-[900] text-[64px]'>{"--"}</div>
                <div className='text-white font-[500] text-[20px] '>Children</div>
              </div>
              <div className='bg-[#EAAB00] rounded-[10px]  space-x-1  p-5'>
                <div className='text-white font-[900] text-[64px]'>{"--"}</div>
                <div className='text-white font-[500] text-[20px] '>Screening Done</div>
              </div>
              <div className='bg-[#4CD964] rounded-[10px]  space-x-1  p-5'>
                <div className='text-white font-[900] text-[64px]'>{ "--"}</div>
                <div className='text-white font-[500] text-[20px] '>Language</div>
              </div>
            </div>
            {/* Second Line */}
            <div className=' border-t-2 border-b-2 p-5'>
              <div className='flex flex-col md:flex-row  gap-4'>
                <div className=' flex-1 border-r-2 flex flex-col justify-between pr-2 '>
                  <div>
                    <div className=''>Student Added For Screening weekly</div>
                    <div className=' text-gray-900 font-bold'>{ "--"}</div>
                  </div>
                  {/* <div>
                    <BarChartExample  />
                  </div> */}
    
                </div>
                <div className=' flex-1 '>
                  <div>
                    <div className=''>Top 5 Language wise Screening</div>
                    <div className=' text-gray-400'>Lifetime</div>
                  </div>
                  {/* <div>
    
                    <DonutChart />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Dashboard