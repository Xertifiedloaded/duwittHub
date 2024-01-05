import classes from './access.module.css';
import { Button } from '../styles';
export default function Access() {
  return (
    <>
      <div className={classes.main}>
        <div>
          <div className={classes.grid}>
            <h3>Ready to Get Access to Duwitt Hub</h3>
            <small>Create your account and Boost your Career.</small>
            <div className={classes.accessBtn}>
              {<Button>Get started</Button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
