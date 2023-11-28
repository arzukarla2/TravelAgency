import styles from "./EconomyCard.module.css";

const EconomyCard = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src="/frame-186@2x.png" />
        <div className={styles.frameContainer}>
          <div className={styles.economyParent}>
            <div className={styles.economy}>{`Economy `}</div>
            <div className={styles.emiratesA380Airbus}>
              Emirates A380 Airbus
            </div>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <div className={styles.buttonWrapper}>
                <div className={styles.baseFare}>4.2</div>
              </div>
            </div>
            <div className={styles.veryGood54Container}>
              <b>Very Good</b>
              <span className={styles.reviews}> 54 reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameItem} />
      <div className={styles.veryGood54Container}>
        <span
          className={styles.reviews}
        >{`Your booking is protected by `}</span>
        <b>golobe</b>
      </div>
      <div className={styles.frameItem} />
      <div className={styles.priceDetailsParent}>
        <b className={styles.priceDetails}>Price Details</b>
        <div className={styles.baseFareParent}>
          <div className={styles.baseFare}>{`Base Fare `}</div>
          <div className={styles.div}>$400</div>
        </div>
        <div className={styles.baseFareParent}>
          <div className={styles.baseFare}>Discount</div>
          <div className={styles.div}>$400</div>
        </div>
        <div className={styles.baseFareParent}>
          <div className={styles.baseFare}>Taxes</div>
          <div className={styles.div}>$400</div>
        </div>
        <div className={styles.baseFareParent}>
          <div className={styles.baseFare}>Service Fee</div>
          <div className={styles.div}>$400</div>
        </div>
      </div>
      <div className={styles.frameItem} />
      <div className={styles.baseFareParent}>
        <div className={styles.baseFare}>{`Total `}</div>
        <div className={styles.div}>$400</div>
      </div>
    </div>
  );
};

export default EconomyCard;
