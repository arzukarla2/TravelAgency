import styles from "./RatingFormContainer.module.css";

const RatingFormContainer = ({ itemCode }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.ratingParent}>
        <div className={styles.rating}>Rating</div>
        <img className={styles.chevronDownIcon} alt="" src={itemCode} />
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <div className={styles.buttonWrapper}>
            <div className={styles.button1}>0+</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonWrapper}>
            <div className={styles.button1}>1+</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonWrapper}>
            <div className={styles.button1}>2+</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonWrapper}>
            <div className={styles.button1}>3+</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonWrapper}>
            <div className={styles.button1}>4+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingFormContainer;
