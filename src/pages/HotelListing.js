import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PhotoGalleryContainer from "../components/PhotoGalleryContainer";
import CardContainer2 from "../components/CardContainer2";
import OverviewContainer from "../components/OverviewContainer";
import AvailableRoomsContainer from "../components/AvailableRoomsContainer";
import LocationMapContainer from "../components/LocationMapContainer";
import RatingCard from "../components/RatingCard";
import styles from "./HotelListing.module.css";

const HotelListing = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/flights-search");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/hotel-search");
  }, [navigate]);

  return (
    <div className={styles.hotelListing}>
      <div className={styles.headerLoggedIn}>
        <div className={styles.headerLoggedInChild} />
        <div className={styles.headerLoggedInItem} />
        <div className={styles.headerLoggedInInner} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
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
          <img className={styles.logoIcon} alt="" src="/logo6.png" />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.heartParent}>
              <img className={styles.airplaneIcon} alt="" src="/heart4.png" />
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
      <PhotoGalleryContainer />
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
      <CardContainer2 />
      <div className={styles.rectangleParent}>
        <div className={styles.frameInner} />
        <OverviewContainer />
        <div className={styles.frameInner} />
        <AvailableRoomsContainer />
        <div className={styles.frameInner} />
        <LocationMapContainer />
        <div className={styles.frameInner} />
        <div className={styles.amenitiesParent}>
          <b className={styles.amenities}>Amenities</b>
          <div className={styles.frameParent1}>
            <div className={styles.logoParent}>
              <div className={styles.mdipoolParent}>
                <img
                  className={styles.airplaneIcon}
                  alt=""
                  src="/mdipool.png"
                />
                <div className={styles.turkey}>Outdoor pool</div>
              </div>
              <div className={styles.mdipoolParent}>
                <img
                  className={styles.airplaneIcon}
                  alt=""
                  src="/mdipool.png"
                />
                <div className={styles.turkey}>Indoor pool</div>
              </div>
              <div className={styles.mdipoolParent}>
                <img
                  className={styles.airplaneIcon}
                  alt=""
                  src="/materialsymbolssparounded.png"
                />
                <div className={styles.turkey}>Spa and wellness center</div>
              </div>
              <div className={styles.mdipoolParent}>
                <img
                  className={styles.airplaneIcon}
                  alt=""
                  src="/icroundrestaurant.png"
                />
                <div className={styles.turkey}>Restaurant</div>
              </div>
              <div className={styles.mdipoolParent}>
                <img
                  className={styles.airplaneIcon}
                  alt=""
                  src="/materialsymbolsroomservicerounded.png"
                />
                <div className={styles.turkey}>Room service</div>
              </div>
            </div>
            <div className={styles.logoParent}>
              <div className={styles.mdipoolParent}>
                <img
                  className={styles.airplaneIcon}
                  alt=""
                  src="/makifitnesscentre.png"
                />
                <div className={styles.turkey}>Fitness center</div>
              </div>
              <div className={styles.mdipoolParent}>
                <img
                  className={styles.airplaneIcon}
                  alt=""
                  src="/ionwine.png"
                />
                <div className={styles.turkey}>Bar/Lounge</div>
              </div>
              <div className={styles.mdipoolParent}>
                <img className={styles.airplaneIcon} alt="" src="/wifi3.png" />
                <div className={styles.turkey}>Free Wi-Fi</div>
              </div>
              <div className={styles.mdipoolParent}>
                <img
                  className={styles.airplaneIcon}
                  alt=""
                  src="/breakfast.png"
                />
                <div className={styles.turkey}>Tea/coffee machine</div>
              </div>
              <div className={styles.more}>+24 more</div>
            </div>
          </div>
        </div>
        <div className={styles.frameInner} />
        <RatingCard />
      </div>
      <div className={styles.footer}>
        <div className={styles.frameParent4}>
          <div className={styles.frameParent5}>
            <div className={styles.subscribeNewsletterParent}>
              <b className={styles.subscribeNewsletter}>Subscribe Newsletter</b>
              <div className={styles.frameParent6}>
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
                            <div className={styles.amenities}>
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
              src="/emojionev1openmailboxwithloweredflag3.png"
            />
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.logoParent}>
              <img className={styles.logoIcon1} alt="" src="/logo7.png" />
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
                  src="/akariconsyoutubefill2.png"
                />
                <img
                  className={styles.akarIconsfacebookFill}
                  alt=""
                  src="/antdesigninstagramfilled.png"
                />
              </div>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.amenities}>Our Destinations</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Canada</div>
                  <div className={styles.canada}>Alaksa</div>
                  <div className={styles.canada}>France</div>
                  <div className={styles.canada}>Iceland</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.amenities}>Our Activities</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Northern Lights</div>
                  <div className={styles.canada}>{`Cruising & sailing`}</div>
                  <div className={styles.canada}>Multi-activities</div>
                  <div className={styles.canada}>Kayaing</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.amenities}>Travel Blogs</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Bali Travel Guide</div>
                  <div className={styles.canada}>Sri Lanks Travel Guide</div>
                  <div className={styles.canada}>Peru Travel Guide</div>
                  <div className={styles.canada}>Bali Travel Guide</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.amenities}>About Us</b>
                <div className={styles.canadaParent}>
                  <div className={styles.canada}>Our Story</div>
                  <div className={styles.canada}>Work with us</div>
                </div>
              </div>
              <div className={styles.ourDestinationsParent}>
                <b className={styles.amenities}>Contact Us</b>
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

export default HotelListing;
