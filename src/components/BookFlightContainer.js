import styles from "./BookFlightContainer.module.css";

const BookFlightContainer = ({
  actionButtonText,
  actionButtonLabel,
  bookingButtonText,
  bookingActionText,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-38@2x.png" />
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.melbourneParent}>
              <div className={styles.melbourne}>Melbourne</div>
              <div className={styles.anAmazingJourney}>An amazing journey</div>
            </div>
            <div className={styles.div}>$ 700</div>
          </div>
          <div className={styles.button}>
            <div className={styles.styleLayer}>
              <div className={styles.button1}>{actionButtonText}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-44@2x.png" />
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.melbourneParent}>
              <div className={styles.melbourne}>Paris</div>
              <div className={styles.anAmazingJourney}>A Paris Adventure</div>
            </div>
            <div className={styles.div}>$ 600</div>
          </div>
          <div className={styles.button}>
            <div className={styles.styleLayer}>
              <div className={styles.button1}>{actionButtonLabel}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-5@2x.png" />
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.melbourneParent}>
              <div className={styles.melbourne}>London</div>
              <div className={styles.anAmazingJourney}>
                London eye adventure
              </div>
            </div>
            <div className={styles.div}>$ 350</div>
          </div>
          <div className={styles.button}>
            <div className={styles.styleLayer}>
              <div className={styles.button1}>{bookingButtonText}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-6@2x.png" />
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.melbourneParent}>
              <div className={styles.melbourne}>Columbia</div>
              <div className={styles.anAmazingJourney}>Amazing streets</div>
            </div>
            <div className={styles.div}>$ 700</div>
          </div>
          <div className={styles.button}>
            <div className={styles.styleLayer}>
              <div className={styles.button1}>{bookingActionText}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFlightContainer;
