import styles from "./LocationMapContainer.module.css";

const LocationMapContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.locationmapParent}>
        <b className={styles.locationmap}>Location/Map</b>
        <div className={styles.button}>
          <div className={styles.styleLayer}>
            <div className={styles.button1}>View on google maps</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-19@2x.png" />
        <div className={styles.locationParent}>
          <img className={styles.locationIcon} alt="" src="/location1.png" />
          <div className={styles.gmssuyuMahInn}>
            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMapContainer;
