import React from 'react'

const Background3 = ({ hovered3, changeHovered3 }) => {
    return (
        <>
            <a onMouseOver={changeHovered3} onMouseOut={changeHovered3} href='/#'>
                <div className={hovered3 ? 'walls2' : 'walls'}>
                    <div className='cvFont'>
                        CV
                    </div>
                </div>
            </a>
        </>
    )
}

export default Background3

