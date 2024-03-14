import React from "react";
import "./Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";
import Service01 from "../../logiPics/3803195.jpg";
import Service02 from "../../logiPics/2121.jpg";
import Service03 from "../../logiPics/6232748.jpg";
import Service04 from "../../logiPics/6333.jpg";
import Service05 from "../../logiPics/7466881.jpg";
import Service06 from "../../logiPics/20341.jpg";

import Beitbridge from '../../logiPics/beitbridge.jpg';
import Bulawayo from '../../logiPics/bulawayo.jpg';
import Gwanda from '../../logiPics/Gwanda.jpg';
import Harare from '../../logiPics/harare.jpg';
import Joburg from '../../logiPics/joburg.jpg';
import Limpopo from '../../logiPics/limpopo.jpg';
import Pretoria from '../../logiPics/pretoria.jpg';
import Plumtree from '../../logiPics/masvingo.jpg'

function Home() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewCard">
      <div id="reviewCardInner">
        <h1>Skinny Tours</h1>
        <p>
          Where Efficiency Meets Reliability - Delivering Solutions for All South Africa To Zimbabwe
          Goods Transportation.
        </p>
      </div>
    </div>,
    <div id="reviewCard01">
      <div id="reviewCardInner">
        <h1>South Africa To Zimbabwe Malaicha</h1>
        <p>
          We pick your goods and deliver them safely to your relatives back in Zimbabwe
        </p>
      </div>
    </div>,
    <div id="reviewCard02">
      <div id="reviewCardInner">
        <h1>Zimbabwe To South Africa Malaicha</h1>
        <p>
          Whatever the parcel may be, Leave the logistics to us
        </p>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };

  const stopsItems = [
    <div id="partnerCard">
      <h4>Johannesburg</h4>
      <div id="partnerCardBox">
        <img src={Joburg} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
    <h4>Pretoria</h4>
      <div id="partnerCardBox">
        <img src={Pretoria} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
    <h4>Limpopo</h4>
      <div id="partnerCardBox">
        <img src={Limpopo} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
    <h4>Beitbridge Border Post</h4>
      <div id="partnerCardBox">
        <img src={Beitbridge} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
    <h4>Gwanda Town</h4>
      <div id="partnerCardBox">
        <img src={Gwanda} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
    <h4>Bulawayo Town</h4>
      <div id="partnerCardBox">
        <img src={Bulawayo} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
    <h4>Harare Town</h4>
      <div id="partnerCardBox">
        <img src={Harare} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
    <h4>Plumtree Town</h4>
      <div id="partnerCardBox">
        <img src={Plumtree} alt="" />
      </div>
    </div>,
  ];
  const stopsResponsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };


  return (
    <>
      <div>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          disableButtonsControls={true}
          disableDotsControls={true}
          infinite={true}
          autoPlayInterval={5000}
          responsive={responsive}
          animationType="fadeout"
        />
      </div>
      <div className="container" id="homePage">
        <div class="row" id="homePageBox">
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-map"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                  24, 10th Ave<br></br> Edenvale, Gauteng 
                </small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard" class="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-calendar"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                  Mon ~ Sunday<br></br>Open Holidays
                </small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard" class="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-phone"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                  +27 10 023 4680<br></br>+27 63 066 8806<br></br>
                </small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard" class="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-envelope"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                  dumie@skinnytours.co.za<br></br>operations@skinnytours.co.za
                  <br></br>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div class="row" id="serviceWrap">
          <h4>Malaicha & Cargo Carrier Services</h4>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service01} alt="" />
              <h5>Goods Picking Up and Packing</h5>
              <p>
                This process involves picking up the goods from a client, wrapping them and packing in our truck. 
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service04} alt="" />
              <h5>Complete Goods Double Check</h5>
              <p>
                We double check your goods to ensure every thing you gave us is on paper and in the truck.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service02} alt="" />
              <h5>On Transit</h5>
              <p>
                Our responsible drivers and carriers therefore transport your goods from pick-up point to the destination
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service05} alt="" />
              <h5>En Route Deliveries & Pick Ups</h5>
              <p>
                If our client has any deliveries or pick up on route to destination, we'll gladly do that
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service03} alt="" />
              <h5>On Arrival</h5>
              <p>
                We double check our goods-sheet against what arrives at the door of each customer
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service06} alt="" />
              <h5>Delivery</h5>
              <p>
                After everything is cross-checked, we deliver the goods safely to our client
              </p>
            </div>
          </div>
        </div>
        <div id="offer">
          <h4>Our Pick Up or Delivery Stops</h4>
          <div>
            <AliceCarousel
              mouseTracking
              items={stopsItems}
              autoPlay
              disableButtonsControls={true}
              disableDotsControls={true}
              infinite={true}
              autoPlayInterval={5000}
              responsive={stopsResponsive}
              animationType="fadeout"
            />
          </div>
        </div>
       
        <div id="mission">
          <h4>
            Empowering Businesses,
            <br /> Connecting Communities ,<br /> Join Us on the Journey to
            Greater Efficiency.
          </h4>
        </div>
        <div id="homeContact">
          <div class="row">
            <div class="col-lg-8 col-md-4">
              <form class="row g-3" id="homeContactForm">
                <h4>Get InTouch With Us</h4>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Name
                  </label>
                  <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Surname
                  </label>
                  <input type="text" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Email
                  </label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Phone Number
                  </label>
                  <input type="number" class="form-control" id="inputAddress" />
                </div>

                <div class="col-12">
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeContactCard">
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-map"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      24, 10th Avenue<br></br>: Edenvale, Gauteng 
                    </p>
                  </div>
                </div>
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-calendar"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      Mon ~ Sunday<br></br>Open Holidays
                    </p>
                  </div>
                </div>
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-phone"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      +27 10 023 4680<br></br>+27 63 066 8806<br></br>
                    </p>
                  </div>
                </div>
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-envelope"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      dumie@skinnytours.co.za<br></br> operations@skinnytours.co.za
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="map">
          <h4>Find Us Here</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.506535529691!2d28.15438977541336!3d-26.147627977111508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95124b62a12945%3A0x9f4cd9dcfde71324!2s24%2010th%20Ave%2C%20Edenvale%2C%201609!5e0!3m2!1sen!2sza!4v1710406868302!5m2!1sen!2sza" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      <Footer/>
    </>
  );
}

export default Home;
