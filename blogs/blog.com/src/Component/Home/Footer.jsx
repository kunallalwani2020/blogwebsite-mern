import React from'react';
import "./Footer.css"
import {Link, useHistory} from"react-router-dom";

const Footer =()=>{
    return(
        <div>
            {/* Site footer */}
<footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify">Bloggers.com  This blog is an expression of our love for Pakistan and gratitude for the privileged life we live here. All our posts are heartfelt and real. We want all of you people to know the real Pakistan; its strength and weaknesses, its hidden gems. We want you to experience the loving, fun, and fulfilling life we live here amongst the most hospitable people in the world. we’ll show you how to have fun the Pakistan way. We promise you that every post of ours will have a unique angle to it and make you live the complete life we live here…</p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul className="footer-links">
          <li><a href="/">Music</a></li>
          <li><a href="/">Movie</a></li>
          <li><a href="/">Sport</a></li>
          <li><a href="/">Tech</a></li>
          <li><a href="/">Fashion</a></li>
          <li><a href="/">Travel</a></li>
        </ul>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
        <Link to = {'/'} style={{textDecoration:"none", color:'inherit'}}>  <li><a>Home</a></li></Link>
        <Link to ={'/aboutus'} style={{textDecoration:"none", color:'inherit'}}>  <li><a href="">Team</a></li></Link>
        <Link to ={'/ContactUS'}style={{textDecoration:"none", color:'inherit'}}>  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contact Us</a></li></Link>
          {/* <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
          <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li> */}
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © 2017 All Rights Reserved by 
          <a href="#"> Bloggers</a>.
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><a className="facebook" href="https://www.facebook.com/profile.php?id=100014877134037"><i className="fa fa-facebook" /></a></li>
          <li><a className="twitter" href="https://github.com/kunallalwani2020"><i className="fa fa-github" /></a></li>
          <li><a className="dribbble" href="https://www.instagram.com/lalwani_kunal/?hl=en"><i className="fa fa-instagram" /></a></li>
          <li><a className="linkedin" href="https://www.linkedin.com/in/kirshan-lal-6b76b1196/"><i className="fa fa-linkedin" /></a></li>   
        </ul>
      </div>
    </div>
  </div>
</footer>
        </div>
    )
}
export default Footer;