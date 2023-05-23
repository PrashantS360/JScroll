import React from "react";

function Icon({ steps, scroll, setScroll }) {
  const handleClick = (scrollBy) => {
    setScroll(scrollBy);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 414 414"
      version="1.1"
      viewBox="0 0 414 414"
      xmlSpace="preserve"
      width={270}
    >
      <path
        fill="none"
        stroke="#FFF"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
        className="transrg"
        enableBackground="new"
        opacity="0.4"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeDasharray={`${scroll / 4.2},1000`}
        strokeMiterlimit="20"
        strokeWidth="2"
        d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
        className="transrgwht"
      ></path>
      <g className="dots-nav-1 cursor-pointer" onClick={() => { handleClick(steps[0]) }}>
        <path
          fill={scroll >= steps[0] ? "#0092FF" : "#808080"}
          d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
          className="dotsst dotsfill1"
        ></path>
        <path
          fill="none"
          stroke={scroll >= steps[0] ? "#FFF" : "#808080"}
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
          className="dotsstro1"
        ></path>
      </g>
      <g className="dots-nav-2 cursor-pointer" onClick={() => { handleClick(steps[1]) }}>
        <path
          fill={scroll >= steps[1] ? "#0092FF" : "#808080"}
          d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
          className="dotsst dotsfill2"
        ></path>
        <path
          fill="none"
          stroke={scroll >= steps[1] ? "#FFF" : "#808080"}
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
          className="dotsstro2"
        ></path>
      </g>
      <g className="dots-nav-3 cursor-pointer" onClick={() => { handleClick(steps[2]) }}>
        <path
          fill={scroll >= steps[2] ? "#0092FF" : "#808080"}
          d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
          className="dotsst dotsfill3"
        ></path>
        <path
          fill="none"
          stroke={scroll >= steps[2] ? "#FFF" : "#808080"}
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
          className="dotsstro3"
        ></path>
      </g>
      <g className="dots-nav-4 cursor-pointer" onClick={() => { handleClick(steps[3]) }}>
        <path
          fill={scroll >= steps[3] ? "#0092FF" : "#808080"}
          d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
          className="dotsst dotsfill4"
        ></path>
        <path
          fill="none"
          stroke={scroll >= steps[3] ? "#FFF" : "#808080"}
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
          className="dotsstro4"
        ></path>
      </g>
      <g className="dots-nav-5 cursor-pointer" onClick={() => { handleClick(steps[4]) }}>
        <path
          fill={scroll >= steps[4] ? "#0092FF" : "#808080"}
          d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
          className="dotsst dotsfill5"
        ></path>
        <path
          fill="none"
          stroke={scroll >= steps[4] ? "#FFF" : "#808080"}
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
          className="dotsstro5"
        ></path>
      </g>
      <g className="dots-nav-6 cursor-pointer" onClick={() => { handleClick(steps[5]) }}>
        <path
          fill={scroll >= steps[5] ? "#0092FF" : "#808080"}
          d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
          className="dotsst dotsfill6"
        ></path>
        <path
          fill="none"
          stroke={scroll >= steps[5] ? "#FFF" : "#808080"}
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
          className="dotsstro6"
        ></path>
      </g>
      <g className="dots-nav-7 cursor-pointer" onClick={() => { handleClick(steps[6]) }}>
        <path
          fill={scroll >= steps[6] ? "#0092FF" : "#808080"}
          d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
          className="dotsst dotsfill7"
        ></path>
        <path
          fill="none"
          stroke={scroll >= steps[6] ? "#FFF" : "#808080"}
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
          className="dotsstro7"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;