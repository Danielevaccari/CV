import React from 'react'

const Background5 = ({ hovered5, changeHovered5 }) => {
    return (
        <>
            <a onMouseOver={changeHovered5} onMouseOut={changeHovered5} href='/#'>
                <div className ={hovered5 ? 'walls2' : 'wallsProjects'}>
                    <div className='ProjectInfo'>

                    </div>
                </div>
            </a>
        </>
    )
}

export default Background5
