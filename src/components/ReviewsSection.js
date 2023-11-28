import ContainerCard from "./ContainerCard";
import styles from "./ReviewsSection.module.css";

const ReviewsSection = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.reviewsParent}>
          <div className={styles.reviews}>Reviews</div>
          <div className={styles.whatPeopleSays}>
            What people says about Golobe facilities
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonWrapper}>
            <div className={styles.button1}>See All</div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.aRealSenseOfCommunityNurParent}>
                <b className={styles.aRealSenseContainer}>
                  <p className={styles.aRealSense}>
                    “A real sense of community, nurtured”
                  </p>
                </b>
                <div className={styles.reallyAppreciateTheHelpAndParent}>
                  <div className={styles.reallyAppreciateTheContainer}>
                    <p className={styles.aRealSense}>
                      Really appreciate the help and support from the staff
                      during these tough times. Shoutout to Katie for helping me
                      always, even when I was out of the country. And always
                      available when needed.
                    </p>
                  </div>
                  <b className={styles.viewMore}>View more</b>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.ionstarParent}>
                  <img
                    className={styles.ionstarIcon}
                    alt=""
                    src="/ionstar.png"
                  />
                  <img
                    className={styles.ionstarIcon}
                    alt=""
                    src="/ionstar.png"
                  />
                  <img
                    className={styles.ionstarIcon}
                    alt=""
                    src="/ionstar.png"
                  />
                  <img
                    className={styles.ionstarIcon}
                    alt=""
                    src="/ionstar.png"
                  />
                  <img
                    className={styles.ionstarIcon}
                    alt=""
                    src="/ionstar.png"
                  />
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.olgaParent}>
                    <b className={styles.olga}>Olga</b>
                    <div className={styles.weaveStudios}>
                      Weave Studios – Kai Tak
                    </div>
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
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-36@2x.png"
            />
          </div>
        </div>
        <ContainerCard
          testimonialText="“The facilities are superb. Clean, slick, bright.”"
          communityReview="“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle"
          reviewQuote="Thomas"
          studioReviewText="Weave Studios – Olympic"
          reviewImageUrl="/rectangle-361@2x.png"
        />
        <ContainerCard
          testimonialText="“A real sense of community, nurtured”"
          communityReview="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed."
          reviewQuote="Eliot"
          studioReviewText="Weave Studios – Kai Tak"
          reviewImageUrl="/rectangle-362@2x.png"
        />
      </div>
    </div>
  );
};

export default ReviewsSection;
