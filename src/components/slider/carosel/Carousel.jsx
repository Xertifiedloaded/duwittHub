import React from 'react'
import classes from './carousel.module.css'
export default function Carosel({ icon, text, Name, Role, picture, slider, idx }) {
  return (
    <>
      {slider === idx ? <div className={`${classes.main}`}>
        <div className={classes.slide}>
          <img src={icon} alt="" />
          <p className={classes.text}>{text}</p>
          <div className={classes.information}>
            <div className={classes.personalImg}>
              <img src={picture} alt="" />
            </div>
            <div className={classes.personalInfo}>
              <p>{Name}</p>
              <p>{Role}</p>
            </div>
          </div>
        </div>
      </div> : null}
    </>
  )
}
