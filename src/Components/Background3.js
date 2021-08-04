import React from 'react'

const Background3 = ({ hovered3, changeHovered3 }) => {
    return (
        <>
            <div onMouseOver={changeHovered3} onMouseOut={changeHovered3} href='/#'>
                <div className={hovered3 ? 'walls2' : 'wallsProjects'}>
                    <div className='cvFont'>
                        CV
                    </div>
                </div>
            </div>
        </>
    )
}

export default Background3

