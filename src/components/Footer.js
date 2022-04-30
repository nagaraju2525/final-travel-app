import React from 'react'

const Footer = () => {
  return (  <footer id="footer">
    
  <div className="footer-top">
    <div className="container">
      <div className="row">

        <div className="col-lg-4 col-md-6">
          <div className="footer-info">
            <h1>Travel Your Way</h1>
            <p className="pb-3"><em>A journey of a thousand miles begins with a single step.</em></p>
            <p>
              Gachibowli <br></br>
              Hyderabad 500032, INDIA<br></br><br></br>
              <strong>Phone:</strong> +91 7097048694<br></br>
              <strong>Email:</strong> nagraj@gmail.com<br></br>
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Travel Insurance</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Transportation</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Food And Beverage</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Recreation And Entertainment</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Accommodation And Lodging</a></li>
          </ul>
        </div>

        {/* <div className="col-lg-4 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <form action="" method="post">
            <input type="email" name="email"></input><input type="submit" value="Subscribe"></input>
          </form>

        </div> */}

      </div>
    </div>
  </div>

  <div className="container">
    <div className="copyright">
      &copy; Copyright <strong><span>Travel Your Way</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
              Designed by <a href="#!">NAGARAJU</a>
    </div>
  </div>
  
</footer>
   
  )
}

export default Footer