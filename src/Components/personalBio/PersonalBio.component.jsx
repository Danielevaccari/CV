/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import mypic from '../../images/mypic.png';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  paperBack: {
    height: '100%',
    width: '100%',
    display: 'flex',
    borderRadius: '20px',
    position: 'absolute',
    transform: 'rotateY(180deg)',
    pointerEvents: 'none',
  },
});

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
            <h4>page of</h4>
            <h1>Daniele Vaccari</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
