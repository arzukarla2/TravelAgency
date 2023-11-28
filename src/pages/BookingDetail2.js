import { useCallback } from "react";
import TurkeyCard from "../components/TurkeyCard";
import EconomyCard from "../components/EconomyCard";
import { useNavigate } from "react-router-dom";
import styles from "./BookingDetail2.module.css";

const BookingDetail2 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/flights-search");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/hotel-search");
  }, [navigate]);

  return (
    <div className={styles.bookingDetail2}>
      <div className={styles.turkeyParent}>
        <div className={styles.turkey}>Turkey</div>
        <img
          className={styles.chevronForwardIcon}
          alt=""
          src="/chevron-forward.png"
        />
        <div className={styles.turkey}>Istanbul</div>
        <img
          className={styles.chevronForwardIcon}
          alt=""
          src="/chevron-forward.png"
        />
        <div className={styles.cvkParkBosphorus}>
          CVK Park Bosphorus Hotel Istanbul
        </div>
      </div>
      <div className={styles.frameParent}>
        <TurkeyCard />
        <EconomyCard />
      </div>
      <div className={styles.headerLoggedIn}>
        <div className={styles.headerLoggedInChild} />
        <div className={styles.headerLoggedInItem} />
        <div className={styles.headerLoggedInInner} />
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <button
              className={styles.airplaneParent}
              onClick={onFrameButtonClick}
            >
              <img
                className={styles.airplaneIcon}
                alt=""
                src="/airplane3.png"
              />
              <div className={styles.findFlight}>Find Flight</div>
            </button>
            <button
              className={styles.airplaneParent}
              onClick={onFrameButton1Click}
            >
              <img className={styles.airplaneIcon} alt="" src="/ionbed2.png" />
              <div className={styles.findFlight}>Find Stays</div>
            </button>
          </div>
          <img className={styles.logoIcon} alt="" src="/logo2.png" />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.heartParent}>
              <img className={styles.airplaneIcon} alt="" src="/heart.png" />
              <div className={styles.favourites}>Favourites</div>
            </div>
            <div className={styles.favourites}>|</div>
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-1@2x.png" />
            <div className={styles.johnD}>John D.</div>
            <img className={styles.frameItem} alt="" src="/ellipse-4.png" />
            <img
              className={styles.arrowDownIcon}
              alt=""
              src="/arrow-down.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.subscribeNewsletterParent}>
              <b className={styles.subscribeNewsletter}>Subscribe Newsletter</b>
              <div className={styles.frameParent4}>
                <div className={styles.theTravelParent}>
                  <b className={styles.theTravel}>The Travel</b>
                  <div className={styles.getInspiredReceive}>
                    Get inspired! Receive travel discounts, tips and behind the
                    scenes stories.
                  </div>
                </div>
                <div className={styles.textFieldParent}>
                  <div className={styles.textField}>
                    <div className={styles.textField1}>
                      <div className={styles.stateLayer}>
                        <div className={styles.content}>
                          <div className={styles.labelText}>
                            <div className={styles.ourDestinations}>
                              Your email address
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.supportingText}>
                      <div className={styles.supportingText1}>
                        Supporting text
                      </div>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.styleLayer}>
                      <div className={styles.favourites}>Subscribe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.emojioneV1openMailboxWithIcon}
              alt=""
              src="/emojionev1openmailboxwithloweredflag1.png"
            />
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.logoParent}>
              <img className={styles.logoIcon1} alt="" src="/logo3.png" />
              <div className={styles.akarIconsfacebookFillParent}>
                <img
                  className={styles.akarIconsfacebookFill}
                  alt=""
                  src="/akariconsfacebookfill.png"
                />
                <img
                  className={styles.akarIconsfacebookFill}
                  alt=""
                  src="/akariconstwitterfill1.png"
                />
                <img
                  className={styles.akarIconsfacebookFill}
                  alt=""
                  src="/akariconsyoutubefill1.png"
                />
                <img
                  className={styles.akarIconsfacebookFill}
                  alt=""
                  src="/antdesigninstagramfilled.png"
                />
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.ourDestinations}>Our Destinations</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Canada</div>
                  <div className={styles.canada}>Alaksa</div>
                  <div className={styles.canada}>France</div>
                  <div className={styles.canada}>Iceland</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.ourDestinations}>Our Activities</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Northern Lights</div>
                  <div className={styles.canada}>{`Cruising & sailing`}</div>
                  <div className={styles.canada}>Multi-activities</div>
                  <div className={styles.canada}>Kayaing</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.ourDestinations}>Travel Blogs</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Bali Travel Guide</div>
                  <div className={styles.canada}>Sri Lanks Travel Guide</div>
                  <div className={styles.canada}>Peru Travel Guide</div>
                  <div className={styles.canada}>Bali Travel Guide</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.ourDestinations}>About Us</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Our Story</div>
                  <div className={styles.canada}>Work with us</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.ourDestinations}>Contact Us</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Our Story</div>
                  <div className={styles.canada}>Work with us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail2;
