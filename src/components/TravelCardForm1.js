import BookFlightContainer from "./BookFlightContainer";
import styles from "./TravelCardForm1.module.css";

const TravelCardForm1 = () => {
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
      <BookFlightContainer
        actionButtonText="Book Flight"
        actionButtonLabel="Book Flight"
        bookingButtonText="Book Flight"
        bookingActionText="Book Flight"
      />
    </div>
  );
};

export default TravelCardForm1;
