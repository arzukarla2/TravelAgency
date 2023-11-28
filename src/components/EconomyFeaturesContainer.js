import styles from "./EconomyFeaturesContainer.module.css";

const EconomyFeaturesContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.basicEconomyFeaturesParent}>
        <b className={styles.basicEconomyFeatures}>Basic Economy Features</b>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-205.png" />
            <div className={styles.economy}>Economy</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.checkboxIcon} alt="" src="/checkbox.png" />
            <div className={styles.economy}>First Class</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.checkboxIcon} alt="" src="/checkbox.png" />
            <div className={styles.economy}>Busines Class</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <img className={styles.frameItem} alt="" src="/frame-1861@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-142@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-189@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-185@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-189@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-185@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-185@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-183@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-184@2x.png" />
      </div>
    </div>
  );
};

export default EconomyFeaturesContainer;
