
import './styles.css'

const Background1 = ({ changeHovered1, hovered1 }) => {

    return (
        <>
            <a onMouseOver={changeHovered1} onMouseOut={changeHovered1} href='https://Danielevaccari.github.io/conference'>
                <div className={hovered1 ? 'walls2' : 'wallsProjects'}>
                    <div className='inside'>
                        CSS
                    </div>
                </div>
            </a>
        </>
    )
}

export default Background1