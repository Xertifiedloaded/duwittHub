import classes from "./tabcontent.module.css";
import mainCoin from "../../assets/images/coinwoman.svg";
import { Link } from "react-router-dom";
export default function TabContent() {
  return (
    <div className={classes.main}>
      <div className={classes.mainContent}>
        <p>Starter pack</p>
        <h1>Explore and Access Starter pack Courses </h1>
        <p>
          Start a course learn and get familiar with the crypto world today with
          a free courses on duwitt Academy{" "}
        </p>
        <Link>start now</Link>
      </div>
      <div className={classes.mainImgContainer}>
        <img src={mainCoin} alt="" />
      </div>
    </div>
  );
}
