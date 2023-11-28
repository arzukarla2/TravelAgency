import styles from "./NearParkContainer.module.css";

const NearParkContainer = ({ locationDescription }) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.starsParent}>
        <img className={styles.starsIcon} alt="" src="/stars.png" />
        <div className={styles.nearPark}>{locationDescription}</div>
      </div>
    </div>
  );
};

export default NearParkContainer;
