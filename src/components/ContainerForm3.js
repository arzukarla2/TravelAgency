import "antd/dist/antd.min.css";
import { Autocomplete, TextField } from "@mui/material";
import { DatePicker } from "antd";
import styles from "./ContainerForm3.module.css";

const ContainerForm3 = () => {
  return (
    <div className={styles.flightListingInner}>
      <div className={styles.textFieldParent}>
        <Autocomplete
          className={styles.textField}
          size="medium"
          disablePortal
          options={[
            "From New york to Mexico City",
            "From Paris To Moscow",
            "From Roma to Madrid",
          ]}
          renderInput={(params) => (
            <TextField
              {...params}
              color="primary"
              label="From To "
              variant="outlined"
              placeholder=""
              helperText=""
            />
          )}
          defaultValue="Lahore-Karachi"
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
              label="Trip"
              variant="outlined"
              placeholder=""
              helperText=""
            />
          )}
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
          options={["1 Passenger", "Economy", "Bussines", ""]}
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
          defaultValue="1 Passenger,Economy"
        />
        <div className={styles.button}>
          <div className={styles.styleLayer}>
            <img className={styles.searchIcon} alt="" src="/search.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm3;
