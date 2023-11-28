import styles from "./RatingCard.module.css";

const RatingCard = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.reviewsParent}>
          <b className={styles.reviews}>Reviews</b>
          <div className={styles.button}>
            <div className={styles.styleLayer}>
              <div className={styles.veryGood}>Give your review</div>
            </div>
          </div>
        </div>
        <div className={styles.parent}>
          <b className={styles.reviews}>4.2</b>
          <div className={styles.veryGoodParent}>
            <div className={styles.veryGood}>Very good</div>
            <div className={styles.verifiedReviews}>371 verified reviews</div>
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameContainer}>
        <div className={styles.ellipseParent}>
          <img className={styles.frameItem} alt="" src="/ellipse-1@2x.png" />
          <div className={styles.frameDiv}>
            <div className={styles.amazingParent}>
              <div className={styles.veryGood}>5.0 Amazing</div>
              <div className={styles.reviews}>|</div>
              <div className={styles.reviews}>Omar Siphron</div>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <img className={styles.flagIcon} alt="" src="/flag.png" />
        </div>
        <div className={styles.frameChild} />
        <div className={styles.ellipseParent}>
          <img className={styles.frameItem} alt="" src="/ellipse-12@2x.png" />
          <div className={styles.frameDiv}>
            <div className={styles.amazingParent}>
              <div className={styles.veryGood}>5.0 Amazing</div>
              <div className={styles.reviews}>|</div>
              <div className={styles.reviews}>Cristofer Ekstrom Bothman</div>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <img className={styles.flagIcon} alt="" src="/flag1.png" />
        </div>
        <div className={styles.frameChild} />
        <div className={styles.ellipseParent}>
          <img className={styles.frameItem} alt="" src="/ellipse-13@2x.png" />
          <div className={styles.frameDiv}>
            <div className={styles.amazingParent}>
              <div className={styles.veryGood}>5.0 Amazing</div>
              <div className={styles.reviews}>|</div>
              <div className={styles.reviews}>Kaiya Lubin</div>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <img className={styles.flagIcon} alt="" src="/flag.png" />
        </div>
        <div className={styles.frameChild} />
        <div className={styles.ellipseParent}>
          <img className={styles.frameItem} alt="" src="/ellipse-14@2x.png" />
          <div className={styles.frameDiv}>
            <div className={styles.amazingParent}>
              <div className={styles.veryGood}>5.0 Amazing</div>
              <div className={styles.reviews}>|</div>
              <div className={styles.reviews}>Erin Septimus</div>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <img className={styles.flagIcon} alt="" src="/flag1.png" />
        </div>
        <div className={styles.frameChild} />
        <div className={styles.ellipseParent}>
          <img className={styles.frameItem} alt="" src="/ellipse-15@2x.png" />
          <div className={styles.frameDiv}>
            <div className={styles.amazingParent}>
              <div className={styles.veryGood}>5.0 Amazing</div>
              <div className={styles.reviews}>|</div>
              <div className={styles.reviews}>Terry George</div>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <img className={styles.flagIcon} alt="" src="/flag.png" />
        </div>
        <div className={styles.frameChild} />
        <div className={styles.chevronForwardParent}>
          <img
            className={styles.chevronForwardIcon}
            alt=""
            src="/chevron-forward3.png"
          />
          <div className={styles.reviews}>1 of 40</div>
          <img
            className={styles.chevronForwardIcon}
            alt=""
            src="/chevron-forward4.png"
          />
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
