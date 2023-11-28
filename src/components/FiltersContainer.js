import { useMemo } from "react";
import { Slider, Box } from "@mui/material";
import styles from "./FiltersContainer.module.css";

const FiltersContainer = ({
  listingPrice,
  itemIdentifier,
  priceLabel,
  carPriceDepartureTime,
  propAlignSelf,
  propJustifyContent,
  propGap,
  propAlignSelf1,
  propTextAlign,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv2Style = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
      gap: propGap,
      alignSelf: propAlignSelf1,
    };
  }, [propJustifyContent, propGap, propAlignSelf1]);

  const divStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.priceParent}>
        <div className={styles.price}>{listingPrice}</div>
        <img className={styles.chevronDownIcon} alt="" src={itemIdentifier} />
      </div>
      <div className={styles.sliderParent} style={frameDiv1Style}>
        <Box className={styles.slider} sx={{ width: 343 }}>
          <Slider
            color="primary"
            min={50}
            max={2000}
            orientation="horizontal"
          />
        </Box>
        <div className={styles.parent} style={frameDiv2Style}>
          <div className={styles.div}>{priceLabel}</div>
          <div className={styles.div1} style={divStyle}>
            {carPriceDepartureTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersContainer;
