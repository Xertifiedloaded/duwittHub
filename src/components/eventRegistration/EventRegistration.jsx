import React from 'react'
import classes from './registerEvent.module.css'
export default function EventRegistration() {
    return (
        <>
            <div className={classes.main}>
                <p>Register for this  Event</p>
                <form action="" className={classes.form}>
                    <div className={classes.formContainer}>
                        <div className={classes.inputContainer}>
                            <label>first Name</label>
                            <input type="text" placeholder='Enter your First Name' />
                        </div>
                        <div className={classes.inputContainer}>
                            <label>Last Name</label>
                            <input type="text" placeholder=' Enter your Last Name' />
                        </div>
                        <div className={classes.inputContainer}>
                            <label>Email Address</label>
                            <input type="text" placeholder='Email Address' />
                        </div>
                        <div className={classes.inputContainer}>
                            <label>Phone Number </label>
                            <div className={classes.phone}>
                                <select className={classes.select} name="" id="">
                                    <option value="">
                                        <p>&#x1F1F3;&#x1F1EC;+234</p>
                                    </option>
                                </select>
                                <input className={classes.phoneInput} type="text" placeholder='8025557578' />
                            </div>
                        </div>
                        <div className={classes.inputContainer}>
                            <label>where did you hear about this event?</label>
                            <select name="" id="">
                                <option value="">LinkedIn</option>
                                <option value="">Facebook</option>
                                <option value="">WhatsApp</option>
                            </select>
                        </div>
                        <div className={classes.inputContainer}>
                            <label>What are you hoping to learn about?</label>
                            <input type="text" placeholder='Type something........' />
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: '10px' }}>
                        <input type="checkbox" />
                        <span className={classes.span} style={{ fontWeight: '300', fontSize: '14px' }}>
                            I would like to recieve emails about future  events
                        </span>
                    </div>
                    <div className={classes.SubmitBtn}>
                        <button type='button'>
                            Register
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}
