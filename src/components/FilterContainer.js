import RatingFormContainer from "./RatingFormContainer";
import styles from "./FilterContainer.module.css";

const FilterContainer = () => {
  return (
    <div className={styles.filtersParent}>
      <div className={styles.filters}>Filters</div>
      <div className={styles.frameParent}>
        <div className={styles.priceParent}>
          <div className={styles.price}>Price</div>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevron-down.png"
          />
        </div>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src="/group-2.png" />
          <div className={styles.parent}>
            <div className={styles.div}>$50</div>
            <div className={styles.div1}>$1200</div>
          </div>
        </div>
      </div>
      <div className={styles.frameItem} />
      <RatingFormContainer itemCode="/chevron-down1.png" />
      <div className={styles.frameItem} />
      <div className={styles.frameGroup}>
        <div className={styles.priceParent}>
          <div className={styles.price}>Freebies</div>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevron-down.png"
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.checkboxParent}>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/checkbox.png"
            />
            <div className={styles.div}>Free breakfast</div>
          </div>
          <div className={styles.checkboxParent}>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/checkbox.png"
            />
            <div className={styles.div}>Free parking</div>
          </div>
          <div className={styles.checkboxParent}>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/checkbox.png"
            />
            <div className={styles.div}>Free internet</div>
          </div>
          <div className={styles.checkboxParent}>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/checkbox.png"
            />
            <div className={styles.div}>Free airport shuttle</div>
          </div>
          <div className={styles.checkboxParent}>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/checkbox.png"
            />
            <div className={styles.div}>Free cancellation</div>
          </div>
        </div>
      </div>
      <div className={styles.frameItem} />
      <div className={styles.frameParent1}>
        <div className={styles.frameGroup}>
          <div className={styles.priceParent}>
            <div className={styles.price}>Amenities</div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevron-down1.png"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.checkboxParent2}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/checkbox3.png"
              />
              <div className={styles.div}>24hr front desk</div>
            </div>
            <div className={styles.checkboxParent2}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/checkbox3.png"
              />
              <div className={styles.div}>Air-conditioned</div>
            </div>
            <div className={styles.checkboxParent2}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/checkbox3.png"
              />
              <div className={styles.div}>Fitness</div>
            </div>
            <div className={styles.checkboxParent2}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/checkbox3.png"
              />
              <div className={styles.div}>Pool</div>
            </div>
          </div>
        </div>
        <b className={styles.more}>+24 more</b>
      </div>
    </div>
  );
};

export default FilterContainer;
