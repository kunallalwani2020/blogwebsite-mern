import React from "react"
import "./contact.css";


const Contact=()=>{
    return(
        <div>
            <div>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossOrigin="anonymous" />
  <div className="container-fluid">
    <h1 className="text-center">Contact Address</h1>
    <hr />
    <div className="row">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3807536283152!2d67.0017275143198!3d24.85084215176467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e03e02fabc1%3A0x96c129db3ee25a57!2sSindh%20Madressa-tul-Islam%20University%2C%20City%20Campus%2C%20Karachi!5e0!3m2!1sen!2s!4v1639586992178!5m2!1sen!2s"  width="100%" height={320} frameBorder={0} style={{"border":"0"}} allowFullScreen />
    </div>
    <div className="row text-center">
      <div className="col-4 box1 pt-4">
        <a href="tel:+123456789"><i className="fas fa-phone fa-3x" />
          <h3 className="d-none d-lg-block d-xl-block">Phone</h3>
          <p className="d-none d-lg-block d-xl-block">+923333013245</p></a>
      </div>
      <div className="col-4 box2 pt-4">
        <a href><i className="fas fa-home fa-3x" />
          <h3 className="d-none d-lg-block d-xl-block">Address</h3>
          <p className="d-none d-lg-block d-xl-block">Sindh Madresstual Islam University Karachi</p></a>
      </div>
      <div className="col-4 box3 pt-4">
        <a href="mailto:test@test.com"><i className="fas fa-envelope fa-3x" />
          <h3 className="d-none d-lg-block d-xl-block">E-mail</h3>
          <p className="d-none d-lg-block d-xl-block">kunallalwani2019@gmail.com</p></a>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Contact;