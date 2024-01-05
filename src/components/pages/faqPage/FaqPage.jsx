import React, { useState } from 'react'
import classes from './faqpage.module.css'
import searchBtn from '../../assets/images/search-normal.svg'
import { accordion } from '../../constants/FaqQuestion'
import SocialShare from '../../constants/SocialShare'
export default function FaqPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [click, setClicked] = useState(false)
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
                <div className={classes.hero}>
                    <div className={classes.container}>
                        <p>FAQS</p>
                        <h1>Hi, how can we <span>help?</span></h1>  
                        <p>If you a have question that hasn’t been answered or need assistance, please do not hesitate to contact our team</p>
                        <form className={classes.inputContainer}>
                            <div className={classes.imgContainer}>
                                <img src={searchBtn} alt="" />
                            </div>
                            <input onChange={event => (setSearchTerm(event.target.value))}
                                type="text" placeholder='Search' />
                        </form>
                    </div>
                </div>
                <div className={classes.faq1}>
                    <h1>Frequently Asked Questions</h1>
                    <div className={classes.accordions}>
                        {
                            accordion.filter((val) => {
                                if (searchTerm == '') {
                                    return val
                                } else if (val.question.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val
                                }
                            }).map((item, idx) => (
                                <div className={classes.card} onClick={() => toggleFaq(idx)}>
                                    <div className={classes.faq}>
                                        <h2>{item.question}</h2>
                                        {click === idx ? <p>{item.answer}</p> : null}
                                    </div>
                                    <div className={classes.faqImg}>
                                        {click === idx ? <img src={item.plus} alt="" /> : <img src={item.minus} alt="" />}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
            <div className={classes.greenBg}>
                <div className={classes.faqMail}>
                    <p>STILL HAVE A QUESTION?</p>
                    <h1>
                        <span>Still have a question?</span> if you a have question that hasn’t been answered or need assistance, please do not hesitate to contact us by email
                        <br />
                        <span className={classes.green}>help@DuwittHub.com</span>

                    </h1>
                    <SocialShare />
                </div>
            </div>
        </>
    )
}
