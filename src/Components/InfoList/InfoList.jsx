import React from 'react'
import { Grid } from '@material-ui/core'
import './styles.css'
import javaScriptsvg from '../../Images/jsSvg.svg'
import htmlsvg from '../../Images/htmlSvg.svg'
import csssvg from '../../Images/cssSvg.svg'
import reactsvg from '../../Images/reactSvg.svg'
import nextsvg from '../../Images/nextSvg.svg'
import gitsvg from '../../Images/gitsvg.svg'
import musvg from '../../Images/muSvg.svg'
import vssvg from '../../Images/vsSvg.svg'
import reduxsvg from '../../Images/reduxSvg.svg'

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
                        <img className='svg' src={musvg} alt=''></img>
                    </Grid>
                    <Grid item xs={4} className='gridItem' >
                        <img className='svg' src={vssvg} alt=''></img>
                    </Grid>
                    <Grid item xs={4} className='gridItem' >
                        <img className='svg' src={reduxsvg} alt=''></img>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default InfoList
