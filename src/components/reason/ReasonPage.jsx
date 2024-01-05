import classes from './reason.module.css';
import schoolBoy from '../assets/images/school-boy.svg';
import {Hub} from '../constants/FaqQuestion'
export default function Reason() {
  return (
    <>
      <section className={classes.section}>
        <div className={classes.aim}>
          <p>REASONS FOR OUR AMAZING HUB</p>
          <h1>Why do you have to choose Duwitt HUB</h1>
          <p>
            You can benefit from their knowledge, insights, and guidance,
            ensuring you receive accurate and up-to-date information.
          </p>
        </div>
        <div className={classes.hub}>
          <div className={classes.gridItemCard}>
            {Hub.map((item, index) => {
              return (
                <div key={index} className={classes.hubMenu}>
                  <div className={classes.hubImgContainer}>
                    <img src={item.icon} alt="" />
                  </div>
                  <ul className={classes.listItemsHub}>
                    <h2>{item.title}</h2>
                    <li>{item.paragraph}</li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={classes.boy}>
            <img src={schoolBoy} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
