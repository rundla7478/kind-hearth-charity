import React from 'react';

function Testimonial(){
    return(
       <>
         <section className="testimonial-section section-padding section-bg">
        <div className="container">
        <div className="row">

        <div className="col-lg-8 col-12 mx-auto">
        <h2 className="mb-lg-3">Happy Customers</h2>

        <div id="testimonial-carousel" className="carousel carousel-fade slide" data-bs-ride="carousel">

        <div className="carousel-inner">
        <div className="carousel-item active">
        <div className="carousel-caption">
        <h4 className="carousel-title">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme</h4>

        <small className="carousel-name"><span className="carousel-name-title">Maria</span>, Boss</small>
        </div>
        </div>

        <div className="carousel-item">
        <div className="carousel-caption">
        <h4 className="carousel-title">Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci</h4>

        <small className="carousel-name"><span className="carousel-name-title">Thomas</span>, Partner</small>
        </div>
        </div>

        <div className="carousel-item">
        <div className="carousel-caption">
        <h4 className="carousel-title">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme</h4>

        <small className="carousel-name"><span className="carousel-name-title">Jane</span>, Advisor</small>
        </div>
        </div>

        <div className="carousel-item">
        <div className="carousel-caption">
        <h4 className="carousel-title">Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci</h4>

        <small className="carousel-name"><span className="carousel-name-title">Bob</span>, Entreprenuer</small>
        </div>
        </div>

        <ol className="carousel-indicators">
        <li data-bs-target="#testimonial-carousel" data-bs-slide-to="0" className="active">
        <img src="images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg" className="img-fluid rounded-circle avatar-image" alt="avatar" />
        </li>

        <li data-bs-target="#testimonial-carousel" data-bs-slide-to="1" className="">
        <img src="images/avatar/portrait-young-redhead-bearded-male.jpg" className="img-fluid rounded-circle avatar-image" alt="avatar" />
        </li>

        <li data-bs-target="#testimonial-carousel" data-bs-slide-to="2" className="">
        <img src="images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg" className="img-fluid rounded-circle avatar-image" alt="avatar" />
        </li>

        <li data-bs-target="#testimonial-carousel" data-bs-slide-to="3" className="">
        <img src="images/avatar/studio-portrait-emotional-happy-funny.jpg" className="img-fluid rounded-circle avatar-image" alt="avatar" />
        </li>
        </ol>

        </div>
        </div>
        </div>

        </div>
        </div>
        </section>
       </>
    );
}
export default Testimonial;