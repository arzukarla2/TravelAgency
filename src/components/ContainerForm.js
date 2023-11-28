import styles from "./ContainerForm.module.css";

const ContainerForm = ({ iconText }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.returnWedDec8Parent}>
        <b className={styles.returnWedDec}>Return Wed, Dec 8</b>
        <div className={styles.h28m}>2h 28m</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.kisspngDubaiAirbusA380EmirParent}>
            <img
              className={styles.kisspngDubaiAirbusA380EmirIcon}
              alt=""
              src="/kisspngdubaiairbusa380emiratesairlinelogo5adaedbb89d2d6-1@2x.png"
            />
            <div className={styles.emiratesParent}>
              <div className={styles.emirates}>Emirates</div>
              <div className={styles.airbusA320}>Airbus A320</div>
            </div>
          </div>
          <div className={styles.airplaneParent}>
            <img className={styles.airplaneIcon} alt="" src="/airplane.png" />
            <div className={styles.frameChild} />
            <img className={styles.airplaneIcon} alt="" src={iconText} />
            <div className={styles.frameChild} />
            <img
              className={styles.airplaneIcon}
              alt=""
              src="/ionstopwatch.png"
            />
            <div className={styles.frameChild} />
            <img
              className={styles.airplaneIcon}
              alt=""
              src="/ionfastfood.png"
            />
            <div className={styles.frameChild} />
            <img
              className={styles.airplaneIcon}
              alt=""
              src="/icroundairlineseatreclinenormal.png"
            />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.pmWrapper}>
              <div className={styles.emirates}>12:00 pm</div>
            </div>
            <div className={styles.newarkewrWrapper}>
              <div className={styles.newarkewr}>Newark(EWR)</div>
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.lineIcon} alt="" src="/line-5.png" />
            <img className={styles.airplaneIcon1} alt="" src="/airplane2.png" />
            <img className={styles.lineIcon} alt="" src="/line-6.png" />
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.pmWrapper}>
              <div className={styles.emirates}>12:00 pm</div>
            </div>
            <div className={styles.newarkewrWrapper}>
              <div className={styles.newarkewr}>Newark(EWR)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
