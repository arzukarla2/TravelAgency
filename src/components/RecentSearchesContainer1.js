import RecentSearchesContainer from "./RecentSearchesContainer";
import styles from "./RecentSearchesContainer1.module.css";

const RecentSearchesContainer1 = () => {
  return (
    <div className={styles.yourRecentSearchesParent}>
      <b className={styles.yourRecentSearches}>Your recent searches</b>
      <div className={styles.frameParent}>
        <RecentSearchesContainer
          locationCode="/rectangle-3@2x.png"
          locationDescription="Istanbul, Turkey"
        />
        <RecentSearchesContainer
          locationCode="/rectangle-313@2x.png"
          locationDescription="Sydney, Australia"
          propJustifyContent="center"
        />
        <RecentSearchesContainer
          locationCode="/rectangle-314@2x.png"
          locationDescription="Baku, Azerbaijan"
          propJustifyContent="center"
        />
        <RecentSearchesContainer
          locationCode="/rectangle-41@2x.png"
          locationDescription="Malé, Maldives"
          propJustifyContent="center"
        />
      </div>
    </div>
  );
};

export default RecentSearchesContainer1;
