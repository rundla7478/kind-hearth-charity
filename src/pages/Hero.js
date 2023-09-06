import React from 'react';
import {Link} from 'react-router-dom';

function Hero(){

 const heroSlider = [
        {
          'image' : 'images/slide/volunteer-helping-with-donation-box.jpg',
          'heading' : 'Be a Kind Heart',
          'subheading' : 'Professional charity'
        },
        {
          'image' : 'images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg',
          'heading' : 'Non-profit',
          'subheading' : 'You can support us to grow more'
        },
        {
          'image' : 'images/slide/medium-shot-people-collecting-donations.jpg',
          'heading' : 'Humanity',
          'subheading' : 'Please tell your friends about our website'
        }
    ];

    const kindHearths = [
        {
          'image' : 'images/icons/hands.png',
          'title' : 'Become a volunteer'
        },
        {
          'image' : 'images/icons/heart.png',
          'title' : 'Caring Earth'
        },
        {
          'image' : 'images/icons/receive.png',
          'title' : 'Make a Donation'
        },
        {
          'image' : 'images/icons/scholarship.png',
          'title' : 'Scholarship Program'
        }
    ];


    return(
      <>
        <section className="hero-section hero-section-full-height">
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-12 col-12 p-0">
        <div id="hero-slide" className="carousel carousel-fade slide" data-bs-ride="carousel">
        <div className="carousel-inner">
         {heroSlider.map((slider) => (
        <div className="carousel-item active">
        <img src={slider.image} className="carousel-image img-fluid" alt="..." />
        <div className="carousel-caption d-flex flex-column justify-content-end">
        <h1>{slider.heading}</h1>
        <p>{slider.subheading}</p>
        </div>
        </div>
        ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>

        <section className="section-padding">
        <div className="container">
        <div className="row">

        <div className="col-lg-10 col-12 text-center mx-auto">
        <h2 className="mb-5">Welcome to Kind Heart Charity</h2>
        </div>
        
        {kindHearths.map((kingHearth) => (
        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
        <div className="featured-block d-flex justify-content-center align-items-center">
        <Link to="/donate" className="d-block">
        <img src={kingHearth.image} className="featured-block-image img-fluid" alt="" />

        <p className="featured-block-text">{kingHearth.title}</p>
        </Link>
        </div>
        </div>
        ))}

        </div>
        </div>
        </section>
      </>
    );
}
export default Hero;