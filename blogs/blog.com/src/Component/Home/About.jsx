import React from 'react'
import "./about.css"
import kunal from  '../pics/IMG_20191212_134654.jpg';
import zaeem from'../pics/zaemm.jpg';
import arslan from'../pics/IMG_20211214_001801_496.jpg';
import hashim from'../pics/hashim.jpg';
function About() {
    return (
        <section id="team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2>Meet Our Team</h2>
             </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="member-img">
                  <img src={kunal} className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>KIRSHAN LAL</h4>
                  <span>MERN DEVELOPER </span>
                  <div className="social-links">
                    <a href="https://www.facebook.com/profile.php?id=100014877134037"><i className="fab fa-facebook-f" /></a>
                    <a href="https://github.com/kunallalwani2020"><i className="fab fa-github" /></a>
                    <a href="https://www.instagram.com/lalwani_kunal/"><i className="fab fa-linkedin-in" /></a>
                    {/* <a href="#"><i className="fab fa-pinterest-p" /></a> */}
                    <a href="https://www.instagram.com/lalwani_kunal/"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="member-img">
                  <img src={zaeem} className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>ZAEEM TARIQ</h4>
                  <span>GRAPHIC DESIGNER</span>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                    <a href="#"><i className="fab fa-pinterest-p" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="member-img">
                  <img src={hashim} className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>MUHAMMAD HASHIM</h4>
                  <span>PROGRAMMER</span>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                    <a href="#"><i className="fab fa-pinterest-p" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="member-img">
                  <img src={arslan} className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>MUHAMMAD ARSLAN</h4>
                  <span>ANDRIOD DEVELOPER</span>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                    <a href="#"><i className="fab fa-pinterest-p" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About
