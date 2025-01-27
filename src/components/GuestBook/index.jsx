// /* eslint-disable react/jsx-props-no-spreading,
// react/jsx-one-expression-per-line, react/prop-types */
// import React, { useState, useRef, useEffect } from 'react';
// import Slider from 'react-slick';

// import useGoogleSheet from '../../hooks/useGoogleSheet';
// import closeIcon from '../../assets/icons/close.png';
// import leftIcon from '../../assets/icons/chevron-left-custom.png';
// import rightIcon from '../../assets/icons/chevron-right-custom.png';

// function GuestBook({
//   guestbookList,
//   setGuestbookList,
//   handleDeleteModal,
//   handleWriteModal,
// }) {
//   const sliderRef = useRef(null);
//   const [rows] = useGoogleSheet('1132076889');
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     setGuestbookList(rows);
//   }, [rows]);

//   const settings = {
//     initialSlide: 0,
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     rows: 5,
//     slidesPerRow: 1,
//     swipeToSlide: true,
//     swipe: true,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     beforeChange: (slide, newSlide) => setCurrent(newSlide),
//   };

//   const handleCurrentChange = (value) => {
//     let index = current + value;
//     if (index < 0) {
//       index = Math.ceil(guestbookList.length / 5) - 1;
//     } else if (index > Math.ceil(guestbookList.length / 5)) {
//       index = 0;
//     }
//     sliderRef.current.slickGoTo(index, true);
//     setCurrent(index);
//   };

//   return (
//     <div className="guestbook">
//       <div className="sub-title">GUESTBOOK</div>
//       <div className="title">축하의 마음을 전해주세요</div>
//       <div className="guestbook-list">
//         <Slider ref={sliderRef} {...settings}>
//           {guestbookList.map((o, index) => (
//             <div className="guestbook-item" key={o.rowNumber}>
//               <div className="icon">
//                 {o.icon
//                   ? String.fromCodePoint(Number(o.icon))
//                   : String.fromCodePoint(128156)}
//               </div>
//               <div className="item-top">
//                 <div className="name">{o.name}</div>
//                 <div className="date">{o.date}</div>
//                 <div
//                   className="delete-icon"
//                   onClick={() => handleDeleteModal(index)}
//                   aria-hidden="true"
//                 >
//                   <img src={closeIcon} alt="" />
//                 </div>
//               </div>
//               <div className="item-content">{o.content}</div>
//             </div>
//           ))}
//         </Slider>
//         <div className="index-wrapper">
//           <div
//             className="arrow-wrapper"
//             aria-hidden="true"
//             onClick={() => handleCurrentChange(-1)}
//           >
//             <img src={leftIcon} alt="" />
//           </div>
//           <div className="current-index">
//             <span>{current + 1}</span>/
//             <span>
//               {Math.ceil(Object.keys(guestbookList).length / 5)} 페이지
//             </span>
//           </div>
//           <div
//             className="arrow-wrapper"
//             aria-hidden="true"
//             onClick={() => handleCurrentChange(1)}
//           >
//             <img src={rightIcon} alt="" />
//           </div>
//         </div>
//       </div>
//       <div
//         className="guestbook-add"
//         aria-hidden="true"
//         onClick={() => handleWriteModal('open')}
//       >
//         메세지 작성하기
//       </div>
//     </div>
//   );
// }

// export default GuestBook;
