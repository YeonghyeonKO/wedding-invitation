/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line,
react/destructuring-assignment, react/prop-types */
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import kakaopayIcon from '../../assets/icons/kakaopay.png';
import groomDownIcon from '../../assets/icons/chevron-down-groom.png';
import brideDownIcon from '../../assets/icons/chevron-down-bride.png';
import whiteFlowerImg from '../../assets/background/white.png';

const accountInfo = {
  groom: {
    type: '신랑측',
    list: [
      {
        type: '신랑',
        name: '고영현',
        bank: '토스뱅크',
        account: '1000-1286-5507',
        kakao: 'https://qr.kakaopay.com/Ej8ZBFvdw',
      },
      {
        type: '아버지',
        name: '고동석',
        bank: '동석은행',
        account: '1234-5678',
        kakao: 'https://qr.kakaopay.com/Ej8ZBFvdw',
      },
      {
        type: '어머니',
        name: '김인하',
        bank: '인하은행',
        account: '1234-5678',
        kakao: 'https://qr.kakaopay.com/Ej8ZBFvdw',
      },
    ],
  },
  bride: {
    type: '신부측',
    list: [
      {
        type: '신부',
        name: '박솔혜',
        bank: '솔혜은행',
        account: '1234-5678',
      },
      {
        type: '아버지',
        name: '박주열',
        bank: '주열은행',
        account: '1234-5678',
        // kakao: 'https://qr.kakaopay.com/FYysFddA1',
      },
      {
        type: '어머니',
        name: '길동숙',
        bank: '동숙은행',
        account: '1234-5678',
        // kakao: 'https://qr.kakaopay.com/FEhonaYzK',
      },
    ],
  },
};

function Account(props) {
  const [accountOpen, setAccountOpen] = useState({
    groom: false,
    bride: false,
  });

  const handleOpenAccount = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    setAccountOpen((curOpen) => {
      const newOpen = { ...curOpen };
      newOpen[type] = !curOpen[type];
      return newOpen;
    });
  };

  const handleClickKakaoPay = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(item.kakao);
  };

  const handleCopyAccount = () => {
    props.setCopyModal('account');
  };

  return (
    <div className="account">
      <div className="sub-title">FOR YOUR HEART</div>
      <div className="title">마음 전하실 곳</div>
      <div className="description">
        <img src={whiteFlowerImg} alt="" />
        <p>저희 두 사람의 소중한 시작을</p>
        <p>함께 해주시는 모든 분들게 감사드리며,</p>
        <p>전해주시는 따뜻한 진심을 배워</p>
        <p>오래도록 행복하게 잘 살겠습니다.</p>
      </div>
      <div className="account-wrapper">
        {Object.keys(accountInfo).map((type) => (
          <div
            key={type}
            className={`account-item ${type} ${
              accountOpen[type] ? 'open' : ''
            }`}
          >
            <div
              className="account-title"
              aria-hidden="true"
              onClick={(e) => handleOpenAccount(e, type)}
            >
              ♥ &nbsp;
              {accountInfo[type].type}
              <img
                src={type === 'groom' ? groomDownIcon : brideDownIcon}
                alt=""
              />
            </div>
            <div className={`account-content ${type}`}>
              {accountInfo[type].list.map((item) => (
                <div className="account-content-item" key={item.name}>
                  <div className="top">
                    <div className="name">
                      {item.type} <span>{item.name}</span>
                    </div>
                    <div className="account-num">
                      <span>{item.bank}</span>
                      {item.account}
                    </div>
                  </div>
                  <div className="bottom">
                    <div
                      className="kakao"
                      onClick={(e) => handleClickKakaoPay(e, item)}
                      aria-hidden="true"
                      style={{
                        visibility:
                          item.bank === '우리은행' ? 'hidden' : 'visible',
                      }}
                    >
                      <img src={kakaopayIcon} alt="" /> 송금
                    </div>
                    <CopyToClipboard
                      text={item.account}
                      onCopy={handleCopyAccount}
                    >
                      <div className="copy">계좌번호 복사</div>
                    </CopyToClipboard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;
