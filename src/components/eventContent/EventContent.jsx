import React, { useState } from 'react'
import { EventBtn } from '../constants/EventCard'
import classes from './eventContent.module.css'
import EventPost from '../eventPost/EventPost'
export default function EventContent() {
    const [event, setEvent] = useState('3')
    const handleClick = (e) => {
        setEvent(e.target.id)
    }
    return (
        <>
            <div className={classes.main}>
                {
                    EventBtn.map((item, index) => (
                        <button className={event === `${item.id}` ? classes.active : classes.notActive} onClick={handleClick} disabled={event === `${item.id}`} key={index} id={item.id}>
                            {item.button}
                        </button>
                    ))
                }
            </div>
            {
                EventBtn.map((items, index) => {
                    return (
                        <div className={classes.eventDetails}>
                            {
                                event === `${items.id}` && 
                                <div>{items.content}</div>
                            }
                        </div>
                    )
                })
            }


        </>
    )
}
