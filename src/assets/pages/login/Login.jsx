
import styles from './login.module.css'
import { login } from './login_';
import register from "/photos/register.svg"
import log from "/photos/log.svg"

export default function Login() {
return (
  <> 
    <div className={styles.container} onLoad={login}>
      <div className={styles['forms-container']}>
        <div className={styles['signin-signup']}>
          <form action="#" className={styles['sign-in-form']}>
            <h2 className={styles.title}>Sign in</h2>
            <div className={styles['input-field']}>
              <i className={styles['fas', 'styles.fa-user']}></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles['input-field']}>
              <i className={styles['fas', "fa-lock"]}></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className={styles['btn', "solid"]} />
            <p className={styles['social-text']}>Or Sign in with social platforms</p>
            <div className={styles['social-media']}>
              <a href="#" className={styles['social-icon']}>
                <i className={styles['fab', "fa-facebook-f"]}></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className={styles['fab', "fa-twitter"]}></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className={styles['fab', "fa-google"]}></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className={styles['fab', "fa-linkedin-in"]}></i>
              </a>
            </div>
          </form>
          <form action="#" className={styles['sign-up-form']}>
            <h2 className={styles.title}>Sign up</h2>
            <div className={styles['input-field']}>
              <i className={styles['fas', "fa-user"]}></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles['input-field']}>
              <i className={styles['fas', 'fa-envelope']}></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles['input-field']}>
              <i className={styles["fas", "fa-lock"]}></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className={styles.btn} value="Sign up" />
            <p className={styles['social-text']}>Or Sign up with social platforms</p>
            <div className={styles['social-media']}>
              <a href="#" className={styles['social-icon']}>
                <i className={styles['fab', 'fa-facebook-f']}></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className={styles['fab', "fa-twitter"]}></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className={styles['fab', "fa-google"]}></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className={styles['fab', 'fa-linkedin-in']}></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className={styles['panels-container']}>
        <div className={styles['panel', 'left-panel']}>
          <div className={styles.content}>
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className={styles['btn', 'transparent']} id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={log} className={styles.image} alt="" />
        </div>
        <div className={styles['panel', "right-panel"]}>
          <div className={styles.content}>
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className={styles['btn', 'transparent']} id="sign-in-btn">
              Sign in
            </button>
          </div>
          {/* <img src="img/register.svg" className={styles.image" alt="" /> */}
          <img src={register} className={styles.image} alt="" />
        </div>
      </div>
    </div>
  </>
);

}
  