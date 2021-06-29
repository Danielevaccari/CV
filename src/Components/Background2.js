import React from 'react'
import './styles.css'

const Background2 = ({ hovered2, changeHovered2 }) => {


    return (
        <>
            <a onMouseOver={changeHovered2} onMouseOut={changeHovered2}  href='https://Danielevaccari.github.io/lake'>
                <div className={hovered2 ? 'walls2' : 'walls'}>
                    <div className='real'>
                        Clothing INC™
                    </div>
                </div>
            </a>
        </>
    )
}

export default Background2