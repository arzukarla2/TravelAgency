import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FlightFormContainer from "../components/FlightFormContainer";
import SignupSection from "../components/SignupSection";
import TripPlannerContainer from "../components/TripPlannerContainer";
import ReviewsSection from "../components/ReviewsSection";
import FlightsCard from "../components/FlightsCard";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onShowFlightsClick = useCallback(() => {
    navigate("/flight-listing");
  }, [navigate]);

  const onShowHotelClick = useCallback(() => {
    navigate("/hotel-listing-1");
  }, [navigate]);

  return (
    <div className={styles.landingPage}>
      <img
        className={styles.landingPageChild}
        alt=""
        src="/rectangle-31@2x.png"
      />
      <div className={styles.landingPageItem} />
      <FlightFormContainer />
      <SignupSection />
      <div className={styles.frameParent}>
        <div className={styles.helpingOthersParent}>
          <b className={styles.helpingOthers}>Helping Others</b>
          <b className={styles.liveTravel}>{`Live & Travel`}</b>
        </div>
        <div className={styles.specialOffersTo}>
          Special offers to suit your plan
        </div>
      </div>
      <TripPlannerContainer />
      <ReviewsSection />
      <div className={styles.frameGroup}>
        <FlightsCard
          imageDimensions="/rectangle-40@2x.png"
          searchResultsImageUrl="Flights"
          popularDestinationsText={`Search Flights & Places Hire to our most popular destinations`}
          iconImageUrl="/paper-plane1.png"
          actionButtonText="Show Filghts"
          onShowFlightsClick={onShowFlightsClick}
        />
        <FlightsCard
          imageDimensions="/rectangle-411@2x.png"
          searchResultsImageUrl="Hotels"
          popularDestinationsText={`Search hotels & Places Hire to our most popular destinations`}
          iconImageUrl="/paper-plane2.png"
          actionButtonText="Show Hotels"
          propBorderRadius="0px 0px var(--br-xl) var(--br-xl)"
          onShowFlightsClick={onShowHotelClick}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.subscribeNewsletterParent}>
              <b className={styles.subscribeNewsletter}>Subscribe Newsletter</b>
              <div className={styles.frameParent1}>
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
                            <div className={styles.helpingOthers}>
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
                  <button className={styles.button}>
                    <div className={styles.styleLayer}>
                      <div className={styles.button1}>Subscribe</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <img
              className={styles.emojioneV1openMailboxWithIcon}
              alt=""
              src="/emojionev1openmailboxwithloweredflag.png"
            />
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.logoParent}>
              <img className={styles.logoIcon} alt="" src="/logo1.png" />
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
            <div className={styles.frameParent3}>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.helpingOthers}>Our Destinations</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Canada</div>
                  <div className={styles.canada}>Alaksa</div>
                  <div className={styles.canada}>France</div>
                  <div className={styles.canada}>Iceland</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.helpingOthers}>Our Activities</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Northern Lights</div>
                  <div className={styles.canada}>{`Cruising & sailing`}</div>
                  <div className={styles.canada}>Multi-activities</div>
                  <div className={styles.canada}>Kayaing</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.helpingOthers}>Travel Blogs</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Bali Travel Guide</div>
                  <div className={styles.canada}>Sri Lanks Travel Guide</div>
                  <div className={styles.canada}>Peru Travel Guide</div>
                  <div className={styles.canada}>Bali Travel Guide</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.helpingOthers}>About Us</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Our Story</div>
                  <div className={styles.canada}>Work with us</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.helpingOthers}>Contact Us</b>
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

export default LandingPage;
