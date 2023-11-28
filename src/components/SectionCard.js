import styles from "./SectionCard.module.css";

const SectionCard = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.letsGoPlacesTogetherParent}>
          <div className={styles.letsGoPlaces}>Let's go places together</div>
          <div className={styles.discoverTheLatest}>
            Discover the latest offers and news and start planning your next
            trip with us.
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonWrapper}>
            <div className={styles.button1}>See All</div>
          </div>
        </div>
      </div>
      <div className={styles.fluentarrowForward20FilledParent}>
        <img
          className={styles.fluentarrowForward20FilledIcon}
          alt=""
          src="/fluentarrowforward20filled.png"
        />
        <img
          className={styles.emojioneV1worldMapIcon}
          alt=""
          src="/emojionev1worldmap.png"
        />
        <div className={styles.frameChild} />
        <img className={styles.groupIcon} alt="" src="/group.png" />
        <div className={styles.rectangleParent}>
          <img className={styles.frameItem} alt="" src="/rectangle-25@2x.png" />
          <div className={styles.jamesDoeParent}>
            <b className={styles.jamesDoe}>James Doe</b>
            <div className={styles.boardingPassN123}>Boarding Pass N’123</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-251@2x.png"
          />
          <div className={styles.jamesDoeParent}>
            <b className={styles.jamesDoe}>James Doe</b>
            <div className={styles.boardingPassN123}>Boarding Pass N’123</div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-252@2x.png"
          />
          <div className={styles.jamesDoeParent}>
            <b className={styles.jamesDoe}>James Doe</b>
            <div className={styles.boardingPassN123}>Boarding Pass N’123</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-253@2x.png"
          />
          <div className={styles.jamesDoeParent}>
            <b className={styles.jamesDoe}>James Doe</b>
            <div className={styles.boardingPassN123}>Boarding Pass N’123</div>
          </div>
        </div>
        <div className={styles.fluentarrowForward20Filled} />
        <img className={styles.vectorIcon} alt="" src="/vector-8.png" />
        <img className={styles.frameChild2} alt="" src="/vector-10.png" />
        <img className={styles.frameChild3} alt="" src="/vector-9.png" />
        <div className={styles.rectangleParent1}>
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-254@2x.png"
          />
          <div className={styles.jamesDoeParent}>
            <b className={styles.jamesDoe}>James Doe</b>
            <div className={styles.boardingPassN123}>Boarding Pass N’123</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
