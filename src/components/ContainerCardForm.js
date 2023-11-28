import { useCallback } from "react";
import ContainerForm2 from "./ContainerForm2";
import { useNavigate } from "react-router-dom";
import ContainerForm1 from "./ContainerForm1";
import styles from "./ContainerCardForm.module.css";

const ContainerCardForm = () => {
  const navigate = useNavigate();

  const onViewDetailClick = useCallback(() => {
    navigate("/flight-detail-page");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.image40Parent}>
        <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
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
              <b className={styles.b}>$104</b>
            </div>
          </div>
          <ContainerForm2
            iconCode="/checkbox1.png"
            iconTextCode="/checkbox1.png"
          />
          <div className={styles.frameChild} />
          <div className={styles.buttonGroup}>
            <div className={styles.button2}>
              <div className={styles.styleLayer}>
                <img className={styles.heartIcon} alt="" src="/heart2.png" />
              </div>
            </div>
            <button className={styles.viewDetail} onClick={onViewDetailClick}>
              <div className={styles.styleLayer1}>
                <div className={styles.button3}>View Deals</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.image40Parent}>
        <img className={styles.image41Icon} alt="" src="/image-41@2x.png" />
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
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
              <b className={styles.b}>$104</b>
            </div>
          </div>
          <ContainerForm2
            iconCode="/checkbox2.png"
            iconTextCode="/checkbox2.png"
          />
          <div className={styles.frameChild} />
          <div className={styles.buttonParent1}>
            <div className={styles.button2}>
              <div className={styles.styleLayer}>
                <img className={styles.heartIcon} alt="" src="/heart3.png" />
              </div>
            </div>
            <div className={styles.button7}>
              <div className={styles.styleLayer1}>
                <div className={styles.button8}>View Deals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContainerForm1
        imageDimensions="/image-43@2x.png"
        imageDimensionsText="/checkbox1.png"
        imageDimensionsText2="/checkbox1.png"
        imageDimensionsText3="/heart2.png"
      />
      <ContainerForm1
        imageDimensions="/image-45@2x.png"
        imageDimensionsText="/checkbox2.png"
        imageDimensionsText2="/checkbox2.png"
        imageDimensionsText3="/heart3.png"
        propHeight="56.87px"
        propOpacity="0.6"
      />
    </div>
  );
};

export default ContainerCardForm;
