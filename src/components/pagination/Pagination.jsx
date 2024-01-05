import React, { useContext } from 'react'
import { UserContentApi } from '../contextApi/ContextApi'
import classes from './pagination.module.css'
export default function Pagination({handleClick, buttonNumber,activePage}) {
  
    return (
        <>
            <div className={classes.Pagination}>
                {
                    buttonNumber.map((btn) => {
                        return (
                            <button key={btn} className={btn === activePage ? classes.active : classes.disable} onClick={() => handleClick(btn)}>{btn}</button>
                        )
                    })
                }
            </div>
        </>
    )
}
