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
        phone: '010-8957-6286',
        bank: '토스뱅크',
        account: '1000-1286-5507',
        kakao: 'https://qr.kakaopay.com/Ej8ZBFvdw',
      },
      {
        type: '아버지',
        name: '고동석',
        phone: '010-5356-3847',
        bank: 'iM뱅크(대구)',
        account: '214-13-004489',
        kakao: '',
      },
      {
        type: '어머니',
        name: '김인하',
        phone: '010-4510-6286',
        bank: 'NH농협은행',
        account: '439-12-137622',
        kakao: '',
      },
    ],
  },
  bride: {
    type: '신부측',
    list: [
      {
        type: '신부',
        name: '박솔혜',
        phone: '010-9126-1053',
        bank: 'KB국민은행',
        account: '605301-04-131333',
        kakao: 'https://qr.kakaopay.com/FNGB32VMV',
      },
      {
        type: '아버지',
        name: '박주열',
        phone: '010-5408-1053',
        bank: 'KB국민은행',
        account: '838-21-0257-341',
        kakao: '',
      },
      {
        type: '어머니',
        name: '길동숙',
        phone: '010-8755-1058',
        bank: 'KEB하나은행',
        account: '344-890469-74907',
        kakao: '',
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
        <p>함께 해주시는 모든 분들께 감사드리며,</p>
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
                      {item.type} <span>{item.name} <div className="phone">({item.phone})</div></span>
                    </div>
                    <div className="account-info">
                      <div className="account-name">{item.bank}</div>
                      <div className="account-num">{item.account}</div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div
                      className="kakao"
                      onClick={(e) => handleClickKakaoPay(e, item)}
                      aria-hidden="true"
                      style={{
                        visibility:
                          item.kakao === '' ? 'hidden' : 'visible',
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
