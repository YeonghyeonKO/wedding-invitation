// /* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line, react/prop-types */
// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { isMobileOnly } from 'react-device-detect';

// import closeIcon from '../../assets/icons/close.png';
// import { getGoogleSheet } from '../../hooks/useGoogleSheet';

// function GuestBookModal({
//   guestbookList,
//   setGuestbookList,
//   deleteModal,
//   handleDeleteModal,
// }) {
//   const [data, setData] = useState('');

//   const handleClickSubmit = async () => {
//     if (guestbookList[deleteModal].password !== data) {
//       toast.error('잘못된 비밀번호입니다.', {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else {
//       const googleSheet = await getGoogleSheet();
//       const sheetsByIdElement = googleSheet.sheetsById['1132076889'];
//       const newRows = await sheetsByIdElement.getRows();
//       await newRows[deleteModal].delete();

//       toast.success('메세지가 삭제되었습니다.', {
//         position: toast.POSITION.TOP_CENTER,
//       });

//       setGuestbookList((curList) => {
//         const newList = [...curList];
//         newList.splice(deleteModal, 1);
//         return newList;
//       });
//       handleDeleteModal();
//     }
//   };

//   const handleChangeData = (value) => {
//     setData(value);
//   };

//   return (
//     <div className="modal-wrapper">
//       <div className="modal-background">
//         <div className={`delete-modal ${isMobileOnly ? 'mobile' : 'web'}`}>
//           <div className="title-wrapper">
//             <div className="modal-title">메세지 삭제</div>
//             <button type="button" onClick={() => handleDeleteModal()}>
//               <img src={closeIcon} alt="" />
//             </button>
//           </div>
//           <div className="form-wrapper">
//             <div className="form-item">
//               <div className="form-label">비밀번호</div>
//               <div className="form-content">
//                 <input
//                   type="password"
//                   value={data.password}
//                   onChange={(e) => handleChangeData(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//           <button type="button" onClick={handleClickSubmit}>
//             삭제하기
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GuestBookModal;
