import styles from "./EmiratesAirlinesPoliciesContai.module.css";

const EmiratesAirlinesPoliciesContai = () => {
  return (
    <div className={styles.emiratesAirlinesPoliciesParent}>
      <b className={styles.emiratesAirlinesPolicies}>
        Emirates Airlines Policies
      </b>
      <div className={styles.frameParent}>
        <div className={styles.ionstopwatchParent}>
          <img
            className={styles.ionstopwatchIcon}
            alt=""
            src="/ionstopwatch.png"
          />
          <div className={styles.preFlightCleaningInstallat}>
            Pre-flight cleaning, installation of cabin HEPA filters.
          </div>
        </div>
        <div className={styles.ionstopwatchGroup}>
          <img
            className={styles.ionstopwatchIcon}
            alt=""
            src="/ionstopwatch.png"
          />
          <div className={styles.preFlightHealthScreening}>
            Pre-flight health screening questions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiratesAirlinesPoliciesContai;
