import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import './styles.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LinearProgress from '@material-ui/core/LinearProgress';

var data = [{
    number: '1',
    img: 'http://www.scenesarasota.com/magazine/wp-content/uploads/2018/06/beautiful-caribbean-beach-high-definition-wallpaper-for-desktop-background-images-free-stock-photos-desktop-images-for-apple-iphone-wallpaper-2880x1800-768x480.jpg'
},
{
    number: '2',
    img: 'https://live.staticflickr.com/4261/34649555303_2724b873a9_b.jpg'
},
{
    number: '3',
    img: 'https://www.desktopbackground.org/download/o/2013/08/24/627913_beach-wallpaper-hd-download-high-resolution-images-free-stock_2560x1440_h.jpg'
},
{
    number: '4',
    img: 'https://images.unsplash.com/photo-1508020268086-b96cf4f4bb2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
}]



const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0)

    const nextIndex = () => {
        setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1)
        setProgress(progress === 100 ? 0 : progress + Math.round(1 / (data.length - 1) * 100) + 1 / 3)
    }
    const previousIndex = () => {
        setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1)
        setProgress(Math.round(progress) === 0 ? 100 : progress - Math.round(1 / (data.length - 1) * 100) - 1 / 3)
    }

    return (
        <>
            <div className='outline'>
                <div className='slider'>
                    <ArrowBackIosIcon
                        onClick={previousIndex}
                        style={{ position: 'absolute', left: '7%', zIndex: '10' }}
                    />

                    <ArrowBackIosIcon
                        onClick={nextIndex}
                        style={{ position: 'absolute', right: '7%', transform: 'rotate(180deg)', zIndex: '10' }}
                    />
                    {data.map((element, index) => {
                        return (
                            <>
                                <div className={currentIndex === index ? 'containerSlider' : 'containerSlider2'}>
                                    {currentIndex === index && <Paper
                                        elevation={5}
                                        className='paper'
                                    >
                                        <img src={element.img} alt='dv' style={{ height: '100%', width: '100%' }}></img>
                                    </Paper>}
                                </div>
                            </>
                        )
                    })}
                    <LinearProgress
                        className='sliderProgress'
                        variant='determinate'
                        value={progress}
                        color='primary'
                    />


                </div>
            </div>
        </>
    );
}

export default Slider