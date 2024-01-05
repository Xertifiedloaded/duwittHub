import React from 'react';
import classes from './community.module.css';
import tutor from '../assets/images/tutor.svg';
import Mouse from '../mouse/Mouse';
import courses from '../assets/images/courses.svg';
import community from '../assets/images/community.svg';
import Active from '../active/Active';
export default function Community() {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.flexBox}>
          <div className={classes.cards}>
            <Active />
          </div>
          <div className={classes.community}>
            <img src={tutor} alt="" />
            <div className={classes.course}>
              <img src={courses} alt="" />
            </div>
            <img src={community} alt="" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Mouse />
          </div>
        </div>
      </div>
    </>
  );
}
