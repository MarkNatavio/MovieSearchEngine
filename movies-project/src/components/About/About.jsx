import React from "react";
import Footer from '../Footer'
import './About.css'



export function About() {
  return (
    <div class="about-section">
    <h1>About Us</h1>
    <p>Our application gives movie recommendations based on genre. It filters movie titles based on information provided and 
contains a search bar to find movies related to the inputted word. Our Users can choose from any of the genres provided 
      on the navigation bar on each page and then proceed to select the movie they are interested in. Upon clicking on any movie 
      poster, the users will be able to learn more information about the selected movie such as its synopsis, release date, run time,
      revenue, and the cast. In addition to that, they can also watch the trailer of the selected movie along with following a link
      that takes them to a site where the movie is hosted and can be watched. Moreover, with the help of our precise algorithm, 
      our users will also be to get recommendations for similar movies. We also allow our users to sign up and sign in, which leaves
      our users with a personalized search and experience. </p>
<h2>Contact Us </h2>
<p> Feel free to reach out to us with any questions, comments and concerns. </p>
<ul><i className="fas fa-envelope"> moonhome@gmail.com</i>  </ul>
<ul><i className="fas fa-map-marker-alt">160 Convent AveNew York, NY 10031</i> </ul>
<ul><i className="fas fa-solid fa-phone">(212) 650-7000</i> </ul>
<Footer />
  </div>
  
  
  );
  
}

export default About; 







