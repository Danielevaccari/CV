import React, { useState } from 'react'
import './styles.css'
import mypic from '../Images/mypic.png'
import { Paper, makeStyles, Typography } from '@material-ui/core'


const useStyles = makeStyles({
    paperLittle: {
        height: '70%',
        width: '70%',
        borderRadius: '7px',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    paperLittle2: {
        height: '70%',
        width: '70%',
        borderRadius: '7px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF8DC'
    },
    paperFront: {
        height: '100%',
        width: '100%',
        display: 'flex',
        borderRadius: '20px',
        position: 'absolute',
        cursor: 'pointer',
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
    typoId: {
        height: '86%',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '12px',
        fontSize: '50%',
        fontWeight:'bold',
        fontFamily: 'Courier New',

    }
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
                                    <Paper className={classes.paperLittle} elevation={4}>
                                        <img id='bioimg' src={mypic} alt='' />
                                    </Paper>
                                </div>

                                <div className='infoPaperLeftBottom'>
                                    <Paper className={classes.paperLittle2}>
                                        √
                                    </Paper>
                                </div>
                            </div>

                            <div className='infoPaperRight'>
                                <Paper elevation={4} className={classes.typoId} style={{ backgroundColor: '#FFF8DC' }}>
                                    - Male <br /> - 20 v
                                </Paper>
                            </div>
                        </Paper>

                        <Paper className={classes.paperBack} elevation={5} onClick={changeRotated}>
                            <div className='infoPaperBack'>
                                <Typography className={classes.typoId}>
                                    <span>
                                        danivaccari00@gmail.com
                                    </span>
                                    <br />
                                    <span>
                                        +358451764838
                                    </span>
                                </Typography>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bio
