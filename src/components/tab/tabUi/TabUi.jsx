import React, { useState } from 'react'
import classes from './tabui.module.css'
import TabContent from '../tabContent/TabContent'
import { Tab } from '../../constants/Tab'

export default function TabUi() {
    const [toggle, setToggle] = useState('1')
    const handleClick = (e) => {
        setToggle(e.target.id)
    }
    return (
        <>
            <div className={classes.main}>
                <div className={classes.container}>
                    <div className={classes.tabContent}>
                        <h1>The Basics</h1>
                        <p>Get up to speed on all things on crypto, blockchain technology, and trading with Duwitt HUB</p>
                    </div>
                    <div className={classes.tabs}>
                        {
                            Tab.map((item, index) => {
                                return (
                                    <button
                                        onClick={handleClick}
                                        disabled={toggle === `${item.id}`}
                                        id={item.id}
                                        key={index}
                                        className={toggle === `${item.id}` ? classes.activeBtn : classes.notActive}>
                                        {item.item}
                                    </button>
                                )
                            })
                        }

                    </div>
            
                </div>
                
            </div>
            <div className={classes.content}>
                 {
                        Tab.map((item, idx) => (
                            <div key={idx}>
                                {toggle === `${item.id}` &&
                                    <div className={classes.mainContent}>
                                        {item.Component}
                                    </div>

                                }
                            </div>
                        ))
                    }
                 </div>
        </>
    )
}
