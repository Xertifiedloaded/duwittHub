import React, { useState } from 'react'
import classes from './event.module.css'
import { CardEvent } from '../../constants/EventCard'
import Mouse from '../../mouse/Mouse'
import EventContent from '../../eventContent/EventContent'
export default function Event() {
    const [slider, setSlider] = useState(0)

    return (
        <>
            <main className={classes.main}>
                <div className={classes.event}>
                    <div className={classes.eventHero}>
                        <p>Event</p>
                        <h1>All of the events you've been searching for.</h1>
                        <p>Looking to connect with other like-minded professionals?
                            You've come to the right place.</p>
                    </div>
                    <div className={classes.cardBox}>
                        {
                            CardEvent.map((card, idx) => {
                                return (
                                    slider === idx ? <img src={card.card} alt="" /> : null
                                )
                            })
                        }
                    </div>
                    <div className={classes.control}>
                        {
                            CardEvent.map((_, idx) => {
                                return (
                                    <button className={slider === idx ? classes.show : classes.disable} onClick={() => setSlider(idx)}></button>
                                )
                            })
                        }
                    </div>
                    <Mouse />
                </div>
                <div className={classes.eventContent}>
                    <EventContent />
                </div>
            </main>
        </>
    )
}
