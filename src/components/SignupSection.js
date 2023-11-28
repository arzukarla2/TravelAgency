import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignupSection.module.css";

const SignupSection = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/flights-search");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/hotel-search");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <button
            className={styles.airplaneParent}
            onClick={onFrameButtonClick}
          >
            <img className={styles.airplaneIcon} alt="" src="/airplane1.png" />
            <div className={styles.findFlight}>Find Flight</div>
          </button>
          <button
            className={styles.airplaneParent}
            onClick={onFrameButton1Click}
          >
            <img className={styles.airplaneIcon} alt="" src="/ionbed1.png" />
            <div className={styles.findFlight}>Find Stays</div>
          </button>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo.png" />
      </div>
      <div className={styles.loginParent}>
        <div className={styles.login}>Login</div>
        <div className={styles.patientButton}>
          <div className={styles.stateLayer}>
            <div className={styles.login}>Sign up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
