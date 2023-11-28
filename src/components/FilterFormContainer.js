import {
  Autocomplete,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import FiltersContainer from "./FiltersContainer";
import RatingFormContainer from "./RatingFormContainer";
import styles from "./FilterFormContainer.module.css";

const FilterFormContainer = () => {
  return (
    <div className={styles.filtersParent}>
      <div className={styles.filters}>Filters</div>
      <FiltersContainer
        listingPrice="Price"
        itemIdentifier="/chevron-down.png"
        priceLabel="$50"
        carPriceDepartureTime="$1200"
      />
      <div className={styles.frameChild} />
      <FiltersContainer
        listingPrice="Departure Time"
        itemIdentifier="/chevron-down1.png"
        priceLabel="12:01Am"
        carPriceDepartureTime="11:56Pm"
        propAlignSelf="stretch"
        propJustifyContent="space-between"
        propGap="unset"
        propAlignSelf1="stretch"
        propTextAlign="left"
      />
      <div className={styles.frameChild} />
      <RatingFormContainer itemCode="/chevron-down.png" />
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.airlinesParent}>
          <div className={styles.airlines}>Airlines</div>
          <Autocomplete
            className={styles.chevronDown}
            size="2x"
            sx={{ width: 24 }}
            disablePortal
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                label=""
                variant="filled"
                placeholder=""
                helperText=""
              />
            )}
          />
        </div>
        <div className={styles.frameGroup}>
          <FormControlLabel
            className={styles.frameFormcontrollabel}
            label="Emirated"
            labelPlacement="end"
            control={<Checkbox color="primary" defaultChecked size="medium" />}
          />
          <FormControlLabel
            className={styles.frameFormcontrollabel}
            label="Fly Dubai"
            labelPlacement="end"
            control={<Checkbox color="primary" defaultChecked size="medium" />}
          />
          <FormControlLabel
            className={styles.frameFormcontrollabel}
            label="Qatar"
            labelPlacement="end"
            control={<Checkbox color="primary" defaultChecked size="medium" />}
          />
          <FormControlLabel
            className={styles.frameFormcontrollabel}
            label="Etihad"
            labelPlacement="end"
            control={<Checkbox color="primary" defaultChecked size="medium" />}
          />
        </div>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.airlinesParent}>
          <div className={styles.airlines}>Trips</div>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevron-down.png"
          />
        </div>
        <div className={styles.frameGroup}>
          <FormControlLabel
            className={styles.frameFormcontrollabel}
            label="Round trip"
            labelPlacement="end"
            control={<Checkbox color="primary" defaultChecked size="medium" />}
          />
          <FormControlLabel
            className={styles.frameFormcontrollabel}
            label="On Way"
            labelPlacement="end"
            control={<Checkbox color="primary" defaultChecked size="medium" />}
          />
          <FormControlLabel
            className={styles.frameFormcontrollabel}
            label="Multi-City"
            labelPlacement="end"
            control={<Checkbox color="primary" indeterminate size="medium" />}
          />
          <FormControlLabel
            className={styles.frameFormcontrollabel}
            label="My Dates Are Flexible"
            labelPlacement="end"
            control={<Checkbox color="primary" indeterminate size="medium" />}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterFormContainer;
