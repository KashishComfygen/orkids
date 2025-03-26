import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import ServiceJSON from './Service.json'
import Model from './Modle/Model';
import Modelupdate from './Modle/Modelupdate';
import { IoMdSearch } from "react-icons/io";
import ReactPaginate from 'react-paginate';

import { Link } from 'react-router-dom';

import parse from 'html-react-parser';
import Tooltip from '@mui/material/Tooltip';
import Loading from "../../components/Loader/Loader"

import { RiEditLine } from "react-icons/ri";

const dummyData=[ {
  "name": "Introduction",
  "key": "Introduction",
  "value": {
    "hi": "परिचय",
    "en": "Introduction",
    "bn": "পরিচিতি",
    "mr": "परिचय",
    "as": "পৰিচয়",
    "ur": "تعارف",
    "ml": "പ്രസ്താവന",
    "pa": "ਅਰਬਾਰੀ",
    "gu": "પરિચય",
    "te": "పరిచయం",
    "ta": "அறிமுகம்",
    "kn": "ಪರಿಚಯ"
  },
  "status": false,
  "id": "660d4606b05e30f95ecf4324"
},
{
  "name": "sdfdsf",
  "key": "dsfsdf",
  "value": {
    "hi": "",
    "en": "sdfdsfdsfsdf",
    "bn": "",
    "mr": "",
    "as": "",
    "ur": "",
    "ml": "",
    "pa": "",
    "gu": "",
    "te": "",
    "ta": "",
    "kn": ""
  },
  "status": false,
  "id": "660d5b7fae83967c120bedae"
},
{
  "name": "Ability_of_the_child_to_follow_multi_step_commands",
  "key": "Ability_of_the_child_to_follow_multi_step_commands",
  "value": {
    "hi": "बच्चे की बहु-चरणीय आदेशों का पालन करने",
    "en": "Ability of the child to follow multi-step commands",
    "bn": "শিশুর বহু-পদক্ষেপের আদেশগুলি অনুসরণ করার ক্ষমতা",
    "mr": "बहु-चरण आदेशांचे पालन करण्याची मुलाची क्षमता",
    "as": "শিশুৰ বহু পদক্ষেপৰ আদেশ পালন কৰাৰ ক্ষমতা",
    "ur": "بچے کی کثیر مرحلہ حکموں پر عمل کرنے کی صلاحیت",
    "ml": "മൾട്ടി-സ്റ്റെപ്പ് കമാൻഡുകൾ പിന്തുടരാനുള്ള കുട്ടിയുടെ കഴിവ്",
    "pa": "ਬੱਚੇ ਦੀ ਬਹੁ-ਪੜਾਵੀ ਕਮਾਂਡਾਂ ਦੀ ਪਾਲਣਾ ਕਰਨ ਦੀ ਸਮਰੱਥਾ",
    "gu": "બાળકની મલ્ટિ-સ્ટેપ કમાન્ડ્સનું પાલન કરવાની ક્ષમતા",
    "te": "బహుళ-దశల ఆదేశాలను అనుసరించే పిల్లల సామర్థ్యం",
    "ta": "பல-படி கட்டளைகளைப் பின்பற்றும் குழந்தையின் திறன்",
    "kn": "ಬಹು-ಹಂತದ ಆಜ್ಞೆಗಳನ್ನು ಅನುಸರಿಸಲು ಮಗುವಿನ ಸಾಮರ್ಥ್ಯ"
  },
  "status": false,
  "id": "660d70fcae83967c120bf305"
}]

const LanguageSetting = () => {
 
  const [searchKeyword, setSearchKeyword] = useState("");
  const [staticData, setStaticData] = useState([
   ...dummyData
  ]);

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  }

  // Simulating the fetch of data on component mount and when search changes
  useEffect(() => {
    // You can simulate an API call here and set data based on searchKeyword.
    // For now, we're using the staticData.

    if (searchKeyword) {
      // Filter the data based on search keyword in the name or key.
      const filteredData = dummyData.filter(item =>
        item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.key.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setStaticData(filteredData);
    } else {
      setStaticData(dummyData); // Reset if no search term is entered
    }
  }, [searchKeyword]);

  return (
    <>
      <Loading loading={false} />
      <div className=' h-[90vh] w-full overflow-y-scroll  py-3 md:px-5 px-1  '>
        <div className=' w-full h-full  max-w-[100vw] '>
          <div className='flex justify-between md:flex-row flex-col gap-2 p-5'>
            <div className=' font-semibold text-2xl'>{ServiceJSON.Heading}</div>
            <Link>
              <Button data={"Add Language"} />
            </Link>
          </div>
          <div className='md:py-10 md:px-10 '>
            <div className=''>
              <div className='flex flex-col items-start gap-4 text-[#7E84A3]'>
                <div className=' max-w-lg bg-white h-[40px] flex items-center border border-[#D9E1EC] rounded gap-2'>
                <IoMdSearch className='w-6 h-6 text-gray-400 ml-2' />
                  <input
                    className='flex-grow h-full outline-none text-sm'
                    onChange={handleSearch}
                    value={searchKeyword}
                    type='text'
                    placeholder='Search '
                  />
                </div>
              </div>

              {/* Table */}
              <div className="relative overflow-y-scroll shadow-md sm:rounded-lg mt-5">
                <table className=" w-full text-sm text-left rtl:text-right  text-gray-500 divide-y-4">
                  <thead className="text-[14px] text-[#5A607F] w-full    bg-white capitalize">
                    <tr className=' w-full'>
                      <th className="px-6 py-3 font-bold">Name</th>
                      <th className="px-6 py-3 font-bold">Key</th>
                      <th className="px-6 py-3 font-bold">Value</th>
                      <th className="px-6 py-3 font-bold">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {staticData && staticData.map((e, i) => (
                      <tr key={i} className='bg-white'>
                        <td className="px-6 py-3 font-normal mb-2">
                          <Tooltip title={e.name || "--"} arrow>
                            <div className=' w-36' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {e.name || "--"}
                            </div>
                          </Tooltip>
                        </td>

                        <td className="px-6 py-3 font-normal">
                          <Tooltip title={parse(e.key || "--")} arrow>
                            <div className=' w-36' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {parse(e.key || "--")}
                            </div>
                          </Tooltip>
                        </td>

                        <td className="px-6 py-3 font-normal">
                          <Tooltip title={e.value.en || "--"} arrow>
                            <div className=' w-36' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {e.value.en || "--"}
                            </div>
                          </Tooltip>
                        </td>

                        <td className="flex items-center justify-start px-6 py-2 gap-3">
                          <Link title='Edit' className='cursor-pointer shadow-md border p-1'>
                            <RiEditLine className='text-blue-600 text-2xl' />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {/* <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={Math.ceil(staticData.length / 10)} // Pagination based on the static data
                onPageChange={(data) => {
                  // Handle page change here
                }}
                containerClassName={'pagination'}
                pageClassName={'page-cls'}
                activeClassName={'active'}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <Model formData={{}} setFormData={() => {}} errorCreate={{}} seterrorCreate={() => {}} handleChange={() => {}} handleSubmit={() => {}} openAddmodel={false} setopenAddmodel={() => {}} />
      <Modelupdate shortvalue="en" updatedata={{}} setupdatedata={() => {}} handleSubmitUpdate={() => {}} setupdateError={{}} updateError={{}} handleChangeUpdate={() => {}} openAddmodelUpdate={false} setopenAddmodelUpdate={() => {}} />
    </>
  );
};

export default LanguageSetting;
