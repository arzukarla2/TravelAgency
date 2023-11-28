import { useMemo } from "react";
import styles from "./ContainerForm1.module.css";

const ContainerForm1 = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsText3,
  propHeight,
  propOpacity,
}) => {
  const image43IconStyle = useMemo(() => {
    return {
      height: propHeight,
      opacity: propOpacity,
    };
  }, [propHeight, propOpacity]);

  return (
    <div className={styles.image43Parent}>
      <img
        className={styles.image43Icon}
        alt=""
        src={imageDimensions}
        style={image43IconStyle}
      />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <div className={styles.buttonWrapper}>
                <div className={styles.button1}>4.2</div>
              </div>
            </div>
            <div className={styles.veryGood54Container}>
              <b>Very Good</b>
              <span className={styles.reviews}> 54 reviews</span>
            </div>
          </div>
          <div className={styles.startingFromParent}>
            <div className={styles.startingFrom}>starting from</div>
            <b className={styles.night}>
              <span>$104</span>
              <span className={styles.night1}>/night</span>
            </b>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.checkboxParent}>
                <img
                  className={styles.checkboxIcon}
                  alt=""
                  src={imageDimensionsText}
                />
                <div className={styles.h28mParent}>
                  <div className={styles.pmParent}>
                    <div className={styles.pm}>12:00 pm</div>
                    <div className={styles.pm}>-</div>
                    <div className={styles.pm}>01:28 pm</div>
                  </div>
                  <div className={styles.emirates}>Emirates</div>
                </div>
              </div>
              <div className={styles.nonStop}>non stop</div>
              <div className={styles.h28mParent}>
                <div className={styles.h28m}>2h 28m</div>
                <div className={styles.emirates}>EWR-BNA</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.checkboxParent}>
                <img
                  className={styles.checkboxIcon}
                  alt=""
                  src={imageDimensionsText2}
                />
                <div className={styles.h28mParent}>
                  <div className={styles.pmParent}>
                    <div className={styles.pm}>12:00 pm</div>
                    <div className={styles.pm}>-</div>
                    <div className={styles.pm}>01:28 pm</div>
                  </div>
                  <div className={styles.emirates}>Emirates</div>
                </div>
              </div>
              <div className={styles.nonStop}>non stop</div>
              <div className={styles.h28mParent}>
                <div className={styles.h28m}>2h 28m</div>
                <div className={styles.emirates}>EWR-BNA</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.buttonGroup}>
          <div className={styles.button2}>
            <div className={styles.styleLayer}>
              <img
                className={styles.heartIcon}
                alt=""
                src={imageDimensionsText3}
              />
            </div>
          </div>
          <div className={styles.button3}>
            <div className={styles.styleLayer1}>
              <div className={styles.pm}>View Deals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm1;
