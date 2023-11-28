import { useCallback } from "react";
import FlightSearchFormContainer from "../components/FlightSearchFormContainer";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import TravelCardForm1 from "../components/TravelCardForm1";
import TravelCardForm from "../components/TravelCardForm";
import styles from "./FlightsSearch.module.css";

const FlightsSearch = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/hotel-search");
  }, [navigate]);

  return (
    <div className={styles.flightsSearch}>
      <div className={styles.flightsSearchInner}>
        <div className={styles.makeYourTravelWhishlistWeParent}>
          <b className={styles.makeYourTravel}>
            Make your travel whishlist, we’ll do the rest
          </b>
          <div className={styles.specialOffersTo}>
            Special offers to suit your plan
          </div>
        </div>
      </div>
      <FlightSearchFormContainer />
      <div className={styles.headerDefault}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <button className={styles.airplaneParent}>
              <img className={styles.airplaneIcon} alt="" src="/airplane.png" />
              <div className={styles.findFlight}>Find Flight</div>
            </button>
            <button
              className={styles.airplaneParent}
              onClick={onFrameButton1Click}
            >
              <img className={styles.airplaneIcon} alt="" src="/ionbed.png" />
              <div className={styles.findFlight}>Find Stays</div>
            </button>
          </div>
          <img className={styles.logoIcon} alt="" src="/logo5.png" />
        </div>
        <div className={styles.loginParent}>
          <div className={styles.login}>Login</div>
          <div className={styles.patientButton}>
            <div className={styles.stateLayer}>
              <div className={styles.login}>Sign up</div>
            </div>
          </div>
        </div>
        <div className={styles.headerDefaultChild} />
        <div className={styles.headerDefaultItem} />
      </div>
      <div className={styles.frameContainer}>
        <SectionCard />
        <TravelCardForm1 />
        <TravelCardForm />
      </div>
      <div className={styles.footer}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.subscribeNewsletterParent}>
              <b className={styles.subscribeNewsletter}>Subscribe Newsletter</b>
              <div className={styles.frameParent2}>
                <div className={styles.makeYourTravelWhishlistWeParent}>
                  <b className={styles.theTravel}>The Travel</b>
                  <div className={styles.getInspiredReceive}>
                    Get inspired! Receive travel discounts, tips and behind the
                    scenes stories.
                  </div>
                </div>
                <div className={styles.textFieldParent}>
                  <div className={styles.textField}>
                    <div className={styles.textField1}>
                      <div className={styles.stateLayer1}>
                        <div className={styles.content}>
                          <div className={styles.labelText1}>
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
                      <div className={styles.login}>Subscribe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.emojioneV1openMailboxWithIcon}
              alt=""
              src="/emojionev1openmailboxwithloweredflag2.png"
            />
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.logoParent}>
              <img className={styles.logoIcon1} alt="" src="/logo1.png" />
              <div className={styles.akarIconsfacebookFillParent}>
                <img
                  className={styles.akarIconsfacebookFill}
                  alt=""
                  src="/akariconsfacebookfill.png"
                />
                <img
                  className={styles.akarIconsfacebookFill}
                  alt=""
                  src="/akariconstwitterfill.png"
                />
                <img
                  className={styles.akarIconsfacebookFill}
                  alt=""
                  src="/akariconsyoutubefill.png"
                />
                <img
                  className={styles.akarIconsfacebookFill}
                  alt=""
                  src="/antdesigninstagramfilled.png"
                />
              </div>
            </div>
            <div className={styles.frameParent4}>
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

export default FlightsSearch;
