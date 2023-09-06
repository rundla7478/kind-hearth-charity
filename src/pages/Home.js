import React from 'react';
import About from './About';
import Causes from './Causes';
import Volunteer from './Volunteer';
import News from './News';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Hero from './Hero';

function Home(){
	return(
        <>
         <main>
        <Hero />
        <About />
        <Causes />
        <Volunteer />
        <News />
        <Testimonial />
        <Contact />
        </main>
        </>
	);
}
export default Home;