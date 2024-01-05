import React from "react";
import classes from "./members.module.css";
import { BlogData } from "../constants/Members";
export default function Members() {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.content}>
          <p>EXPLORE OUR AMAZING HUB</p>
          <h1>We are providing suitable features for our MEMBRS.</h1>
          <p>
            Read our awesome feature that is absolutely suit for you. Explore
            the feature and know the best.
          </p>
        </div>
        <div className={classes.members}>
          {BlogData.map((items) => {
            return <MembersCard {...items} item={items} />;
          })}
        </div>
      </div>
    </>
  );
}
export const MembersCard = ({
  icon,
  background,
  arrow,
  heading,
  content,
  navigation,
}) => {
  return (
    <div className={classes.mainMembers}>
      <div
        className={classes.imageContainer}
        style={{ backgroundColor: background }}
      >
        <img src={icon} alt="growth" />
      </div>
      <div className={classes.cardContent}>
        <h3>{heading}</h3>
        <p className={classes.newContent}>{content}</p>
        <div className={classes.navigation}>
          <span>{navigation}</span>
          <span>
            <img src={arrow} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};
