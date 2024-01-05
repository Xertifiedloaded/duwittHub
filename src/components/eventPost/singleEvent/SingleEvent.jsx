import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Backarrow from '../../assets/images/backarrow.svg'
import { Event } from "../../constants/EventCard";
import classes from './singleevent.module.css'
import clock from '../../assets/images/clock.svg'
import { Virtual } from "../../styles";
import EventDetails from "../eventDetails/EventDetails";
import BackComponent from "../../constants/BackComponent";

export default function SingleEvent() {
    const [blog, setBlog] = useState(null);
    let { id } = useParams();
    console.log(id);
    useEffect(() => {
        let blog = Event.find((blog) => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog);
        }
    }, []);


    return (
        <>
            <div className={classes.main}>

                {
                    blog &&
                    <div className={classes.heroMode}>
                        <div className={classes.navigeBack}>
                            <BackComponent />
                        </div>
                        <div className={classes.hero}>
                            <div className={classes.singleEventContent}>
                                <h1>
                                    {blog.eventTitle}
                                </h1>
                            </div>
                            <div className={classes.singleEventImg}>
                                <img src={blog.eventImg} alt="" />
                            </div>
                        </div>

                        {
                            <Virtual>
                                {blog.mode}
                            </Virtual>
                        }

                        <div className={classes.EventcontentContainer}>
                            <div className={classes.EventInfo}>
                                <div className={classes.eventContent}>
                                    <p>
                                        Event  Details
                                    </p>
                                    <div className={classes.eventContentBox}>
                                        <p>{blog.content}</p>
                                    </div>
                                </div>
                                <div className={classes.eventDetails}>
                                    <EventDetails blog={blog} />
                                </div>

                            </div>
                        </div>

                    </div>

                }
            </div>

        </>
    )
}
