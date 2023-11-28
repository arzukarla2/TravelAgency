import styles from "./CheapestCardContainer.module.css";

const CheapestCardContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.cheapestWrapper}>
          <div className={styles.cheapest}>Cheapest</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>$99</div>
          <div className={styles.div}>.</div>
          <div className={styles.div}>2h 18m</div>
        </div>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameContainer}>
        <div className={styles.cheapestWrapper}>
          <div className={styles.cheapest}>Best</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>$99</div>
          <div className={styles.div}>.</div>
          <div className={styles.div}>2h 18m</div>
        </div>
      </div>
      <div className={styles.frameItem} />
      <div className={styles.frameDiv}>
        <div className={styles.cheapestWrapper}>
          <div className={styles.cheapest}>Quickest</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>$99</div>
          <div className={styles.div}>.</div>
          <div className={styles.div}>2h 18m</div>
        </div>
      </div>
      <div className={styles.frameInner} />
      <div className={styles.menuParent}>
        <img className={styles.menuIcon} alt="" src="/menu.png" />
        <div className={styles.cheapestWrapper}>
          <div className={styles.otherSort}>Other sort</div>
        </div>
      </div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default CheapestCardContainer;
