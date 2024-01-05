import React from 'react'
import classes from './registerevent.module.css'
import BackComponent from '../constants/BackComponent'
import { useLocation } from 'react-router-dom'
import SocialShare from '../constants/SocialShare'
import EventRegistration from '../eventRegistration/EventRegistration'
import calender from '../../components/assets/images/calendar.svg'
import keyboard from '../../components/assets/images/keyboard-open.svg'
import clock from '../../components/assets/images/clock.svg'
import { Virtual } from '../styles'
export default function RegisterEvent() {
    const location = useLocation()
    console.log(location.state.blog.id)
    return (
        <>
            <div className={classes.main}>
                <div style={{ margin: '20px 0' }}>
                    <BackComponent />
                </div>
                <div className={classes.content}>


                    <h1>
                        Workshop on Client Satisfaction & Time Management
                    </h1>
                </div>
                <div className={classes.mainContent}>
                    <div className={classes.contentBorder}>
                        <div className={classes.icon}>
                            <div className={classes.iconContent}>
                                <img src={keyboard} alt="" />
                                <span>Date</span>
                            </div>
                            {
                                <Virtual>
                                    {location.state.blog.mode}
                                </Virtual>
                            }
                        </div>
                        <div className={classes.icon}>
                            <div className={classes.iconContent}>
                                <img src={calender} alt="" />
                                <span>Date</span>
                            </div>
                            <p>{location.state.blog.date}</p>
                        </div>
                        <div className={classes.icon}>
                            <div className={classes.iconContent}>
                                <img src={clock} alt="" />
                                <span>Time</span>
                            </div>
                            <p>{location.state.blog.timestamp}</p>
                        </div>
                    </div>
                </div>
                <SocialShare />
                <EventRegistration />
            </div>
        </>
    )
}
