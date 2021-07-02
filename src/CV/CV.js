import React, { useState } from 'react'
import cv1 from '../Images/cv1.jpg'
import cv2 from '../Images/cv2.jpg'
import { Button, Paper, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    paper1: {
        height: '80vh',
        width: '70vh',
        minHeight: '400px',
        minWidth: '200px',
        backgroundImage: `url(${cv1})`,
        backgroundSize: '90%, 80%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
    },
    paper2: {
        height: '80vh',
        width: '70vh',
        minHeight: '400px',
        minWidth: '200px',
        backgroundImage: `url(${cv2})`,
        backgroundSize: '90%, 80%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
    }
})

const CV = () => {

    const classes = useStyles()

    const [pageNumber, setPageNumber] = useState(false)
    const [hovered, setHovered] = useState(false)

    return (
        <>
            <div style={{ height: '100vh',width:'100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'antiquewhite', flexDirection: 'column' }}>

                <Paper
                    onMouseOut={() => setHovered(false)}
                    onMouseOver={() => setHovered(true)}
                    elevation={hovered ? 10 : 0}
                    className={pageNumber ? classes.paper2 : classes.paper1}>

                </Paper>
                <Button component={Link} to='/' size='large'>Frontpage</Button>
                <div>
                    <Button disableRipple onClick={() => setPageNumber(false)}>←</Button>
                    <Button disableRipple onClick={() => setPageNumber(true)}>→</Button>
                </div>
            </div>
        </>
    );

}

export default CV
