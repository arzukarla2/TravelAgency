import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardFormFilterContainer from "./CardFormFilterContainer";
import styles from "./ContainerCard1.module.css";

const ContainerCard1 = () => {
  const navigate = useNavigate();

  const onViewPlaceClick = useCallback(() => {
    navigate("/hotel-listing");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-316@2x.png" />
        <div className={styles.imagesWrapper}>
          <div className={styles.images}>9 images</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.cvkParkBosphorusHotelIstanParent}>
              <b className={styles.cvkParkBosphorus}>
                CVK Park Bosphorus Hotel Istanbul
              </b>
              <div className={styles.frameDiv}>
                <div className={styles.locationParent}>
                  <img
                    className={styles.locationIcon}
                    alt=""
                    src="/location2.png"
                  />
                  <div className={styles.images}>
                    Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.buttonParent}>
                    <div className={styles.starParent}>
                      <img
                        className={styles.locationIcon}
                        alt=""
                        src="/star.png"
                      />
                      <img
                        className={styles.locationIcon}
                        alt=""
                        src="/star.png"
                      />
                      <img
                        className={styles.locationIcon}
                        alt=""
                        src="/star.png"
                      />
                      <img
                        className={styles.locationIcon}
                        alt=""
                        src="/star.png"
                      />
                      <img
                        className={styles.locationIcon}
                        alt=""
                        src="/star.png"
                      />
                    </div>
                    <div className={styles.starHotel}>5 Star Hotel</div>
                  </div>
                  <div className={styles.cafeParent}>
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src="/cafe.png"
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
                    <span className={styles.reviews}> 371 reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.startingFromParent}>
              <div className={styles.startingFrom}>starting from</div>
              <b className={styles.night}>
                <span>$240</span>
                <span className={styles.night1}>/night</span>
              </b>
              <div className={styles.exclTax}>excl. tax</div>
            </div>
          </div>
          <div className={styles.frameItem} />
          <div className={styles.buttonGroup}>
            <div className={styles.button2}>
              <div className={styles.styleLayer}>
                <img className={styles.heartIcon} alt="" src="/heart5.png" />
              </div>
            </div>
            <button className={styles.viewPlace} onClick={onViewPlaceClick}>
              <div className={styles.styleLayer1}>
                <div className={styles.button3}>View Place</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <CardFormFilterContainer
        imageDimensions="/rectangle-317@2x.png"
        imageDimensionsText="/location3.png"
        imageDimensionsCode="/star1.png"
        imageDimensionsTextCode="/star1.png"
        imageDimensionsTextCode2="/star1.png"
        imageDimensionsTextCode3="/star1.png"
        imageDimensionsTextCode4="/star1.png"
        imageDimensionsTextCode5="/cafe1.png"
        imageDimensionsTextCode6="/heart3.png"
      />
      <CardFormFilterContainer
        imageDimensions="/rectangle-318@2x.png"
        imageDimensionsText="/location2.png"
        imageDimensionsCode="/star2.png"
        imageDimensionsTextCode="/star2.png"
        imageDimensionsTextCode2="/star2.png"
        imageDimensionsTextCode3="/star2.png"
        imageDimensionsTextCode4="/star2.png"
        imageDimensionsTextCode5="/cafe.png"
        imageDimensionsTextCode6="/heart2.png"
      />
      <CardFormFilterContainer
        imageDimensions="/rectangle-319@2x.png"
        imageDimensionsText="/location3.png"
        imageDimensionsCode="/star1.png"
        imageDimensionsTextCode="/star1.png"
        imageDimensionsTextCode2="/star1.png"
        imageDimensionsTextCode3="/star1.png"
        imageDimensionsTextCode4="/star1.png"
        imageDimensionsTextCode5="/cafe1.png"
        imageDimensionsTextCode6="/heart3.png"
      />
    </div>
  );
};

export default ContainerCard1;
