import styles from "./CardContainer.module.css";

const CardContainer = ({
  locationCode,
  locationDescription,
  imageDimensions,
  locationImageAltText,
  imageDimensionsAltText,
  locationName,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleWrapper}>
          <img className={styles.frameChild} alt="" src={locationCode} />
        </div>
        <div className={styles.istanbulTurkeyParent}>
          <div className={styles.istanbulTurkey}>{locationDescription}</div>
          <div className={styles.flightsParent}>
            <div className={styles.flights}>Flights</div>
            <div className={styles.flights}>•</div>
            <div className={styles.flights}>Hotels</div>
            <div className={styles.flights}>•</div>
            <div className={styles.flights}>Resorts</div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleWrapper}>
          <img className={styles.frameChild} alt="" src={imageDimensions} />
        </div>
        <div className={styles.istanbulTurkeyParent}>
          <div className={styles.istanbulTurkey}>{locationImageAltText}</div>
          <div className={styles.flightsParent}>
            <div className={styles.flights}>Flights</div>
            <div className={styles.flights}>•</div>
            <div className={styles.flights}>Hotels</div>
            <div className={styles.flights}>•</div>
            <div className={styles.flights}>Resorts</div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleWrapper}>
          <img
            className={styles.frameChild}
            alt=""
            src={imageDimensionsAltText}
          />
        </div>
        <div className={styles.istanbulTurkeyParent}>
          <div className={styles.istanbulTurkey}>{locationName}</div>
          <div className={styles.flightsParent}>
            <div className={styles.flights}>Flights</div>
            <div className={styles.flights}>•</div>
            <div className={styles.flights}>Hotels</div>
            <div className={styles.flights}>•</div>
            <div className={styles.flights}>Resorts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
