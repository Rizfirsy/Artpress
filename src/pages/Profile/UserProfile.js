import { NavLink, Route } from "react-router-dom";

import Button from "../../components/button/Button";
import styles from "./UserProfile.module.css";
import ProfileImage from "../../images/profile.jpg";
import PurchasedItem from "./PurchasedItem";
import Wishlist from "./Wishlist";
import { Switch } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className={styles.profilePage}>
      <section className={styles.userProfile}>
        <img
          className={styles.ProfileImage}
          src={ProfileImage}
          alt="profile"
          width={300}
        />
        <Button text="Edit Profile" />
        <div className={styles.profileNavigation}>
          <ul>
            <li>
              <NavLink
                activeClassName={styles.active}
                className={styles.purchased}
                to="/my-profile/purchased-item"
              >
                Purchased
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={styles.active}
                className={styles.wishlist}
                to="/my-profile/wishlist"
              >
                Wishlist
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <hr className={styles.lineDivider}></hr>
      <section>
        <Switch>
          <Route path="/my-profile/purchased-item">
            <PurchasedItem />
          </Route>
          <Route path="/my-profile/wishlist">
            <Wishlist />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default UserProfile;
