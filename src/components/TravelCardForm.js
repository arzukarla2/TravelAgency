import styles from "./TravelCardForm.module.css";

const TravelCardForm = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.fallIntoTravelParent}>
          <div className={styles.fallIntoTravelContainer}>
            <p className={styles.fallIntoTravel}>Fall into travel</p>
          </div>
          <div className={styles.goingSomewhereTo}>
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonWrapper}>
            <div className={styles.button1}>See All</div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.backpackingSriLankaParent}>
              <b className={styles.backpackingSriLanka}>
                Backpacking Sri Lanka
              </b>
              <div className={styles.fromParent}>
                <div className={styles.from}>From</div>
                <div className={styles.div}>$700</div>
              </div>
            </div>
            <div className={styles.travelingIsA}>
              Traveling is a unique experience as it's the best way to unplug
              from the pushes and pulls of daily life. It helps us to forget
              about our problems, frustrations, and fears at home. During our
              journey, we experience life in different ways. We explore new
              places, cultures, cuisines, traditions, and ways of living.
            </div>
          </div>
          <div className={styles.button2}>
            <div className={styles.styleLayer}>
              <div className={styles.button1}>Book Flight</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-39@2x.png"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-310@2x.png"
            />
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-311@2x.png"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-312@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCardForm;
