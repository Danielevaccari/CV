import React, { useState } from 'react';
import cvsvg from '../../images/cv1.svg';
import cvsvg2 from '../../images/cv2.svg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const CV = () => {
  const [pageNumber, setPageNumber] = useState(false);

  return (
    <>
      <div className='cvWalls'>

        <div className='cvContainer'>
          <div className='paper'>
            {!pageNumber ? <img className='cvPdfSvg' src={cvsvg} alt=''></img> :
              ''}
            {pageNumber ? <img className='cvPdfSvg' src={cvsvg2} alt=''></img> :
              ''}

          </div>
        </div>
        <Button disableRipple component={Link} to='/' size='large'>
          Frontpage
        </Button>
        <div>
          <Button disableRipple onClick={() => setPageNumber(false)}>←</Button>
          <Button disableRipple onClick={() => setPageNumber(true)}>→</Button>
        </div>
      </div>
    </>
  );
};

export default CV;
