import { useMemo } from "react";
import styles from "./FlightsCard.module.css";

const FlightsCard = ({
  imageDimensions,
  searchResultsImageUrl,
  popularDestinationsText,
  iconImageUrl,
  actionButtonText,
  propBorderRadius,
  onShowFlightsClick,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src={imageDimensions} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} style={rectangleDivStyle} />
        <div className={styles.frameParent}>
          <div className={styles.flightsParent}>
            <b className={styles.flights}>{searchResultsImageUrl}</b>
            <div className={styles.searchFlights}>
              {popularDestinationsText}
            </div>
          </div>
          <button className={styles.showFlights} onClick={onShowFlightsClick}>
            <div className={styles.styleLayer}>
              <img
                className={styles.paperPlaneIcon}
                alt=""
                src={iconImageUrl}
              />
              <div className={styles.button}>{actionButtonText}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightsCard;
