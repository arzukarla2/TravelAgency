import styles from "./ContainerCard.module.css";

const ContainerCard = ({
  testimonialText,
  communityReview,
  reviewQuote,
  studioReviewText,
  reviewImageUrl,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.theFacilitiesAreSuperbCleParent}>
            <b className={styles.theFacilitiesAreContainer}>
              <p className={styles.theFacilitiesAre}>{testimonialText}</p>
            </b>
            <div className={styles.aRealSenseOfCommunityNurParent}>
              <div className={styles.aRealSenseContainer}>
                <p className={styles.theFacilitiesAre}>{communityReview}</p>
              </div>
              <b className={styles.viewMore}>View more</b>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ionstarParent}>
              <img className={styles.ionstarIcon} alt="" src="/ionstar.png" />
              <img className={styles.ionstarIcon} alt="" src="/ionstar.png" />
              <img className={styles.ionstarIcon} alt="" src="/ionstar.png" />
              <img className={styles.ionstarIcon} alt="" src="/ionstar.png" />
              <img className={styles.ionstarIcon} alt="" src="/ionstar.png" />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.thomasParent}>
                <b className={styles.thomas}>{reviewQuote}</b>
                <div className={styles.weaveStudios}>{studioReviewText}</div>
              </div>
              <div className={styles.flatColorIconsgoogleParent}>
                <img
                  className={styles.ionstarIcon}
                  alt=""
                  src="/flatcoloriconsgoogle.png"
                />
                <b className={styles.google}>Google</b>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.frameItem} alt="" src={reviewImageUrl} />
      </div>
    </div>
  );
};

export default ContainerCard;
