import React from 'react'
import Accordion from '../accordion/Accordion'
import classes from './faq.module.css'
export default function Faq() {
    return (
        <>
            <div id='faq' className={classes.faq}>
                <h1>Frequently Asked Questions</h1>
                <Accordion />
            </div>
        </>
    )
}
