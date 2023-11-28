import styles from "./CardContainer1.module.css";

const CardContainer1 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.ellipseParent}>
        <img className={styles.frameChild} alt="" src="/ellipse-11@2x.png" />
        <div className={styles.johnDoeParent}>
          <div className={styles.johnDoe}>John Doe.</div>
          <div className={styles.online}>Online</div>
        </div>
      </div>
      <div className={styles.frameItem} />
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user1.png" />
            <div className={styles.myAccount}>My account</div>
          </div>
          <img
            className={styles.chevronForwardIcon}
            alt=""
            src="/chevron-forward1.png"
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/card.png" />
            <div className={styles.myAccount}>Payments</div>
          </div>
          <img
            className={styles.chevronForwardIcon}
            alt=""
            src="/chevron-forward1.png"
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/settings.png" />
            <div className={styles.myAccount}>Settings</div>
          </div>
          <img
            className={styles.chevronForwardIcon}
            alt=""
            src="/chevron-forward1.png"
          />
        </div>
      </div>
      <div className={styles.frameItem} />
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/support.png" />
            <div className={styles.myAccount}>Support</div>
          </div>
          <img
            className={styles.chevronForwardIcon}
            alt=""
            src="/chevron-forward2.png"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/logout.png" />
            <div className={styles.myAccount}>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer1;
