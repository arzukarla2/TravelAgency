import { useMemo } from "react";
import styles from "./RecentSearchesContainer.module.css";

const RecentSearchesContainer = ({
  locationCode,
  locationDescription,
  propJustifyContent,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
    };
  }, [propJustifyContent]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleWrapper}>
        <img className={styles.frameChild} alt="" src={locationCode} />
      </div>
      <div className={styles.istanbulTurkeyParent} style={frameDivStyle}>
        <div className={styles.istanbulTurkey}>{locationDescription}</div>
        <div className={styles.places}>325 places</div>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
