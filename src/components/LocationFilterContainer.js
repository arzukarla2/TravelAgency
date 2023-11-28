import styles from "./LocationFilterContainer.module.css";

const LocationFilterContainer = () => {
  return (
    <div className={styles.hotelListing1Inner}>
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
              <div className={styles.content}>
                <div className={styles.inputText}>
                  <div className={styles.inputText1}>Istanbul, Turkey</div>
                </div>
                <div className={styles.labelText}>
                  <div className={styles.inputText1}>Enter Destination</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.supportingText}>
            <div className={styles.supportingText1}>Supporting text</div>
          </div>
        </div>
        <div className={styles.textField2}>
          <div className={styles.textField1}>
            <div className={styles.stateLayer2}>
              <div className={styles.content}>
                <div className={styles.inputText}>
                  <div className={styles.inputText1}>Fri 12/2</div>
                </div>
                <div className={styles.labelText2}>
                  <div className={styles.inputText1}>Check In</div>
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
          <div className={styles.supportingText}>
            <div className={styles.supportingText1}>Supporting text</div>
          </div>
        </div>
        <div className={styles.textField2}>
          <div className={styles.textField1}>
            <div className={styles.stateLayer2}>
              <div className={styles.content}>
                <div className={styles.inputText}>
                  <div className={styles.inputText1}>Sun 12/4</div>
                </div>
                <div className={styles.labelText2}>
                  <div className={styles.inputText1}>Check Out</div>
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
          <div className={styles.supportingText}>
            <div className={styles.supportingText1}>Supporting text</div>
          </div>
        </div>
        <div className={styles.textField2}>
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
              <div className={styles.content}>
                <div className={styles.inputText}>
                  <div className={styles.inputText1}>1 room, 2 guests</div>
                </div>
                <div className={styles.labelText}>
                  <div className={styles.inputText1}>{`Rooms & Guests`}</div>
                </div>
              </div>
              <div className={styles.trailingIcon}>
                <img
                  className={styles.component24Icon}
                  alt=""
                  src="/chevron-down3.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.supportingText}>
            <div className={styles.supportingText1}>Supporting text</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.styleLayer}>
            <img className={styles.component24Icon} alt="" src="/search.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationFilterContainer;
