import React from 'react';
import { Link } from 'react-router-dom';

function Causes(){

  const ourCauses = [
       {
         'title': 'Children Education',
         'content': 'Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito',
         'image': 'images/causes/group-african-kids-paying-attention-class.jpg',
         'valuenow': '75',
         'raised': '18,500',
         'goal': '32,000'
       },
       {
         'title': 'Poverty Development',
         'content': 'Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus tempor',
         'image': 'images/causes/poor-child-landfill-looks-forward-with-hope.jpg',
         'valuenow': '50',
         'raised': '27,600',
         'goal': '60,000'
       },
       {
         'title': 'Supply drinking water',
         'content': 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
         'image': 'images/causes/african-woman-pouring-water-recipient-outdoors.jpg',
         'valuenow': '100',
         'raised': '84,600',
         'goal': '100,000'
       }
  ]

   return(
       <>
        <section className="section-padding" id="section_3">
        <div className="container">
        <div className="row">

        <div className="col-lg-12 col-12 text-center mb-4">
        <h2>Our Causes</h2>
        </div>
        
        {ourCauses.map((cause) => (
        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
        <div className="custom-block-wrap">
        <img src={cause.image} className="custom-block-image img-fluid" alt="" />

        <div className="custom-block">
        <div className="custom-block-body">
        <h5 className="mb-3">{cause.title}</h5>

        <p>{cause.content}</p>

        <div className="progress mt-4">
        <div className={`progress-bar w-${cause.valuenow}`} role="progressbar" aria-valuenow={cause.valuenow} aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div className="d-flex align-items-center my-2">
        <p className="mb-0">
        <strong>Raised:</strong>
        ${cause.raised}
        </p>

        <p className="ms-auto mb-0">
        <strong>Goal:</strong>
        ${cause.goal}
        </p>
        </div>
        </div>

        <Link to="/donate" className="custom-btn btn">Donate now</Link>
        </div>
        </div>
        </div>
        ))}
        
        </div>
        </div>
        </section>
       </>
   );
}
export default Causes;