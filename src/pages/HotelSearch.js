import { useCallback } from "react";
import RecentSearchesContainer1 from "../components/RecentSearchesContainer1";
import TravelCardForm2 from "../components/TravelCardForm2";
import TravelCardForm from "../components/TravelCardForm";
import { useNavigate } from "react-router-dom";
import FlightSearchFormContainer1 from "../components/FlightSearchFormContainer1";
import CardContainer1 from "../components/CardContainer1";
import styles from "./HotelSearch.module.css";

const HotelSearch = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/flights-search");
  }, [navigate]);

  return (
    <div className={styles.hotelSearch}>
      <div className={styles.hotelSearchInner}>
        <div className={styles.makeYourTravelWhishlistWeParent}>
          <b className={styles.makeYourTravel}>
            Make your travel whishlist, we’ll do the rest
          </b>
          <div className={styles.specialOffersTo}>
            Special offers to suit your plan
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <RecentSearchesContainer1 />
        <TravelCardForm2 />
        <TravelCardForm />
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
            <div className={styles.ionbedParent}>
              <img className={styles.airplaneIcon} alt="" src="/ionbed2.png" />
              <div className={styles.findStays}>Find Stays</div>
            </div>
          </div>
          <img className={styles.logoIcon} alt="" src="/logo4.png" />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.ionbedParent}>
              <img className={styles.airplaneIcon} alt="" src="/heart.png" />
              <div className={styles.findStays}>Favourites</div>
            </div>
            <div className={styles.findStays}>|</div>
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
      <FlightSearchFormContainer1 />
      <CardContainer1 />
      <div className={styles.footer}>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.subscribeNewsletterParent}>
              <b className={styles.subscribeNewsletter}>Subscribe Newsletter</b>
              <div className={styles.frameParent4}>
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
                      <div className={styles.findStays}>Subscribe</div>
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

export default HotelSearch;
