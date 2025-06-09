'use client';

import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="content">
          <div className="heart-rate">
            <svg
              xmlSpace="preserve"
              viewBox="0 0 150 73"
              height="73px"
              width="150px"
              y="0px"
              x="0px"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              version={1.0}
            >
              <polyline
                points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,
          63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
                strokeMiterlimit={10}
                strokeWidth={3}
                stroke="#009B9E"
                fill="none"
              />
            </svg>
            <div className="fade-in" />
            <div className="fade-out" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #e8e8e8;
  z-index: 9999; /* Garante que o loader fique acima de tudo */
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    text-align: center;
  }

  .heart-rate {
    width: 150px;
    height: 73px;
    position: relative;
    margin: 0 auto;
  }

  .heart-rate .fade-in {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #e8e8e8;
    top: 0;
    right: 0;
    animation: heartRateIn 2.5s linear infinite;
  }

  .heart-rate .fade-out {
    position: absolute;
    width: 120%;
    height: 100%;
    background-color: #e8e8e8;
    top: 0;
    right: -120%;
    animation: heartRateOut 2.5s linear infinite;
  }

  @keyframes heartRateIn {
    0% {
      width: 100%;
    }
    50% {
      width: 0;
    }
    100% {
      width: 0;
    }
  }

  @keyframes heartRateOut {
    0% {
      left: -120%;
    }
    30% {
      left: -120%;
    }
    100% {
      left: 0;
    }
  }
`;

export default Loader;
