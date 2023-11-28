import { useState, useCallback } from "react";
import { TextField, Icon, Autocomplete } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import styles from "./FlightSearchFormContainer1.module.css";

const FlightSearchFormContainer1 = () => {
  const [inputTextDateTimePickerValue, setInputTextDateTimePickerValue] =
    useState(null);
  const [inputTextDateTimePicker1Value, setInputTextDateTimePicker1Value] =
    useState(null);
  const navigate = useNavigate();

  const onShowPlacesClick = useCallback(() => {
    navigate("/hotel-listing-1");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.whereAreYouFlyingParent}>
        <div className={styles.whereAreYou}>{`Where are you flying? `}</div>
        <div className={styles.textFieldParent}>
          <div className={styles.textField}>
            <div className={styles.textField1}>
              <div className={styles.stateLayer}>
                <div className={styles.leadingIcon}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.component24Icon}
                        alt=""
                        src="/ionbed.png"
                      />
                    </div>
                  </div>
                </div>
                <TextField
                  className={styles.content}
                  color="primary"
                  label="Enter Destination"
                  placeholder="Textarea placeholder"
                  variant="outlined"
                  multiline
                />
              </div>
            </div>
            <div className={styles.supportingText}>
              <div className={styles.supportingText1}>Supporting text</div>
            </div>
          </div>
          <div className={styles.textField2}>
            <div className={styles.textField1}>
              <div className={styles.stateLayer2}>
                <div className={styles.content1}>
                  <div className={styles.inputText}>
                    <DatePicker
                      label="Fri 12/2"
                      value={inputTextDateTimePickerValue}
                      onChange={(newValue) => {
                        setInputTextDateTimePickerValue(newValue);
                      }}
                      slotProps={{
                        textField: {
                          variant: "standard",
                          size: "medium",
                          color: "primary",
                        },
                      }}
                    />
                  </div>
                  <div className={styles.labelText}>
                    <div className={styles.labelText1}>Check In</div>
                  </div>
                </div>
                <div className={styles.trailingIcon}>
                  <img
                    className={styles.component24Icon}
                    alt=""
                    src="/calendar.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.supportingText2}>
              <div className={styles.supportingText1}>Supporting text</div>
            </div>
          </div>
          <div className={styles.textField2}>
            <div className={styles.textField1}>
              <div className={styles.stateLayer2}>
                <div className={styles.content1}>
                  <div className={styles.inputText}>
                    <DatePicker
                      label="Sun 12/4"
                      value={inputTextDateTimePicker1Value}
                      onChange={(newValue) => {
                        setInputTextDateTimePicker1Value(newValue);
                      }}
                      slotProps={{
                        textField: {
                          variant: "standard",
                          size: "medium",
                          color: "primary",
                        },
                      }}
                    />
                  </div>
                  <div className={styles.labelText}>
                    <div className={styles.labelText1}>Check Out</div>
                  </div>
                </div>
                <div className={styles.trailingIcon}>
                  <img
                    className={styles.component24Icon}
                    alt=""
                    src="/calendar.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.supportingText2}>
              <div className={styles.supportingText1}>Supporting text</div>
            </div>
          </div>
          <div className={styles.textField6}>
            <div className={styles.textField1}>
              <div className={styles.stateLayer4}>
                <div className={styles.leadingIcon}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.component24Icon}
                        alt=""
                        src="/user.png"
                      />
                    </div>
                  </div>
                </div>
                <Autocomplete
                  className={styles.content}
                  size="medium"
                  disablePortal
                  options={[
                    "1 room 2 guests",
                    "1 room 1 guests",
                    "Doubleroom 2 guests",
                  ]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Room & Guests"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue={`Room & Guests`}
                />
                <div>
                  <img className={styles.component24Icon} alt="" />
                </div>
              </div>
            </div>
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
          <button className={styles.showPlaces} onClick={onShowPlacesClick}>
            <div className={styles.styleLayer1}>
              <img
                className={styles.addOutlineIcon}
                alt=""
                src="/building.png"
              />
              <div className={styles.button2}>Show Places</div>
            </div>
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default FlightSearchFormContainer1;
