import React, { useState } from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import './styles.scss'

const useStyles = makeStyles({
    platformPaper: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
        backgroundColor: '#ffcfdf',
        backgroundImage: 'linear-gradient(315deg, #f9cfff 20%, #b0f9f9 70%)',
        borderRadius: '20px'
    }
})

const Platform = () => {

    const classes = useStyles()

    const [x, setX] = useState(1)
    const [y, setY] = useState(1)
    const [offTop, setOffTop] = useState(0)
    const [offLeft, setOffLeft] = useState(0)
    const [height, setHeigth] = useState(null)
    const [width, setWidth] = useState(null)
    const [hovered, setHovered] = useState(false)


    const element = document.getElementById('pC')

    const platformOffset = (e) => {
        setX(e.pageX - offLeft)
        setY(e.pageY - offTop)
        setBounds()
        setContainerHeightWidth()
        setHovered(true)
        styleStringModify()
    }

    const setContainerHeightWidth = () => {
        if (element) {
            setHeigth(element.offsetHeight)
            setWidth(element.clientWidth)
        }
    }

    const setBounds = () => {
        setOffTop(document.getElementById('pC').offsetTop)
        setOffLeft(document.getElementById('pC').offsetLeft)
    }


    const styleStringModify = () => {
        const styleString = 'perspective(500px) scale(1.08) rotateX(' + -20 * ((y - height / 2) / height) + 'deg) rotateY(' + 20 * ((x - width / 2) / width) + 'deg)'
        if (hovered) {
            element.style.transform = styleString
        }
    }

    const stringReset = () => {
        element.style.transform = 'perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)'
    }
    const stringResetBack = () => {
        element.style.transform = 'perspective(500px) scale(1.08) rotateX(' + -20 * ((y - height / 2) / height) + 'deg) rotateY(' + 20 * ((x - width / 2) / width) + 'deg)'
    }


    return (
        <>
            <div id='wP' className='wallsPlatform'>
                <div
                    id='pC'
                    className='platformContainer'
                    onMouseMove={(e) => platformOffset(e)}
                    onMouseOut={() => setHovered(false)}
                    onMouseLeave={stringReset}
                    onMouseDown={stringReset}
                    onMouseUp={stringResetBack}
                >
                    <Paper elevation={10} id='PP' className={classes.platformPaper}>
                        <div className='platformFont3d'>
toimii
                        </div>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default Platform
