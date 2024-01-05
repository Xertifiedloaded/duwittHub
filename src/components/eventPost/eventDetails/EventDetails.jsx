import React from 'react'
import classes from './eventdetails.module.css'
import clock from '../../assets/images/clock.svg'
import calender from '../../assets/images/calendar.svg'
import keyboard from '../../assets/images/keyboard-open.svg'
import link from '../../assets/images/link.svg'
import { Button, Virtual } from '../../styles'
import Instagram from '../../assets/images/instagram2.svg'
import X from '../../assets/images/xsvg.svg'
import message from '../../assets/images/sms.svg'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import SocialShare from '../../constants/SocialShare'
export default function EventDetails({ blog }) {
    const Navigate = useNavigate()
    const EventRegistrationPage = () => {
        Navigate('/event/register', { state: { blog: blog } })
    }
    return (
        <>
            <div className={classes.mainDetail}>
                <p>
                    Event  Details
                </p>

                <div className={classes.main}>
                    <div className={classes.content}>
                        <div className={classes.icon}>
                            <div className={classes.iconContent}>
                                <img src={keyboard} alt="" />
                                <span>Date</span>
                            </div>
                            {
                                <Virtual>
                                    {blog.mode}
                                </Virtual>
                            }
                        </div>
                        <div className={classes.icon}>
                            <div className={classes.iconContent}>
                                <img src={calender} alt="" />
                                <span>Date</span>
                            </div>
                            <p>{blog.date}</p>
                        </div>
                        <div className={classes.icon}>
                            <div className={classes.iconContent}>
                                <img src={clock} alt="" />
                                <span>Time</span>
                            </div>
                            <p>{blog.timestamp}</p>
                        </div>
                        <div className={classes.icon}>
                            <div className={classes.iconContent}>
                                <img src={link} alt="" />
                                <span>Link</span>
                            </div>
                            <Link style={{ fontSize: '12px' }}>Https:// Duwitt-events.com/1234567890</Link>
                        </div>
                        <div className={classes.eventBtn}>
                            {
                                <Button onClick={() => EventRegistrationPage()}>
                                    <Link key={blog.id} >
                                        Register
                                    </Link>
                                </Button>
                            }
                        </div>
                    </div>
                </div>
                <div className={classes.share}>
                    <SocialShare />
                </div>
            </div>
        </>
    )
}
