import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import '../styles/pagestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Neuen = () => (

    <Layout1>

       
        <div className="container">

        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/neuen/haderbastei2017.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="../images/neuen/haderbastei0.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  


</Carousel>

            {/* <div className="hero-media">
                <div className="row">
                    <div className="col-12">
                        <div className="media">
                        <div className="aspect-ratio-box">
                        <StaticImage  
                            src="../images/ambience/IMG_0248.jpg"
                            className="back-product"
                             />
                            </div>
                            </div>
                        </div>
                    </div>
                </div> */}
             
        <h1 className="naslov-product"> Die Neuen, BBK </h1>
        <p className="two-columns">Ingolstadt (DK) 15 Künstlerinnen und Künstler, die in den vergangenen zwei Jahren Mitglied im Berufsverband Bildender Künstler Oberbayern Nord und Ingolstadt (BBK) geworden sind, stellen ab kommenden Samstag, 17. September, sich und ihre Werke vor. "Die Neuen" lautet der programmatische Titel ihrer gemeinsamen Ausstellung, die bis zum 9. Oktober in der Städtischen Galerie Harderbastei in Ingolstadt (Oberer Graben 55) zu sehen sein wird.</p>
        <div />
        
       


    </div>
    
    </Layout1>

)

export default Neuen