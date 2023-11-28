import CardContainer from "./CardContainer";
import styles from "./TripPlannerContainer.module.css";

const TripPlannerContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.planYourPerfectTripParent}>
          <div className={styles.planYourPerfect}>Plan your perfect trip</div>
          <div
            className={styles.searchFlights}
          >{`Search Flights & Places Hire to our most popular destinations`}</div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonWrapper}>
            <div className={styles.button1}>See more places</div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <CardContainer
          locationCode="/rectangle-3@2x.png"
          locationDescription="Istanbul, Turkey"
          imageDimensions="/rectangle-32@2x.png"
          locationImageAltText="Sydney, Australia"
          imageDimensionsAltText="/rectangle-4@2x.png"
          locationName="Baku, Azerbaijan"
        />
        <CardContainer
          locationCode="/rectangle-41@2x.png"
          locationDescription="Malé, Maldives"
          imageDimensions="/rectangle-33@2x.png"
          locationImageAltText="Paris, France"
          imageDimensionsAltText="/rectangle-42@2x.png"
          locationName="New York, US"
        />
        <CardContainer
          locationCode="/rectangle-34@2x.png"
          locationDescription="London, UK"
          imageDimensions="/rectangle-35@2x.png"
          locationImageAltText="Tokyo, Japan"
          imageDimensionsAltText="/rectangle-43@2x.png"
          locationName="Dubai, UAE"
        />
      </div>
    </div>
  );
};

export default TripPlannerContainer;
