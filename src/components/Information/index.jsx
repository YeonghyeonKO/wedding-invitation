/* eslint-disable no-nested-ternary, react/jsx-one-expression-per-line,
react/jsx-props-no-spreading,operator-linebreak */
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';

import parkingImg from '../../assets/photo/parking.jpg';
import venueImg from '../../assets/photo/venue.jpg';
import diningImg from '../../assets/photo/dining.jpg';

const informationData = {
  notice: {
    name: '예식 안내',
    img: venueImg,
    content1:
      '건물 내 웨딩홀이 하나인 예식장으로, 2층에서 식 진행 후 1층 연회장에서 식사가 진행됩니다.',
    content2:
      '부족함 없는 식사 준비를 위하여 참석여부와 동반인원수를 미리 말씀해주시면 감사하겠습니다.',
  },
  parking: {
    name: '주차 안내',
    img: parkingImg,
    content1: '예식장 내 주차장에 자가 주차가 가능합니다. (무료 주차 2시간)',
    content2:
      '1400대 동시 수용이 가능한 주차 공간이 마련되어 있습니다.'
  },
  dining: {
    name: '식사 안내',
    img: diningImg,
    content1: '1층 연회장에 뷔페가 준비되어 있습니다. (착석해주시면 스테이크가 서빙될 예정입니다.)',
    content2:
      '식사를 못하고 가시는 분들께서는 잊지 마시고 1층 로비에서 식권을 답례품으로 교환해 가시기 바랍니다.',
  },
};

function Information() {
  const sliderRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState('notice');

  const handleClickTab = (e, tab, index) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedTab !== tab) {
      setSelectedTab(tab);
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings = {
    initialSlide: 0,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    swipe: true,
    arrows: false,
    beforeChange: (index, newIndex) => {
      const newTab =
        newIndex === 0 ? 'notice' : newIndex === 1 ? 'parking' : 'dining';
      setSelectedTab(newTab);
    },
  };

  return (
    <div className="information">
      <div className="sub-title">INFORMATION</div>
      <div className="title">예식 정보를 안내합니다</div>
      <div className="tabs">
        {Object.keys(informationData).map((tab, index) => (
          <div
            key={tab}
            className={`tab ${selectedTab === tab ? 'active' : ''}`}
            onClick={(e) => handleClickTab(e, tab, index)}
            aria-hidden="true"
          >
            {selectedTab === tab && <span>♥</span>}
            {informationData[tab].name}
          </div>
        ))}
      </div>
      <div className="contents">
        <Slider ref={sliderRef} {...settings}>
          {Object.keys(informationData).map((tab) => (
            <div className="information-content" key={tab}>
              <img src={informationData[tab].img} alt="" />
              <div className="information-title">
                {informationData[tab].name}
                <span>/ &nbsp; {tab.toUpperCase()}</span>
              </div>
              <div className="content-description">
                <ul>
                  <li>{informationData[tab].content1}</li>
                  <li> {informationData[tab].content2}</li>
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Information;
