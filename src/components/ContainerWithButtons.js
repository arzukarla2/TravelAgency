import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContainerWithButtons.module.css";

const ContainerWithButtons = () => {
  const navigate = useNavigate();

  const onBookNowClick = useCallback(() => {
    navigate("/booking-detail-2");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.emiratesA380AirbusWrapper}>
          <b className={styles.emiratesA380Airbus}>Emirates A380 Airbus</b>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.locationParent}>
            <img className={styles.locationIcon} alt="" src="/location.png" />
            <div className={styles.gmssuyuMahInn}>
              Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </div>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <div className={styles.buttonWrapper}>
                <div className={styles.button1}>4.2</div>
              </div>
            </div>
            <div className={styles.emiratesA380Airbus}>
              <b>Very Good</b>
              <span className={styles.reviews}> 54 reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.parent}>
        <b className={styles.emiratesA380Airbus}>$240</b>
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
          <button className={styles.bookNow} onClick={onBookNowClick}>
            <div className={styles.styleLayer2}>
              <div className={styles.button4}>Book now</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerWithButtons;
