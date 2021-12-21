import React from 'react';
import { Grid } from '@material-ui/core';
import javaScriptsvg from '../../images/jsSvg.svg';
import htmlsvg from '../../images/htmlSvg.svg';
import csssvg from '../../images/cssSvg.svg';
import reactsvg from '../../images/reactSvg.svg';
import nextsvg from '../../images/nextSvg.svg';
import gitsvg from '../../images/gitsvg.svg';
import reduxsvg from '../../images/reduxSvg.svg';

const InfoList = () => {
  return (
    <div className='wallsInfoList'>
      <div className='icyContainer'>


        <div className='infoListTitle'>
          Tech used in projects
        </div>


        <Grid spacing={2} container>
          <Grid item xs={4} className='gridItem'>
            <img className='svg' src={javaScriptsvg} alt=''></img>
          </Grid>
          <Grid item xs={4} className='gridItem' >
            <img className='svg' src={htmlsvg} alt=''></img>
          </Grid>
          <Grid item xs={4} className='gridItem' >
            <img className='svg' src={gitsvg} alt=''></img>
          </Grid>
          <Grid item xs={4} className='gridItem'>
            <img className='svg' src={csssvg} alt=''></img>
          </Grid>
          <Grid item xs={4} className='gridItem' >
            <img className='svg' src={reactsvg} alt=''></img>
          </Grid>
          <Grid item xs={4} className='gridItem' >
            <img className='svg' src={nextsvg} alt=''></img>
          </Grid>
          <Grid item xs={4} className='gridItem' >
            <img className='svg' src={reduxsvg} alt=''></img>
          </Grid>
        </Grid>
      </div>
    </div >
  );
};

export default InfoList;
