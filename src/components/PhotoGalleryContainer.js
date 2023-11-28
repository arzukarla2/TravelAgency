import styles from "./PhotoGalleryContainer.module.css";

const PhotoGalleryContainer = () => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src="/rectangle-315@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.rectangleGroup}>
          <img className={styles.frameItem} alt="" src="/rectangle-51@2x.png" />
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-61@2x.png"
          />
        </div>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-52@2x.png"
          />
          <img
            className={styles.frameChild1}
            alt=""
            src="/rectangle-62@2x.png"
          />
          <div className={styles.button}>
            <div className={styles.styleLayer}>
              <div className={styles.button1}>View all photos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryContainer;
