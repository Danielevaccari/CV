import React from 'react'
import './frontpageStyles.css'
import { Paper, Grid, makeStyles, Typography } from '@material-ui/core';
import Background1 from '../Components/Background1';
import Background2 from '../Components/Background2';
import Background3 from '../Components/Background3';
import Background4 from '../Components/Background4';
import Background5 from '../Components/Background5';
import Background6 from '../Components/Background6';

const useStyles = makeStyles({
    paper: {
        borderRadius: '20px',
        width: '70%'
    },
    grid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    typo: {
        fontFamily: 'Times New Roman, Times, serif',
        margin: '10%',
        fontSize: '0.6rem',
    },
    descriptionGrid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    description: {
        height: '25vh',
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '720px',
        borderRadius: '8px',
        background: 'linear-gradient(to right top, rgb(255,255,255) , rgba(255,255,255,0.5))'

    }
})


const Frontpage = () => {

    const classes = useStyles()

    const Description = () => {

        const classes = useStyles()

        return (
            <>
                <Grid className={classes.descriptionGrid} container spacing={2}>
                    <Grid item className={classes.grid} xs={12}>
                        <div className='description'>
                            <Typography className={classes.typo}>
                                E-commerce made with JSX, commerce.js and Material UI
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item className={classes.grid} xs={12}>
                        <div className='description'>
                            <Typography className={classes.typo}>
                                A rulebook made for the card game Magic the Gathering. Created in Next.js environment and uses Next.js api to fetch data.
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item className={classes.grid} xs={12}>
                        <div className='description'>
                            <Typography className={classes.typo}>
                                Cool stuff made with CSS
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item className={classes.grid} xs={12}>
                        <div className='description'>
                            <Typography className={classes.typo}>
                                Tictactoe game
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item className={classes.grid} xs={12}>
                        <div className='description'>
                            <Typography className={classes.typo}>
                                My CV
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item className={classes.grid} xs={12}>
                        <div className='description'>
                            <Typography className={classes.typo}>
                                To Do List made with Redux
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
            </>
        )
    }

    return (
        <>
            <div id='fP' className='frontpage'>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '50%', display: 'flex' }}>
                        <Description />
                    </div>
                    <div style={{ flex: '50%' }}>
                        <Grid container spacing={2}>
                            <Grid item className={classes.grid} xs={12}>
                                <Paper className={classes.paper}>
                                    <Background2 />
                                </Paper>
                            </Grid>

                            <Grid item className={classes.grid} xs={12}>
                                <Paper className={classes.paper}>
                                    <Background6 />
                                </Paper>
                            </Grid>

                            <Grid item className={classes.grid} xs={12}>
                                <Paper className={classes.paper}>
                                    <Background1 />
                                </Paper>
                            </Grid>

                            <Grid item className={classes.grid} xs={12}>
                                <Paper className={classes.paper}>
                                    <Background4 />
                                </Paper>
                            </Grid>

                            <Grid item className={classes.grid} xs={12}>
                                <Paper className={classes.paper}>
                                    <Background3 />
                                </Paper>
                            </Grid>

                            <Grid item className={classes.grid} xs={12}>
                                <Paper className={classes.paper}>
                                    <Background5 />
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frontpage
