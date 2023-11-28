import styles from "./HotelCardContainer.module.css";

const HotelCardContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.hotelsWrapper}>
          <div className={styles.hotels}>Hotels</div>
        </div>
        <div className={styles.places}>257 places</div>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameContainer}>
        <div className={styles.hotelsWrapper}>
          <div className={styles.hotels}>Motels</div>
        </div>
        <div className={styles.places}>51 places</div>
      </div>
      <div className={styles.frameItem} />
      <div className={styles.frameDiv}>
        <div className={styles.hotelsWrapper}>
          <div className={styles.hotels}>Resorts</div>
        </div>
        <div className={styles.places}>72 places</div>
      </div>
      <div className={styles.frameInner} />
    </div>
  );
};

export default HotelCardContainer;
