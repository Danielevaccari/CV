import React from 'react'

const Background4 = ({ hovered4, changeHovered4 }) => {
    return (
        <>
            <a onMouseOver={changeHovered4} onMouseOut={changeHovered4} href='https://Danielevaccari.github.io/asylum'>
                <div className={hovered4 ? 'walls2' : 'walls'}>
                    <div className='tictactoe'>
                        XO
                    </div>
                </div>
            </a>
        </>
    )
}

export default Background4
