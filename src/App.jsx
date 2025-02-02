/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line,
react/no-array-index-key,no-nested-ternary, indent  */

import React, { useState, useRef } from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer } from 'react-toastify';
// import scrollbar from 'smooth-scrollbar';

import useScrollFadeIn from './hooks/useScrollFadeIn';
import useBodyScrollLock from './hooks/useBodyScrollLock';

import Account from './components/Account';
import Calendar from './components/Calendar';
import DDay from './components/DDay';
import Information from './components/Information';
import Location from './components/Location';
import RsvpModal from './components/RsvpModal';
import Gallery from './components/Gallery';
import ImageSlide from './components/ImageSlide';
import Quiz from './components/Quiz';
// import GuestBook from './components/GuestBook';
import WriteModal from './components/GuestBook/WriteModal';
import DeleteModal from './components/GuestBook/DeleteModal';

import mainImg from './assets/photo/main.jpg';
// import flowerIcon from './assets/icons/daisy.png';
// import linkIcon from './assets/icons/link-green.png';
// import kakaoIcon from './assets/icons/kakao-talk-green.png';
import leafIcon from './assets/icons/greentea-darkgreen.png';

import pinkImg from './assets/background/pink.png';
import leafImg from './assets/background/leaf.png';
import posong from './assets/photo/posong.png';
// import basketImg from './assets/background/pink.png';

import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

export const shareKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '고영현 ♥ 박솔혜의 결혼식에 초대합니다.',
        description: '25.03.23 AM 11:00 · 지타워컨벤션',
        imageUrl: 'https://i.postimg.cc/RVZnsVVv/main.jpg',
        link: {
          mobileWebUrl: process.env.REACT_APP_MAIN_LINK,
          webUrl: process.env.REACT_APP_MAIN_LINK,
        },
      },
      buttons: [
        {
          title: '지금 확인하기',
          link: {
            mobileWebUrl: process.env.REACT_APP_MAIN_LINK,
            webUrl: process.env.REACT_APP_MAIN_LINK,
          },
        },
        {
          title: '위치보기',
          link: {
            mobileWebUrl:
              'https://map.naver.com/p/entry/place/1090437805?c=15.00,0,0,0,dh',
            webUrl:
              'https://map.naver.com/p/entry/place/1090437805?c=15.00,0,0,0,dh',
          },
        },
      ],
    });
  }
};

function App() {
  const inviteRef = useRef(null);
  useScrollFadeIn(inviteRef);

  const { lockScroll, openScroll } = useBodyScrollLock();

  const [loading, setLoading] = useState(true);

  const [copyModal, setCopyModal] = useState('');
  const [rsvpModal, setRsvpModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [writeModal, setWriteModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState('');
  const [quizModal, setQuizModal] = useState(false);

  const [guestbookList, setGuestbookList] = useState([]);

  // useEffect(() => {
  //   const contentDiv = document.querySelector('#smooth-scroll');
  //   if (contentDiv && !isAndroid && !isIOS) {
  //     scrollbar.init(contentDiv, {
  //       damping: 0.02,
  //     });
  //   }
  // }, []);

  // const handleCopyOk = () => {
  //   setCopyModal('link');
  // };

  const handleCloseLinkModal = () => {
    setCopyModal('');
  };

  const handleClickImage = (key) => {
    setImageModal(key);
    lockScroll();
  };

  const handleCloseImageModal = () => {
    setImageModal('');
    openScroll();
  };

  // const handleClickQuiz = () => {
  //   setQuizModal(true);
  //   lockScroll();
  // };

  const handleCloseQuiz = () => {
    setQuizModal(false);
    openScroll();
  };

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  const handleClickRsvp = () => {
    setRsvpModal(true);
    lockScroll();
  };

  const handleCloseRsvpModal = () => {
    setRsvpModal(false);
    openScroll();
  };

  const handleWriteModal = (flag) => {
    if (flag === 'open') {
      setWriteModal(true);
      lockScroll();
    } else {
      setWriteModal(false);
      openScroll();
    }
  };

  const handleDeleteModal = (index) => {
    if (index !== undefined) {
      setDeleteModal(index);
      lockScroll();
    } else {
      setDeleteModal('');
      openScroll();
    }
  };

  return (
    <div className="invitation">
      {loading && (
        <div className="loading">
          <div className="decoration">Our Wedding Day</div>
          <div className="loading-content">솔혜 ♥ 영현</div>
        </div>
      )}
      <div className="header">
        <div className="title">SOLHYE & YEONGHYEON</div>
        {/* <div className="buttons">
          <CopyToClipboard
            text={process.env.REACT_APP_MAIN_LINK}
            onCopy={handleCopyOk}
          >
            <img src={linkIcon} alt="" />
          </CopyToClipboard>
          <div onClick={shareKakao} aria-hidden="true">
            <img src={kakaoIcon} alt="" />
          </div>
        </div> */}
      </div>
      <div className="content" id="smooth-scroll">
        <div className="main">
          <img className="main-img" src={mainImg} alt="" />
          <div className="invite-text">
            <img src={leafIcon} alt="" />
            <p>사랑하는 사람을 만나 함께 걷고자 합니다.</p>
            <p>저희를 아껴주시는 분들 앞에서 나아가겠습니다.</p>
          </div>
        </div>
        <div className="invite" ref={inviteRef}>
          <div className="title">Invitation</div>
          <div className="text">
            <img src={pinkImg} alt="" />
            <p>사랑의 정의를 내리는 이 길에서,</p>
            <p>더없이 행복하겠습니다.</p>
            <p>지금껏 달려온 우리의 용기를 위해</p>
            <p>찬란한 우리의 미래를 위해</p>
            <p>우주 속 무수한 사랑의 형태 중 하나를 찾고자 합니다.</p>
            <p>To Infinity And Beyond!</p>
          </div>
          <div className="line" />
          <div className="name-wrapper">
            <div className="name">
              <strong>고동석 · 김인하</strong>의 <div className="sub">아들</div>
              <span>영현</span>
            </div>
            <div className="name">
              <strong>박주열 · 길동숙</strong>의 <div className="sub">딸</div>
              <span>솔혜</span>
            </div>
          </div>
        </div>
        {/* <Contact /> */}
        <Calendar />
        <DDay />
        <Gallery handleClickImage={handleClickImage} />
        {/* <div className="quiz">
          <div className="sub-title">JOIN US</div>
          <div className="title">신랑신부 퀴즈 풀기</div>
          <div className="quiz-wrapper">
            <img src={basketImg} alt="" />
            <div className="description">
              <p>신랑신부에 대한 퀴즈를 풀어보세요!</p>
              <p>참여해 주신 분들과</p>
              <p>고득점을 얻은 분들께는</p>
              <p>결혼식 2부 진행 시</p>
              <p>추첨을 통해 상품을 드립니다🎁</p>
              <br />
              <p>신랑신부에 대해 알아가는</p>
              <p>재밌는 시간이 되길 바랍니다😊</p>
            </div>
            <button className="button" type="button" onClick={handleClickQuiz}>
              퀴즈 풀어보기
            </button>
          </div>
        </div> */}
        <Information />
        <div className="rsvp">
          <div className="sub-title">save the date</div>
          <div className="title">참석 의사 전달</div>
          <div className="rsvp-wrapper">
            <img src={leafImg} alt="" />
            <div className="description">
              <p>모든 분들께</p>
              <p>부족함 없는 예식을 준비하기 위해</p>
              <p>참석 및 식사 여부를</p>
              <p>미리 여쭙고자 합니다.</p>
              <br />
              <p>부담없이 알려주시면</p>
              <p>정성껏 준비하겠습니다.</p>
            </div>
            <button className="button" type="button" onClick={handleClickRsvp}>
              참석 의사 전달하기
            </button>
          </div>
        </div>
        <Location />
        <Account setCopyModal={setCopyModal} />

        {/* <GuestBook
          handleWriteModal={handleWriteModal}
          handleDeleteModal={handleDeleteModal}
          guestbookList={guestbookList}
          setGuestbookList={setGuestbookList}
        /> */}
        {/* <div className="share">
          <CopyToClipboard
            text={process.env.REACT_APP_MAIN_LINK}
            onCopy={handleCopyOk}
          >
            <div className="link-share" aria-hidden="true">
              <img src={linkIcon} alt="" />
              링크주소 복사하기
            </div>
          </CopyToClipboard>
          <div className="kakao-share" aria-hidden="true" onClick={shareKakao}>
            <img src={kakaoIcon} alt="" />
            카카오톡 공유하기
          </div>
        </div> */}
        <div className="thanks">
          <div className="title">Thanks To</div>
          <div className="thanks-wrapper">
            <div>항상 따스한 마음으로 응원해주시고</div>
            <div>격려해주신 모든 분들께 감사드립니다.</div>
            <div />
            <div>- 고영현, 박솔혜 드림 -</div>
            <img src={posong} className="posong" alt="" />
          </div>
        </div>
      </div>
      {copyModal && (
        <div className="link-copy-modal">
          {copyModal === 'link' ? '링크' : '계좌번호'}가 복사되었습니다.
          <button type="button" onClick={handleCloseLinkModal}>
            확인
          </button>
        </div>
      )}
      {rsvpModal && <RsvpModal handleCloseRsvpModal={handleCloseRsvpModal} />}
      {imageModal && (
        <ImageSlide
          imageModal={imageModal}
          handleCloseImageModal={handleCloseImageModal}
        />
      )}
      {writeModal && (
        <WriteModal
          handleWriteModal={handleWriteModal}
          setGuestbookList={setGuestbookList}
        />
      )}
      {deleteModal !== '' && (
        <DeleteModal
          deleteModal={deleteModal}
          handleDeleteModal={handleDeleteModal}
          guestbookList={guestbookList}
          setGuestbookList={setGuestbookList}
        />
      )}
      {quizModal && <Quiz handleCloseQuiz={handleCloseQuiz} />}
      <ToastContainer />
    </div>
  );
}

export default App;
