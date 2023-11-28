import styles from "./CardContainer2.module.css";

const CardContainer2 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.cvkParkBosphorusHotelIstanParent}>
          <b className={styles.cvkParkBosphorus}>
            CVK Park Bosphorus Hotel Istanbul
          </b>
          <div className={styles.frameContainer}>
            <div className={styles.starParent}>
              <img className={styles.starIcon} alt="" src="/star.png" />
              <img className={styles.starIcon} alt="" src="/star.png" />
              <img className={styles.starIcon} alt="" src="/star.png" />
              <img className={styles.starIcon} alt="" src="/star.png" />
              <img className={styles.starIcon} alt="" src="/star.png" />
            </div>
            <div className={styles.starHotel}>5 Star Hotel</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.locationParent}>
            <img className={styles.locationIcon} alt="" src="/location.png" />
            <div className={styles.gmssuyuMahInn}>
              Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </div>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <div className={styles.buttonWrapper}>
                <div className={styles.starHotel}>4.2</div>
              </div>
            </div>
            <div className={styles.cvkParkBosphorus}>
              <b>Very Good</b>
              <span className={styles.reviews}> 371 reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nightParent}>
        <b className={styles.cvkParkBosphorus}>
          <span>$240</span>
          <span className={styles.night1}>/night</span>
        </b>
        <div className={styles.buttonGroup}>
          <div className={styles.button2}>
            <div className={styles.styleLayer}>
              <img className={styles.heartIcon} alt="" src="/heart1.png" />
            </div>
          </div>
          <div className={styles.button2}>
            <div className={styles.styleLayer}>
              <img className={styles.heartIcon} alt="" src="/share.png" />
            </div>
          </div>
          <div className={styles.button4}>
            <div className={styles.styleLayer2}>
              <div className={styles.button5}>Book now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer2;
