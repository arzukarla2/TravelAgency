import styles from "./AvailableRoomsContainer.module.css";

const AvailableRoomsContainer = () => {
  return (
    <div className={styles.availableRoomsParent}>
      <b className={styles.availableRooms}>Available Rooms</b>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-18@2x.png"
            />
            <div className={styles.superiorRoom}>
              Superior room - 1 double bed or 2 twin beds
            </div>
          </div>
          <div className={styles.nightParent}>
            <div className={styles.night}>
              <span>$240</span>
              <span className={styles.night1}>/night</span>
            </div>
            <div className={styles.button}>
              <div className={styles.styleLayer}>
                <div className={styles.night}>Book now</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameItem} />
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-181@2x.png"
            />
            <div className={styles.superiorRoom}>
              Superior room - City view - 1 double bed or 2 twin beds
            </div>
          </div>
          <div className={styles.nightParent}>
            <div className={styles.night}>
              <span>$280</span>
              <span className={styles.night1}>/night</span>
            </div>
            <div className={styles.button}>
              <div className={styles.styleLayer}>
                <div className={styles.night}>Book now</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameItem} />
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-182@2x.png"
            />
            <div className={styles.superiorRoom}>
              Superior room - City view - 1 double bed or 2 twin beds
            </div>
          </div>
          <div className={styles.nightParent}>
            <div className={styles.night}>
              <span>$320</span>
              <span className={styles.night1}>/night</span>
            </div>
            <div className={styles.button}>
              <div className={styles.styleLayer}>
                <div className={styles.night}>Book now</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameItem} />
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-183@2x.png"
            />
            <div className={styles.superiorRoom}>
              Superior room - City view - 1 double bed or 2 twin beds
            </div>
          </div>
          <div className={styles.nightParent}>
            <div className={styles.night}>
              <span>$350</span>
              <span className={styles.night1}>/night</span>
            </div>
            <div className={styles.button}>
              <div className={styles.styleLayer}>
                <div className={styles.night}>Book now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableRoomsContainer;
