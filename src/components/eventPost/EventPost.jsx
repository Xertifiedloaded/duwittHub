import React from 'react'
import { Event } from '../constants/EventCard'
import classes from './eventPost.module.css'
import clock from '../assets/images/clock.svg'
import { Link, useParams } from 'react-router-dom'
import { Virtual } from '../styles'

export default function EventPost() {

    return (
        <>
            <div className={classes.main}>
                {
                    Event.map((events, index) => (
                        <Link key={events.id.toString()} to={`/events/${events.id}`} className={classes.event}>
                            <div className={classes.eventImgContainer}>
                                <img src={events.eventImg} alt="" />
                            </div>
                            {
                                <Virtual>
                                    {events.mode}
                                </Virtual>
                            }
                            <h1>{events.eventTitle}</h1>
                            <div className={classes.time}>
                                <img src={clock} alt="" />
                                {events.timestamp}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
