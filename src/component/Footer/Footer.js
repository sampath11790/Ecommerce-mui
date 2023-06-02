import React from "react";
import classes from "./Footer.module.css";
import {
  Facebook,
  Google,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <section className={classes.sectioncontainer}>
        <h2 className={classes.h2head}> Thank you</h2>

        <footer className={classes.Footercont}>
          {/* <div>
            <span className={classes.logo}>E com</span>
          </div> */}

          <div className={classes.row}>
            <div className={classes.col3}>
              <ul>
                <p>Office Location</p>

                <li>
                  <div>
                    Delhi
                    <br />
                    Office 150B, Behind Sana Gate Char Bhuja Tower, Station
                    Road, Delhi
                  </div>
                </li>
              </ul>
            </div>
            <div className={classes.col3}>
              <ul className={classes.footercatlinks}>
                <p>My Account</p>
                <li>Sign in</li>
                <li>View Cart</li>
                <li>MyWishlist</li>
                <li>Track My Order</li>
                <li>Help</li>
              </ul>
            </div>
            <div className={classes.col3}>
              <ul className={classes.footercatlinks}>
                <p>About</p>
                <li>About us</li>
                <li>Terms & Condition</li>
                <li>Disclaimer</li>
                <li>privacy policy</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className={classes.inputandicons}>
              <span>Stay Connected</span>
              <form>
                <input
                  type="email"
                  id="subscriber-email"
                  placeholder="Enter Email Address"
                />
                <input type="submit" value="Subscribe" id="btn-scribe" />
              </form>
              <div>
                <Facebook />
                <Twitter />
                <Google />
                <YouTube />
                <Instagram />
              </div>
              <div className={classes.copyright}>
                &copy; All Rights Reserved 2019-2020
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
