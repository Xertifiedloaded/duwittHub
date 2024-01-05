import React from 'react'
import classes from './bloghero.module.css'
export default function BlogHero() {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.hero}>
                    <div className={classes.HeroContent}>
                        <p>OUR BLOG </p>
                        <h1>
                            Our ideas and insights on Cyptocurrency
                        </h1>
                        <p>Build skills with courses, certificates, and get online knowledge from our world-class platform.</p>
                    </div>
                    <div className={classes.shape}>
                        <div className={classes.circle}>

                        </div>
                        <div className={classes.circle}>

                        </div>
                        <div className={classes.circle}>

                        </div>
                        <div className={classes.circle}>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
