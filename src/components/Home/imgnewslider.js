import React from 'react'

import Marquee from 'react-fast-marquee';

import styled from "styled-components";
import img1 from '../../Assets/Client imgs/1.jpg';
import img2 from '../../Assets/Client imgs/2.jpg';
import img3 from '../../Assets/Client imgs/3.jpg';
import img4 from '../../Assets/Client imgs/4.jpg';
import img5 from '../../Assets/Client imgs/5.jpg';
import img6 from '../../Assets/Client imgs/6.jpg';
import img7 from '../../Assets/Client imgs/7.jpg';
import img8 from '../../Assets/Client imgs/8.jpg';
import img9 from '../../Assets/Client imgs/9.jpg';
import img10 from '../../Assets/Client imgs/10.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const imgnewslider = () => {
  /*  const row1 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
      ];
    
      const row2 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
      ];

  */
  return (<AppContainer>
    <Wrapper>
      <Text>Our Recent Students</Text>
      <Note>Our students have gotten quality project from fixco.in.</Note>
      <Marquee direction="left" speed={100} delay={2}>
      <div className="image_wrapper" >
      <LazyLoadImage alt={img1} effect="blur" src={img1} 
      // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
      height="200px"
      width="300px"
    />
      </div>
      <div className="image_wrapper">
      <LazyLoadImage alt={img2} effect="blur" src={img2} 
      // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
      height="200px"
      width="300px"
    />
      </div>
      <div className="image_wrapper">
      <LazyLoadImage alt={img3} effect="blur" src={img3} 
      // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
      height="200px"
      width="300px"
    />
      </div>
      <div className="image_wrapper">
      <LazyLoadImage alt={img4} effect="blur" src={img4} 
      // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
      height="200px"
      width="300px"
    />
      </div>
      <div>
      <LazyLoadImage alt={img5} effect="blur" src={img5} 
      // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
      height="200px"
      width="300px"
    />
      </div>
      <div className="image_wrapper">
      <LazyLoadImage alt={img6} effect="blur" src={img6} 
      // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
      height="200px"
      width="300px"
    />
      </div>
      <div className="image_wrapper">
        <LazyLoadImage alt={img7} effect="blur" src={img7} 
      // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
      height="200px"
      width="300px"
    />
      </div>
      <div className="image_wrapper">
      <LazyLoadImage alt={img8} effect="blur" src={img8} 
      // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
      height="200px"
      width="300px"
    />
      </div>
      <div className="image_wrapper">
      <LazyLoadImage alt={img9} effect="blur" src={img9} 
      // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
      height="200px"
      width="300px"
    />
      </div>
      <div className="image_wrapper">
      <LazyLoadImage alt={img10} effect="blur" src={img10} 
      // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
      height="200px"
      width="300px"
    />
      </div>
    </Marquee>
    </Wrapper>
  </AppContainer>
);
}

export default imgnewslider

const AppContainer = styled.div`
  width: 99vw;
  height: 55vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

// const Marquee = styled.div`
//   display: flex;
//   width: 1200px;
//   overflow: hidden;
//   user-select: none;

//   mask-image: linear-gradient(
//     to right,
//     hsl(0 0% 0% / 0),
//     hsl(0 0% 0% / 1) 10%,
//     hsl(0 0% 0% / 1) 90%,
//     hsl(0 0% 0% / 0)
//   );
// `;
/*
const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */