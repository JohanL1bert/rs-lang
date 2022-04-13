import React from 'react';
import { Advantages } from 'common/components/Advantages';
import { AboutUs } from 'common/components/AboutUs';
import { Intro } from 'common/components/Intro';
// import { Youtube } from 'common/components/Youtube';

export const HomePage = () => {
  return (
    <main>
      <Intro></Intro>
      <Advantages></Advantages>
      {/* <Youtube></Youtube> */}
      <AboutUs></AboutUs>
    </main>
  );
};
