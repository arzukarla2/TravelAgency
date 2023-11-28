import BookFlightContainer from "./BookFlightContainer";
import styles from "./TravelCardForm2.module.css";

const TravelCardForm2 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.fallIntoTravelParent}>
          <b className={styles.fallIntoTravelContainer}>
            <p className={styles.fallIntoTravel}>Fall into travel</p>
          </b>
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
      <BookFlightContainer
        actionButtonText="Book a Hotel"
        actionButtonLabel="Book a Hotel"
        bookingButtonText="Book a Hotel"
        bookingActionText="Book a Hotel"
      />
    </div>
  );
};

export default TravelCardForm2;
