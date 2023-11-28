import styles from "./TurkeyCard.module.css";

const TurkeyCard = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.emiratesA380AirbusWrapper}>
              <b className={styles.emiratesA380Airbus}>Emirates A380 Airbus</b>
            </div>
          </div>
          <div className={styles.wrapper}>
            <b className={styles.emiratesA380Airbus}>$240</b>
          </div>
        </div>
        <div className={styles.returnWedDec8Parent}>
          <b className={styles.emiratesA380Airbus}>Return Wed, Dec 8</b>
          <div className={styles.h28m}>2h 28m</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameContainer}>
            <div className={styles.kisspngDubaiAirbusA380EmirParent}>
              <img
                className={styles.kisspngDubaiAirbusA380EmirIcon}
                alt=""
                src="/kisspngdubaiairbusa380emiratesairlinelogo5adaedbb89d2d6-1@2x.png"
              />
              <div className={styles.emiratesParent}>
                <div className={styles.emirates}>Emirates</div>
                <div className={styles.airbusA320}>Airbus A320</div>
              </div>
            </div>
            <div className={styles.airplaneParent}>
              <img className={styles.airplaneIcon} alt="" src="/airplane.png" />
              <div className={styles.frameChild} />
              <img className={styles.airplaneIcon} alt="" src="/wifi.png" />
              <div className={styles.frameChild} />
              <img
                className={styles.airplaneIcon}
                alt=""
                src="/ionstopwatch.png"
              />
              <div className={styles.frameChild} />
              <img
                className={styles.airplaneIcon}
                alt=""
                src="/ionfastfood.png"
              />
              <div className={styles.frameChild} />
              <img
                className={styles.airplaneIcon}
                alt=""
                src="/icroundairlineseatreclinenormal.png"
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent3}>
              <div className={styles.pmWrapper}>
                <div className={styles.emirates}>12:00 pm</div>
              </div>
              <div className={styles.newarkewrWrapper}>
                <div className={styles.newarkewr}>Newark(EWR)</div>
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.lineIcon} alt="" src="/line-5.png" />
              <img
                className={styles.airplaneIcon1}
                alt=""
                src="/airplane2.png"
              />
              <img className={styles.lineIcon} alt="" src="/line-6.png" />
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.pmWrapper}>
                <div className={styles.emirates}>12:00 pm</div>
              </div>
              <div className={styles.newarkewrWrapper}>
                <div className={styles.newarkewr}>Newark(EWR)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.frameParent6}>
          <div className={styles.emiratesParent}>
            <b className={styles.emiratesA380Airbus}>Pay in full</b>
            <div className={styles.payTheTotal}>
              Pay the total and you are all set
            </div>
          </div>
          <div className={styles.radioButtons}>
            <div className={styles.container}>
              <div className={styles.stateLayer}>
                <img className={styles.airplaneIcon} alt="" src="/icon.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.payPartNowPartLaterParent}>
            <b className={styles.payPartNow}>Pay part now, part later</b>
            <div className={styles.pay20743NowContainer}>
              <p className={styles.pay20743Now}>
                Pay $207.43 now, and the rest ($207.43) will be automatically
                charged to the same payment method on Nov 14, 2022. No extra
                fees.
              </p>
              <p className={styles.pay20743Now}>{` `}</p>
            </div>
            <div className={styles.moreInfo}>More info</div>
          </div>
          <div className={styles.radioButtons}>
            <div className={styles.container}>
              <div className={styles.stateLayer}>
                <img className={styles.airplaneIcon} alt="" src="/icon1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.frameParent9}>
          <div className={styles.visaParent}>
            <img className={styles.visaIcon} alt="" src="/visa.png" />
            <div className={styles.parent}>
              <b className={styles.emiratesA380Airbus}>**** 4321</b>
              <div className={styles.payTheTotal}>02/27</div>
            </div>
          </div>
          <div className={styles.radioButtons}>
            <div className={styles.container}>
              <div className={styles.stateLayer}>
                <img className={styles.airplaneIcon} alt="" src="/icon.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addCircleParent}>
          <input
            className={styles.addCircle}
            type="file"
            defaultChecked={true}
          />
          <div className={styles.addANew}>Add a new card</div>
        </div>
      </div>
    </div>
  );
};

export default TurkeyCard;
