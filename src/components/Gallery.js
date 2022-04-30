import React from 'react'
import './Gallery.css'
import Slide from 'react-reveal/Slide';
const Gallery = () => {
    
  return (
    <section id="portfolio" className="portfolio">
      
    <div className="container">
      <div className="section-title" data-aos="fade-in" data-aos-delay="100">
       <center> <h2>Gallery</h2></center>
        <p>The world is a book, and those who do not travel read only a page.” – said Saint Augustine. Travelling can teach you more than any university course. You learn about the culture of the country you visit. If you talk to locals, you will likely learn about their thinking, habits, traditions and history as well.</p>
      </div>

      <div className="row" data-aos="fade-in">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="img/portfolio/adventure-name2.jpg" className="img-fluid" alt=""></img>
            <div className="portfolio-links">
              <a href="img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="img/portfolio/boy-image.jpg" className="img-fluid" alt=""></img>
            <div className="portfolio-links">
              <a href="img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="img/portfolio/mountain.jpg" className="img-fluid" alt=""></img>
            <div className="portfolio-links">
              <a href="img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="img/portfolio/train2.jpg" className="img-fluid" alt=""></img>
            <div className="portfolio-links">
              <a href="img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="img/portfolio/golden-temple.jpg" className="img-fluid" alt=""></img>
            <div className="portfolio-links">
              <a href="img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="img/portfolio/beach2.jpg" className="img-fluid" alt=""></img>
            <div className="portfolio-links">
              <a href="img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="img/portfolio/adventure-two.jpg" className="img-fluid" alt=""></img>
            <div className="portfolio-links">
              <a href="img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="img/portfolio/girl-adventure'2.jpg" className="img-fluid" alt=""></img>
            <div className="portfolio-links">
              <a href="img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="img/portfolio/tajmahal2.jpg" className="img-fluid" alt=""></img>
            <div className="portfolio-links">
              <a href="img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

      </div>

    </div>
   
  </section>
    
  )
}

export default Gallery