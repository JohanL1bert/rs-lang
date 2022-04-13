import React from 'react';
import { developerInfo } from 'common/const/developerInfo.const';
import { AboutCard } from 'common/components/AboutCard';

export const AboutUs = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__developers">
            {developerInfo.map((item) => (
              <AboutCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
