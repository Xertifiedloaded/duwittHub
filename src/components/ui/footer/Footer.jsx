import React, { useContext } from "react";
import classes from "./footer.module.css";
import Footericon from "../../assets/images/duh.svg";
import { Link } from "react-router-dom";

import { arrayOfArrayOfObjects } from "../../constants/Nav";
import { UserContentApi } from "../../contextApi/ContextApi";
export default function Footer() {
  const { currentYear } = useContext(UserContentApi);
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.main}>
          <div className={classes.section}>
            <div className={classes.items}>
              {arrayOfArrayOfObjects.map((array, idx) => (
                <ul key={idx} className={classes.array}>
                  {array.map((array, index) => {
                    return (
                      <div className={classes.width}>
                        <div className={classes.icon}>
                           <img src={array.logo} alt="" />
                          <li>{array.content}</li>
                        </div>
                        <div className={classes.list}>
                          <h2>{array.heading}</h2>
                          <li>{array.name}</li>
                          <li>{array.community}</li>
                          <li>{array.blog}</li>
                          <li>{array.events}</li>
                          <li>{array.faq}</li>
                        </div>
                        <div className={classes.flex}>
                          <div className={classes.imgCont}>
                            <img src={array.Facebook} alt="" />
                          </div>
                          <div className={classes.imgCont}>
                            <img src={array.Twitter} alt="" />
                          </div>
                          <div className={classes.imgCont}>
                            <img src={array.Insta} alt="" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </ul>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <p className={classes.year}>
          {`© ${currentYear}`} Duwitt Academy. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
