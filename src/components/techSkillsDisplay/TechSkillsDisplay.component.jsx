import React from 'react';
import javaScriptsvg from '../../images/jsSvg.svg';
import htmlsvg from '../../images/htmlSvg.svg';
import csssvg from '../../images/cssSvg.svg';
import reactsvg from '../../images/reactSvg.svg';
import gitsvg from '../../images/gitsvg.svg';
import reduxsvg from '../../images/reduxSvg.svg';
import cypresssvg from '../../images/cypress.svg';
import jestsvg from '../../images/jest.svg';

const InfoList = () => {
  return (
    <section className='tech-skills-display-wrapper'>
      <div className='tech-skills-display-container'>


        <h1 className='tech-skills-display-container-header'>
          My skills
        </h1>

        <div className='tech-skills-display-top'>
          <img
            className='tech-skills-display-top-img'
            src={javaScriptsvg} alt=''>
          </img>
          <img
            className='tech-skills-display-top-img'
            src={reactsvg} alt=''>
          </img>
          <img
            className='tech-skills-display-top-img'
            src={htmlsvg} alt=''>
          </img>
          <img
            className='tech-skills-display-top-img'
            src={csssvg} alt=''>
          </img>
        </div>
        <div className='tech-skills-display-bottom'>
          <img
            className='tech-skills-display-bottom-img'
            src={gitsvg} alt=''
          >
          </img>
          <img
            className='tech-skills-display-bottom-img'
            src={reduxsvg} alt=''>
          </img>
          <img
            className='tech-skills-display-bottom-img'
            src={cypresssvg} alt=''>
          </img>
          <img
            className='tech-skills-display-bottom-img'
            src={jestsvg} alt=''>
          </img>
        </div>
      </div>
    </section >
  );
};

export default InfoList;
