import NearParkContainer from "./NearParkContainer";
import styles from "./OverviewContainer.module.css";

const OverviewContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.overviewParent}>
        <b className={styles.overview}>Overview</b>
        <div className={styles.locatedInTaksim}>
          Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
          Bosphorus Hotel Istanbul has risen from the ashes of the historic Park
          Hotel, which also served as Foreign Affairs Palace 120 years ago and
          is hosting its guests by assuming this hospitality mission. With its
          452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18
          meeting rooms including 4 dividable ones and 3 terraces with Bosphorus
          view, Istanbuls largest terrace with Bosphorus view (4500 m2) and
          latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is
          destined to be the popular attraction point of the city. Room and
          suite categories at various sizes with city and Bosphorus view, as
          well as 68 separate luxury suites, are offered to its special guests
          as a wide variety of selection.
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.parent}>
            <b className={styles.overview}>4.2</b>
            <div className={styles.veryGoodParent}>
              <b className={styles.overview}>Very good</b>
              <div className={styles.reviews}>371 reviews</div>
            </div>
          </div>
        </div>
        <NearParkContainer locationDescription="Near park" />
        <NearParkContainer locationDescription="Near nightlife" />
        <NearParkContainer locationDescription="Near theater" />
        <NearParkContainer locationDescription="Clean Hotel" />
      </div>
    </div>
  );
};

export default OverviewContainer;
