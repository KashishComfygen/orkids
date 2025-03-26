/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import LanguageManagementJSON from './LanguageManagement.json'
import { RiEditLine } from "react-icons/ri";
import Model from "./Modle/Model"
import Modelupdate from './Modle/Modelupdate';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from 'react-paginate';

const FirstScreen = () => {
  
  const staticData = {
    "message": "Success",
    "code": 0,
    "error": false,
    "data": {
      "total": 1,
      "list": [
        {
          "_id": "65f9901efd1be7ed89655f9f",
          "link": "<h1 class=\"ql-align-center\"><span style=\"color: rgb(77, 32, 122);\">First Screen by Orkids!</span></h1><p>This screening app is developed to identify children <strong>‘at risk’ of developmental disorders especially Specific Learning Disabilities</strong>, a disability which has a high rate of prevalence of <strong>10-12% in every classroom</strong> in our country.</p><p>Orkids’ attempt to empower both parents and teachers <strong>to identify such children and facilitate early intervention</strong> is aimed at reducing the barriers of distance, time, money and most importantly language.</p><p>Use the app early so as to maximise the overall development of your child.</p><p>The screening tool is <strong>filled by a parent, a teacher or an adult who ‘knows’ the child's academic and behavioural history</strong>. An adult can screen for multiple children</p><p><br></p><h1 class=\"ql-align-center\"><span style=\"color: rgb(77, 32, 122);\">Screening Tool for Specific Learning Disabilities.</span></h1><p>First Screen Tool for Specific Learning Disabilities is a checklist of signs and symptoms which has been tested with over 100 children from different schools and different classes. The ages it caters to range from 4 years to 18 years. It is important to keep in mind that the child should have been exposed to at least 1 year of formal instruction (teaching) in a school before attempting to use the tool.</p><p>The screening tool should be filled by a parent, a teacher or an adult who ‘knows’ the child's academic and behavioural history. The time taken is about 20-25 minutes per child. The submitted checklist generates a feedback report that highlights the child's performance in different areas (&amp; identifies the areas of difficulty) and suggests the appropriate action plan.</p><p><img src=\"https://res.cloudinary.com/dnd2isyjo/image/upload/v1711024332/your_folder_name/plghi3pp9atddiuvyql3.gif\"></p><p><br></p><p>The Screening app has <strong>99 questions in three section. </strong>Each section takes about <strong>5-7 minutes.</strong><img src=\"https://res.cloudinary.com/dnd2isyjo/image/upload/v1711024115/your_folder_name/giyrp3afhurezydrivgg.gif\"></p><p><br></p><p><strong>It caters to school-going children.</strong>It is important to keep in mind that the child should have been exposed to<strong> at least 1 year of formal instruction (teaching) in a school</strong> before attempting to use the tool.<img src=\"https://res.cloudinary.com/dnd2isyjo/image/upload/v1712239515/your_folder_name/s4bjtcpapeujrxiegxoj.gif\">Orkids Screening Tool for Specific Learning Disabilities and related concerns is a <strong>signs and symptoms checklist</strong> which has been<strong> tested with over 100 children from different schools</strong> and different classes.<strong><img src=\"https://res.cloudinary.com/dnd2isyjo/image/upload/v1712239121/your_folder_name/k63mwfw0tehiujfpx1aw.gif\"></strong>A feedback report<strong> </strong>will be generated after the submission of a completed checklist. The report highlights the areas of difficulty the child faces and a suggested action plan. You can also download the PDF.<img src=\"https://res.cloudinary.com/dnd2isyjo/image/upload/v1711024203/your_folder_name/tedien4xnfxeklygqokn.gif\">Please read the questionnaire/statement thoroughly and select the appropriate response</p><p>You will not be able to go back and alter your response.</p><h2><span style=\"color: rgb(77, 32, 122);\">How to answer?</span></h2><h3>YES</h3><p>if the child has been showing persistent difficulties in the mentioned skill or behaviour most of the time in the past 6 months and it is affecting school performance significantly. For example, while reading the child is not able to decode (break) words into sounds without help.</p><h3>NO / NOT APPLICABLE</h3><p>if the child has hardly ever shown difficulties in the mentioned skill or behaviour in the past 6 months and it has no impact on school performance. For example, while reading the child is able to decode (break) the word into sounds easily.</p><h3>SOMETIMES</h3><p>if the child has been showing difficulties in the mentioned skill or behaviour sometimes in the past 6 months and it is affecting the school performance to some extent. For example, while reading the child faces difficulties in decoding (breaking) the word into sounds occasionally and needs help.</p>",
          "isDisable": false,
          "createdAt": 1710854174000
        }
      ]
    }
  };

  const [loaderImage, setLoaderImage] = useState(false);
  const [imageChange, setimageChange] = useState({});
  const [openAddmodelUpdate, setopenAddmodelUpdate] = useState(false);
  const [updatedata, setupdatedata] = useState({});
  const [id, setId] = useState('');
  const [updateError, setupdateError] = useState({});

  // handle update model
  const handleUpdatemodel = (data) => {
    setopenAddmodelUpdate(true);
    setupdatedata(data);
    setId(data._id);
  };

  const handleChangeUpdate = (content) => {
    setupdatedata({
      ...updatedata,
      link: content,
    });
  };

  const handleSubmitUpdate = (e) => {
    // handle the update form submission
  };

  // delete functionality (to be implemented)
  const handleDelete = (data) => {
    // delete logic
  };

  // pagination logic
  const [size, setSize] = useState(10);
  const [isMobile, setIsMobile] = useState(true);
  const [offset, setoffset] = useState(0);

  const handlePageClick = (data) => {
    // pagination logic here
  };

  return (
    <>
    <div className='h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1'>
      <div className='w-full h-full max-w-[100vw]'>
        <div className='flex justify-between w-[80vw] flex-wrap gap-2 p-5'>
          <div className='font-semibold text-2xl'>{LanguageManagementJSON.Heading}</div>
        </div>

        <div className='md:py-10 md:px-10'>
          <div className=''>
            <div className="relative overflow-x-scroll w-full shadow-md sm:rounded-lg mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y-4">
                <thead className="text-[14px] text-[#5A607F] bg-white capitalize">
                  <tr>
                    <th className="px-6 whitespace-nowrap font-bold py-3">Link</th>
                    <th className="px-6 py-3 font-bold"></th>
                  </tr>
                </thead>
                {staticData.data.list.map((e, i) => (
                  <tbody key={i}>
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <td className="w-4 overflow-hidden p-4">
                        <div className="flex w-full gap-2 items-center space-x-6 whitespace-nowrap">
                          <div
                            style={{ width: '600px', height: '400px', overflow: 'hidden' }}
                            dangerouslySetInnerHTML={{ __html: e?.link || '' }}
                          />
                        </div>
                      </td>
                      <td className="flex items-center justify-end px-6 py-4 gap-3">
                        <div
                          onClick={() => handleUpdatemodel(e)}
                          className='cursor-pointer shadow-md border p-1'
                        >
                          <RiEditLine className='text-blue-600 text-2xl' />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              {isMobile ? (
                staticData.data.list.length > 10 && (
                  <ReactPaginate
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(staticData.data.total / size)}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    pageClassName={'page-cls'}
                    activeClassName={'active'}
                  />
                )
              ) : (
                staticData.data.list.length > 10 && (
                  <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(staticData.data.total / size)}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    pageClassName={'page-cls'}
                    activeClassName={'active'}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    <Model
      formData={{}}
      setFormData={() => {}}
      errorCreate={{}}
      handleChange={() => {}}
      handleSubmit={() => {}}
      openAddmodel={false}
      setopenAddmodel={() => {}}
    />
    <Modelupdate
      imageChange={{}}
      setimageChange={() => {}}
      loaderImage={loaderImage}
      setLoaderImage={setLoaderImage}
      handleImage={() => {}}
      updatedata={updatedata}
      handleSubmitUpdate={handleSubmitUpdate}
      updateError={updateError}
      handleChangeUpdate={handleChangeUpdate}
      setupdateError={setupdateError}
      openAddmodelUpdate={openAddmodelUpdate}
      setopenAddmodelUpdate={setopenAddmodelUpdate}
    />
    </>
  );
};

export default FirstScreen;
