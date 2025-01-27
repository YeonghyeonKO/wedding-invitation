// /* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line, react/prop-types */
// import React, { useState, useEffect } from 'react';
// import { isMobileOnly } from 'react-device-detect';
// import ScrollContainer from 'react-indiana-drag-scroll';
// import { toast } from 'react-toastify';

// import closeIcon from '../../assets/icons/close.png';
// import { getGoogleSheet } from '../../hooks/useGoogleSheet';

// const iconList = [
//   0x1f435, 0x1f436, 0x1f43a, 0x1f98a, 0x1f431, 0x1f981, 0x1f42f, 0x1f437,
//   0x1f42d, 0x1f439, 0x1f430, 0x1f43b, 0x1f438,
// ];

// function GuestBookModal({ setGuestbookList, handleWriteModal }) {
//   const [data, setData] = useState({
//     name: '',
//     password: '',
//     content: '',
//     icon: '',
//   });
//   const [warning, setWarning] = useState('');

//   const handleGoogleSheetAddRow = async (row) => {
//     const googleSheet = await getGoogleSheet();
//     const sheetsByIdElement = googleSheet.sheetsById['1132076889'];
//     await sheetsByIdElement.addRow(row);
//     const newRows = await sheetsByIdElement.getRows();
//     setGuestbookList(newRows);
//   };

//   const handleClickSubmit = () => {
//     if (!data.name) {
//       setWarning('name');
//     } else if (!data.password || data.password.length < 4) {
//       setWarning('password');
//     } else if (!data.content) {
//       setWarning('content');
//     } else {
//       const today = new Date();
//       handleGoogleSheetAddRow({
//         ...data,
//         date: today.toLocaleDateString(),
//       });
//       toast.success('메세지가 등록되었습니다.', {
//         position: toast.POSITION.TOP_CENTER,
//       });
//       handleWriteModal('close');
//     }
//   };

//   const handleChangeData = (type, value) => {
//     setData((curData) => {
//       const newData = { ...curData };
//       newData[type] = value;
//       return newData;
//     });
//   };

//   useEffect(() => {
//     const randomIcon = iconList[Math.floor(Math.random() * 15)];
//     setData((curData) => {
//       const newData = { ...curData };
//       newData.icon = randomIcon;
//       return newData;
//     });
//     const scrollItem = document.getElementById(randomIcon);
//     if (scrollItem) {
//       scrollItem.scrollIntoView();
//     }
//   }, []);

//   const makeIconList = () => (
//     <div className="icon-list">
//       <ScrollContainer className="scroll-container">
//         {iconList.map((o) => (
//           <div
//             aria-hidden="true"
//             id={o}
//             className={`icon-item ${data.icon === o ? 'active-icon' : ''}`}
//             key={o}
//             onClick={() => handleChangeData('icon', o)}
//           >
//             {String.fromCodePoint(o)}
//           </div>
//         ))}
//       </ScrollContainer>
//     </div>
//   );

//   return (
//     <div className="modal-wrapper">
//       <div className="modal-background">
//         <div className={`write-modal ${isMobileOnly ? 'mobile' : 'web'}`}>
//           <div className="title-wrapper">
//             <div className="modal-title">신랑신부에게 메시지 남기기</div>
//             <button type="button" onClick={() => handleWriteModal('close')}>
//               <img src={closeIcon} alt="" />
//             </button>
//           </div>
//           <div className="form-wrapper">
//             {makeIconList()}
//             <div className="form-item">
//               <div className="form-label">닉네임</div>
//               <div className="form-content">
//                 <input
//                   type="text"
//                   value={data.name}
//                   onChange={(e) => handleChangeData('name', e.target.value)}
//                 />
//                 {warning === 'name' && (
//                   <div className="warning">
//                     닉네임을 1글자 이상 입력해주세요.
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="form-item">
//               <div className="form-label">비밀번호</div>
//               <div className="form-content">
//                 <input
//                   placeholder="(삭제 시 필요)"
//                   type="password"
//                   value={data.password}
//                   onChange={(e) => handleChangeData('password', e.target.value)}
//                 />
//                 {warning === 'password' && (
//                   <div className="warning">
//                     비밀번호를 4글자 이상 입력해주세요.
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="form-item">
//               <div className="form-label">내용</div>
//               <div className="form-content">
//                 <textarea
//                   rows={5}
//                   type="text"
//                   value={data.content}
//                   onChange={(e) => handleChangeData('content', e.target.value)}
//                 />
//                 {warning === 'content' && (
//                   <div className="warning">내용을 입력해주세요.</div>
//                 )}
//               </div>
//             </div>
//           </div>
//           <button type="button" onClick={handleClickSubmit}>
//             작성하기
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GuestBookModal;
