import React, { useState } from 'react'
import './frontpageStyles.css'
import { Paper, Grid, makeStyles, Typography } from '@material-ui/core';
import Background1 from '../Components/Background1';
import Background2 from '../Components/Background2';
import Background3 from '../Components/Background3';
import Background4 from '../Components/Background4';
import Background5 from '../Components/Background5';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    paper: {
        borderRadius: '20px',
        width: '70%',
    },
    grid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    typo: {
        fontFamily: 'Times New Roman, Times, serif',
        margin: '10%',
        fontSize: '2vh'
    },
    descriptionGrid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    description: {
        height: '25vh',
        width: '40vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '720px',
    }
})


const Frontpage = () => {

    const classes = useStyles()

    const [hovered1, setHovered1] = useState(false)
    const changeHovered1 = () => {
        setHovered1(prevHovered => !prevHovered)
    }

    const [hovered2, setHovered2] = useState(false)
    const changeHovered2 = () => {
        setHovered2(prevHovered => !prevHovered)
    }

    const [hovered3, setHovered3] = useState(false)
    const changeHovered3 = () => {
        setHovered3(prevHovered => !prevHovered)
    }

    const [hovered4, setHovered4] = useState(false)
    const changeHovered4 = () => {
        setHovered4(prevHovered => !prevHovered)
    }

    const [hovered5, setHovered5] = useState(false)
    const changeHovered5 = () => {
        setHovered5(prevHovered => !prevHovered)
    }


    const Description = () => {

        const classes = useStyles()

        return (
            <>
                <Grid className={classes.descriptionGrid} container spacing={2}>
                    <Grid item className={classes.grid} xs={12}>
                        <Paper elevation={3} className={classes.description}>
                            <Typography className={classes.typo}>
                                E-commerce made with JSX, commerce.js and Material UI
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item className={classes.grid} xs={12}>
                        <Paper elevation={3} className={classes.description}>
                            <Typography className={classes.typo}>
                                Cool stuff made with CSS
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item className={classes.grid} xs={12}>
                        <Paper elevation={3} className={classes.description}>
                            <Typography className={classes.typo}>
                                Tictactoe game
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item className={classes.grid} xs={12}>
                        <Paper elevation={3} className={classes.description}>
                            <Typography className={classes.typo}>
                                My CV
                            </Typography>
                        </Paper>
                    </Grid>

                    {/*<Grid item className={classes.grid} xs={12}>
                        <Paper elevation={3} className={classes.description}>
                            TBA
                        </Paper>
                    </Grid>*/}

                </Grid>
            </>
        )
    }

    return (
        <>
            <div className='frontpage'>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '50%', display: 'flex' }}>
                        <Description />
                    </div>
                    <div style={{ flex: '50%' }}>
                        <Grid container spacing={2}>
                            <Grid item className={classes.grid} xs={12}>
                                <Paper className={classes.paper}>

                                    <Background2 hovered2={hovered2} changeHovered2={changeHovered2} />
                                </Paper>
                            </Grid>

                            <Grid item className={classes.grid} xs={12}>
                                <Paper className={classes.paper}>
                                    <Background1 hovered1={hovered1} changeHovered1={changeHovered1} />
                                </Paper>
                            </Grid>

                            <Grid item className={classes.grid} xs={12}>
                                <Paper className={classes.paper}>
                                    <Background4 hovered4={hovered4} changeHovered4={changeHovered4} />
                                </Paper>
                            </Grid>

                            <Grid component={Link} to='cv' item className={classes.grid} xs={12}>
                                <Paper className={classes.paper}>
                                    <Background3 hovered3={hovered3} changeHovered3={changeHovered3} />
                                </Paper>
                            </Grid>

                            {/*<Grid item className={classes.grid} xs={12}>
                                <Paper className={classes.paper}>
                                    <Background5 hovered5={hovered5} changeHovered5={changeHovered5} />
                                </Paper>
                            </Grid>*/}
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frontpage
