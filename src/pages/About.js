import React from 'react';

function About(){
  const aboutImage = {
         'rightImage' : 'images/group-people-volunteering-foodbank-poor-people.jpg'
  }

  const ourStory = {
    'heading': 'Our Story',
    'subheading' : 'Kind Heart Charity, Non-Profit Organization',
    'content' : 'This is a Bootstrap 5.2.2 CSS template for charity organization websites. You can feel free to use it. Please tell your friends about TemplateMo website. Thank you. HTML CSS files updated on 20 Oct 2022.'
  }

  const teamAbout = [
       {
         'name':          'Sandy Chan',
         'designation':   'Co-Founding Partner',
         'bioOne':        'Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based',
         'bioTwo':        'You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.',
         'twitterLink':   'https://twitter.com/',
         'facebookLink':  'https://www.facebook.com/',
         'instagramLink': 'https://www.instagram.com/',
         'image':         'images/portrait-volunteer-who-organized-donations-charity.jpg'
       }
  ]


	return(
       <>
         <section className="section-padding section-bg" id="section_2">
        <div className="container">
        <div className="row">

        <div className="col-lg-6 col-12 mb-5 mb-lg-0">
        <img src={aboutImage.rightImage} className="custom-text-box-image img-fluid" alt="" />
        </div>

        <div className="col-lg-6 col-12">
        <div className="custom-text-box">
        <h2 className="mb-2">{ourStory.heading}</h2>

        <h5 className="mb-3">{ourStory.subheading}</h5>

        <p className="mb-0">{ourStory.content}</p>
        </div>

        <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
        <div className="custom-text-box mb-lg-0">
        <h5 className="mb-3">Our Mission</h5>

        <p>Sed leo nisl, posuere at molestie ac, suscipit auctor quis metus</p>

        <ul className="custom-list mt-2">
        <li className="custom-list-item d-flex">
        <i className="bi-check custom-text-box-icon me-2"></i>
        Charity Theme
        </li>

        <li className="custom-list-item d-flex">
        <i className="bi-check custom-text-box-icon me-2"></i>
        Semantic HTML
        </li>
        </ul>
        </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12">
        <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
        <div className="counter-thumb"> 
        <div className="d-flex">
        <span className="counter-number" data-from="1" data-to="2009" data-speed="1000"></span>
        <span className="counter-number-text"></span>
        </div>

        <span className="counter-text">Founded</span>
        </div> 

        <div className="counter-thumb mt-4"> 
        <div className="d-flex">
        <span className="counter-number" data-from="1" data-to="120" data-speed="1000"></span>
        <span className="counter-number-text">B</span>
        </div>

        <span className="counter-text">Donations</span>
        </div> 
        </div>
        </div>
        </div>
        </div>

        </div>
        </div>
        </section>


        <section className="about-section section-padding">
        <div className="container">
        {teamAbout.map((team) => (
        <div className="row">
        <div className="col-lg-6 col-md-5 col-12">
        <img src={team.image} className="about-image ms-lg-auto bg-light shadow-lg img-fluid" alt="" />
        </div>

        <div className="col-lg-5 col-md-7 col-12">
        <div className="custom-text-block">
        <h2 className="mb-0">{team.name}</h2>

        <p className="text-muted mb-lg-4 mb-md-4">{team.designation}</p>

        <p>{team.bioOne}</p>

        <p>{team.bioTwo}</p>

        <ul className="social-icon mt-4">
        <li className="social-icon-item">
        <a href={team.twitterLink} className="social-icon-link bi-twitter"></a>
        </li>

        <li className="social-icon-item">
        <a href={team.facebookLink} className="social-icon-link bi-facebook"></a>
        </li>

        <li className="social-icon-item">
        <a href={team.instagramLink} className="social-icon-link bi-instagram"></a>
        </li>
        </ul>
        </div>
        </div>
        </div>
          ))}
        </div>
        </section>

        <section className="cta-section section-padding section-bg">
        <div className="container">
        <div className="row justify-content-center align-items-center">

        <div className="col-lg-5 col-12 ms-auto">
        <h2 className="mb-0">Make an impact. <br /> Save lives.</h2>
        </div>

        <div className="col-lg-5 col-12">
        <a href="#" className="me-4">Make a donation</a>

        <a href="#section_4" className="custom-btn btn smoothscroll">Become a volunteer</a>
        </div>

        </div>
        </div>
        </section>
       </>
	);
}
export default About;