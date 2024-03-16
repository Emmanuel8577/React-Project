import React from 'react';
import video from "../video/video.mp4";
import { HeroContainer, HeroBg, videoBg } from "./HeroSection"; // Fixed import path

const HeroSection = () => {
  return (
    <div>
      <HeroContainer>
        <HeroBg>
          {/* Corrected attributes */}
          <videoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
