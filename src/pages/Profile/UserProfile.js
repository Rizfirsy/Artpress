import { Fragment } from "react";
import Button from "../../components/Button";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <Fragment>
      <div className={styles.profilePicture}>
        <img src="" alt="profile" />
        <Button text="Edit Profile" />
      </div>
    </Fragment>
  );
};

export default UserProfile;
