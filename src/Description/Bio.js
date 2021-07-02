import React, { useState } from 'react'
import './styles.css'
import mypic from '../Images/mypic.png'
import { Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    paperLittle: {
        height: '70%',
        width: '70%',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    paperFront: {
        height: '100%',
        width: '100%',
        display: 'flex',
        borderRadius: '20px',
        position: 'absolute',
        cursor: 'pointer'
    },
    paperBack: {
        height: '100%',
        width: '100%',
        display: 'flex',
        borderRadius: '20px',
        position: 'absolute',
        transform: 'rotateY(180deg)',
        pointerEvents: 'none',
    },
})

const Bio = () => {

    const classes = useStyles()

    const [rotated, setRotated] = useState(false)

    const changeRotated = () => {
        setRotated(prevRotated => !prevRotated)
    }

    return (
        <>
            <div className='bio'>
                <div className='left'>
                    <div className={rotated ? 'containerAnime' : 'container'}>
                        <Paper className={classes.paperFront} elevation={5} onClick={changeRotated}>
                            <div className='infoPaperLeft'>
                                <div className='infoPaperLeftTop'>
                                    <Paper className={classes.paperLittle} elevation={10}>
                                        <img id='bioimg' src={mypic} alt='' />
                                    </Paper>
                                </div>

                                <div className='infoPaperLeftBottom'>

                                </div>
                            </div>

                            <div className='infoPaperRight'>

                            </div>
                        </Paper>

                        <Paper className={classes.paperBack} elevation={5} onClick={changeRotated}>
                            <div className='infoPaperBack'>
                                
                            </div>
                        </Paper>
                    </div>
                </div>

                <div className='right'>
                    <div className='textContainer'>
                        <h2>Hey!</h2>
                        <h4>My name is</h4>
                        <h1>Daniele Vaccari</h1>
                        <h3>Check the projects below</h3>
                        <h4>danivaccari00@gmail.com</h4>
                        <h4>+358451764838</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bio
