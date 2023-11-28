import styles from "./ContainerForm2.module.css";

const ContainerForm2 = ({ iconCode, iconTextCode }) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.checkboxParent}>
            <img className={styles.checkboxIcon} alt="" src={iconCode} />
            <div className={styles.frameContainer}>
              <div className={styles.pmParent}>
                <div className={styles.pm}>12:00 pm</div>
                <div className={styles.pm}>-</div>
                <div className={styles.pm}>01:28 pm</div>
              </div>
              <div className={styles.emirates}>Emirates</div>
            </div>
          </div>
          <div className={styles.nonStop}>non stop</div>
          <div className={styles.frameContainer}>
            <div className={styles.h28m}>2h 28m</div>
            <div className={styles.emirates}>EWR-BNA</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.checkboxParent}>
            <img className={styles.checkboxIcon} alt="" src={iconTextCode} />
            <div className={styles.frameContainer}>
              <div className={styles.pmParent}>
                <div className={styles.pm}>12:00 pm</div>
                <div className={styles.pm}>-</div>
                <div className={styles.pm}>01:28 pm</div>
              </div>
              <div className={styles.emirates}>Emirates</div>
            </div>
          </div>
          <div className={styles.nonStop}>non stop</div>
          <div className={styles.frameContainer}>
            <div className={styles.h28m}>2h 28m</div>
            <div className={styles.emirates}>EWR-BNA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm2;
