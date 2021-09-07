import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';
import cvsvg from '../Images/cv.svg'

const Background3 = () => {
    return (
        <>
            <Link to='/cv'>
                <div className='wallsProjects'>
                    <div className='cvFont'>
                        <img className='frontpageSvg' src={cvsvg} alt=''></img>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Background3

