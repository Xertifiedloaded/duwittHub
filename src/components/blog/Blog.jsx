import React from 'react'
import { Box, Generalwidth } from '../styles'
import coin from '../../components/assets/images/coin.svg'
import classes from './blog.module.css'
export default function Blog() {
    return (
        <>
            {
                <Generalwidth className={classes.main}>
                    <div className={classes.content}>
                        <h2>
                            Read our blogs
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis.
                        </p>

                    </div>
                    <div className={classes.boxContainer}>
                        <div className={classes.box}>
                            <div className={classes.imgContainer}>
                                <img src={coin} alt="" />
                            </div>
                            <div className={classes.boxContent}>
                                <p>April 30, 2020</p>
                                <div className={classes.BlogInfo}>
                                    <h3>How to collaborate with companies</h3>
                                    <p className={classes.Blogcontent}>LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis.</p>
                                    <p className={classes.more}>Read More</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.imgContainer}>
                                <img src={coin} alt="" />
                            </div>
                            <div className={classes.boxContent}>
                                <p>April 30, 2020</p>
                                <div className={classes.BlogInfo}>
                                    <h3>About social media advertising</h3>
                                    <p className={classes.Blogcontent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis.</p>
                                    <p className={classes.more} >Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Generalwidth>
            }
        </>
    )
}
