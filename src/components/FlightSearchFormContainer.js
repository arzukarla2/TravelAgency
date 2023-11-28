import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Autocomplete, TextField } from "@mui/material";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./FlightSearchFormContainer.module.css";

const FlightSearchFormContainer = () => {
  const navigate = useNavigate();

  const onShowFlightsClick = useCallback(() => {
    navigate("/flight-listing");
  }, [navigate]);

  return (
    <div className={styles.whereAreYouFlyingParent}>
      <div className={styles.whereAreYou}>{`Where are you flying? `}</div>
      <div className={styles.textFieldParent}>
        <Autocomplete
          className={styles.textField}
          size="medium"
          disablePortal
          options={[
            "From New York to Moscow",
            "From Paris to Madrid",
            "From Berlin to Mexico City",
          ]}
          renderInput={(params) => (
            <TextField
              {...params}
              color="primary"
              label="Lahore - Karachi"
              variant="outlined"
              placeholder=""
              helperText=""
            />
          )}
          defaultValue="From - To"
        />
        <div className={styles.textField1}>
          <Autocomplete
            className={styles.textField2}
            size="medium"
            disablePortal
            options={[
              "London",
              "Paris",
              "Moscow",
              "New York",
              "Miami",
              "Los Angeles",
            ]}
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
          <div className={styles.supportingText}>
            <div className={styles.supportingText1}>Supporting text</div>
          </div>
        </div>
        <div className={styles.textField3}>
          <div className={styles.textField4}>
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
        <div className={styles.textField3}>
          <Autocomplete
            className={styles.textField2}
            size="medium"
            disablePortal
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                label="1 Passenger, Economy"
                variant="filled"
                placeholder=""
                helperText=""
              />
            )}
            defaultValue="Passenger - Class"
          />
          <div className={styles.supportingText}>
            <div className={styles.supportingText1}>Supporting text</div>
          </div>
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
        <button className={styles.showFlights} onClick={onShowFlightsClick}>
          <div className={styles.styleLayer1}>
            <img
              className={styles.addOutlineIcon}
              alt=""
              src="/paper-plane.png"
            />
            <div className={styles.button2}>Show Filghts</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FlightSearchFormContainer;
