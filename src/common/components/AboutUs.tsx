import React from 'react';
import { developerInfo } from 'common/const/developerInfo.const';
import { AboutCard } from 'common/components/AboutCard';

export const AboutUs: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__items">
            <AboutCard></AboutCard>
            <AboutCard></AboutCard>
            <AboutCard></AboutCard>
          </div>
        </div>
      </div>
    </section>
  );
};
