import React from 'react'
import './styles.css'
import { makeStyles } from '@material-ui/core'
import mypic from '../Images/mypic.png'

const useStyles = makeStyles({
    bioimage: {
        backgroundImage: '/Users/vaccari/cv/src/Images/IMG_2533-removebg-preview.png'
    }
})

const Bio = () => {

    const classes = useStyles()

    return (
        <>
            <div className='bio'>
                <div className='left'>
                    <div className='imgContainer'>
                        <img id='bioimg' src={mypic} alt='' />
                    </div>
                </div>

                <div className='right'>
                    <h2>Hey</h2>
                    <h2>My name is</h2>
                    <h1>Daniele Vaccari</h1>
                    <h3>Check the projects below !</h3>
                    <h4>danivaccari00@gmail.com</h4>
                    <h4>+358451764838</h4>
                </div>
            </div>
        </>
    )
}

export default Bio
