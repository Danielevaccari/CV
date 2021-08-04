import React from 'react'

const Background6 = ({changeHovered6, hovered6}) => {
    return (
        <>
            <a style={{textDecoration: 'none'}} onMouseOver={changeHovered6} onMouseOut={changeHovered6} href='https://reaktor-next-js-express-js-preassignment.vercel.app/'>
                <div className={hovered6 ? 'walls2' : 'wallsProjects'}>
                    <div className='magicTheGathering'>
                        Magic The Gathering Rulebook
                    </div>
                </div>
            </a>
        </>
    )
}

export default Background6
