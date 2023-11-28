import styles from "./CardFormFilterContainer.module.css";

const CardFormFilterContainer = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsCode,
  imageDimensionsTextCode,
  imageDimensionsTextCode2,
  imageDimensionsTextCode3,
  imageDimensionsTextCode4,
  imageDimensionsTextCode5,
  imageDimensionsTextCode6,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src={imageDimensions} />
      <div className={styles.imagesWrapper}>
        <div className={styles.images}>9 images</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.eresinHotelsSultanahmetBoParent}>
            <b className={styles.eresinHotelsSultanahmet}>
              Eresin Hotels Sultanahmet - Boutique Class
            </b>
            <div className={styles.frameContainer}>
              <div className={styles.locationParent}>
                <img
                  className={styles.locationIcon}
                  alt=""
                  src={imageDimensionsText}
                />
                <div className={styles.images}>
                  Kucukayasofya No. 40 Sultanahmet, Istanbul 34022
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.buttonParent}>
                  <div className={styles.starParent}>
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src={imageDimensionsCode}
                    />
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src={imageDimensionsTextCode}
                    />
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src={imageDimensionsTextCode2}
                    />
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src={imageDimensionsTextCode3}
                    />
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src={imageDimensionsTextCode4}
                    />
                  </div>
                  <div className={styles.starHotel}>5 Star Hotel</div>
                </div>
                <div className={styles.cafeParent}>
                  <img
                    className={styles.locationIcon}
                    alt=""
                    src={imageDimensionsTextCode5}
                  />
                  <div className={styles.aminities}>
                    <b>20+</b>
                    <span className={styles.reviews}> Aminities</span>
                  </div>
                </div>
              </div>
              <div className={styles.buttonParent}>
                <div className={styles.button}>
                  <div className={styles.buttonWrapper}>
                    <div className={styles.starHotel}>4.2</div>
                  </div>
                </div>
                <div className={styles.aminities}>
                  <b>Very Good</b>
                  <span className={styles.reviews}> 54 reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.startingFromParent}>
            <div className={styles.startingFrom}>starting from</div>
            <b className={styles.night}>
              <span>$104</span>
              <span className={styles.night1}>/night</span>
            </b>
            <div className={styles.exclTax}>excl. tax</div>
          </div>
        </div>
        <div className={styles.frameItem} />
        <div className={styles.buttonGroup}>
          <div className={styles.button2}>
            <div className={styles.styleLayer}>
              <img
                className={styles.heartIcon}
                alt=""
                src={imageDimensionsTextCode6}
              />
            </div>
          </div>
          <div className={styles.button3}>
            <div className={styles.styleLayer1}>
              <div className={styles.button4}>View Place</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFormFilterContainer;
