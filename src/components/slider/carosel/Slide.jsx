import React, { useState } from 'react'
import { Data } from '../../../constants/Carousel'
import Carosel from './Carousel'
import classes from './slide.module.css'
import { GreenBg } from '../../styles'
export default function Slide() {
    const [slider, setSlider] = useState(0)
    const Prevslide = () => {
        setSlider(slider === 0 ? Data.length - 1 : slider - 1)

    }
    const nextSlide = () => {
        setSlider(slider === Data.length - 1 ? 0 : slider + 1)
    }
    return (
        <>
            {
                <GreenBg className={classes.caroselContainer}>
                    <div className={classes.main}>
                        <div className={classes.info}>
                            <p>What Users say</p>
                            <div className={classes.indicators}>
                                {
                                    Data.map((_, idx) => {
                                        return (
                                            <button onClick={() => setSlider(idx)} className={`${slider === idx ? classes.indicator
                                                : classes.notActive} && ${classes.indicator}`} key={idx}>
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={classes.slider}>
                            {/* <button onClick={nextSlide}>+</button>
                                 <button onClick={Prevslide}>-</button> */}
                            {Data.map((items, idx) => {
                                return (
                                    <Carosel slider={slider} {...items} idx={idx} />
                                )
                            })}

                        </div>
                    </div>
                </GreenBg>
            }
        </>
    )
}

