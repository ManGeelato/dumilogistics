import React from "react";
import "../about/About.css";
import Footer from "../../components/footer/Footer";

function Contact() {
  return (
    <>
      <div className="container-fluid" id="aboutPage">
        <div id="aboutPageBox">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="container" id="homePage">
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
  )
}

export default Contact