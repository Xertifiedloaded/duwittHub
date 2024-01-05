import React from 'react'
import classes from './activeStudent.module.css'
export default function Active() {
    return (
        <>
            <div className={classes.activeStudent}>
                <p>our active student</p>
                <div className={classes.main}>
                    <div className={classes.circle}>

                    </div>
                    <div className={classes.circle}>

                    </div>
                    <div className={classes.circle}>

                    </div>
                    <div className={classes.circle}>

                    </div>
                    <div className={classes.circle}>
                        <small>10k</small>
                    </div>
                </div>
            </div>
        </>
    )
}
