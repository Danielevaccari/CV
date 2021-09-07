import React from 'react'
import './styles.css'
import mtgsvg from '../Images/magic-book.svg'

const Background6 = () => {
    return (
        <>
            <a style={{ textDecoration: 'none' }} href='https://reaktor-next-js-express-js-preassignment.vercel.app/'>
                <div className='wallsProjects'>
                    <div className='magicTheGathering'>
                        <img className='frontpageSvg' src={mtgsvg} alt='' ></img>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Background6
