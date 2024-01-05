import React, { useEffect, useRef, useState } from 'react'
import { accordion } from '../constants/FaqQuestion'
import classes from './accordion.module.css'
export default function Accordion() {
    const [visible, setLimit] = useState(4)
    const [click, setClicked] = useState(false)
    const [readMore, setReadMore] = useState(false)
    const showMore = () => {
        setLimit((preValue) => preValue + 4)
    }
    const showLess = () => {
        setLimit((preValue) => preValue - 4)
    }
    const toggleFaq = idx => {
        if (click === idx) {
            return (
                setClicked(null)
            )
        }
        setClicked(idx)
    }
    return (
        <>
            <div className={classes.main}>
                {
                    accordion.slice(0, visible).map((items, idx) => (
                        <div className={classes.card} onClick={() => toggleFaq(idx)}>
                            <div className={classes.faq}>
                                <h2>{items.question}</h2>
                                {click === idx ? <p>{items.answer}</p> : null}
                            </div>
                            <div className={classes.faqImg}>
                                {click === idx ? <img src={items.plus} alt="" /> : <img src={items.minus} alt="" />}
                            </div>
                        </div>
                    ))
                }
                <div className={classes.more}>
                    <button >{visible <= 6 ? <p onClick={showMore}>show more</p> :
                    <p onClick={showLess}>show less</p>}</button>
                </div>
            </div>
        </>
    )
}
