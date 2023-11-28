import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Autocomplete, TextField } from "@mui/material";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./FlightFormContainer.module.css";

const FlightFormContainer = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/flight-listing");
  }, [navigate]);

  return (
    <div className={styles.lineParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.airplaneParent}>
            <img className={styles.airplaneIcon} alt="" src="/airplane.png" />
            <div className={styles.flights}>Flights</div>
          </div>
          <div className={styles.frameItem} />
          <div className={styles.airplaneParent}>
            <img className={styles.airplaneIcon} alt="" src="/ionbed.png" />
            <div className={styles.flights}>Stays</div>
          </div>
        </div>
        <div className={styles.textFieldParent}>
          <Autocomplete
            className={styles.textField}
            size="medium"
            disablePortal
            options={["From New york to Moscow", "From Mexico to Paris"]}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                label="From - To"
                variant="outlined"
                placeholder=""
                helperText=""
              />
            )}
            defaultValue=" New york - Moscow"
          />
          <Autocomplete
            size="medium"
            sx={{ width: 140 }}
            disablePortal
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                label="Return"
                variant="outlined"
                placeholder=""
                helperText=""
              />
            )}
            defaultValue="Trip"
          />
          <div className={styles.textField1}>
            <div className={styles.textField2}>
              <DatePicker.RangePicker
                placeholder={["07 Nov 22 - 13 Nov 22", "07 Nov 22 - 13 Nov 22"]}
                allowClear={true}
                bordered={true}
              />
            </div>
            <div className={styles.supportingText}>
              <div className={styles.supportingText1}>Supporting text</div>
            </div>
          </div>
          <Autocomplete
            className={styles.textField}
            size="medium"
            disablePortal
            options={["Class Bussines", "Class Economy"]}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                label="Passenger - Class"
                variant="outlined"
                placeholder=""
                helperText=""
              />
            )}
            defaultValue="1 Passenger, Economy"
          />
        </div>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <div className={styles.styleLayer}>
            <img
              className={styles.addOutlineIcon}
              alt=""
              src="/addoutline.png"
            />
            <div className={styles.button1}>Add Promo Code</div>
          </div>
        </div>
        <button className={styles.button2} onClick={onButtonClick}>
          <div className={styles.styleLayer1}>
            <img
              className={styles.addOutlineIcon}
              alt=""
              src="/paper-plane.png"
            />
            <div className={styles.button3}>Show Filghts</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FlightFormContainer;
