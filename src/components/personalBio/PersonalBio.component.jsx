import React, { useState } from 'react';
import mypic from '../../images/mypic.png';

const Bio = () => {
  const [rotated, setRotated] = useState(false);

  const rotate = () => {
    setRotated((prevRotated) => !prevRotated);
  };

  return (
    <>
      <section className='personal-bio-wrapper'>
        <div className='personal-bio-left'>
          <div className={'personal-bio-flipper-container'}
            style={{ transform: rotated ? 'rotateY(180deg)' : '' }}
          >
            <div
              className='personal-bio-flipper-front'
              onClick={rotate}>
              <img id='bioimg' src={mypic} alt='' />
            </div>

            <div
              className='personal-bio-flipper-back'
              elevation={5}
              onClick={rotate}
            >

            </div>
          </div>
        </div>

        <div className='personal-bio-right'>
          <div className='personal-bio-right-description'>
            <h4>portfolio</h4>
            <h1>Daniele Vaccari</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
