import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import '../styles/pagestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Location = () => (

    <Layout1>

       
        <div className="container">

        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/location/GWG-Stargarder-2.jpg"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>9×5, 2010</h3>
      <p>Akryl auf Holz</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="../images/location/GWG-Stargarder-3.jpg"
      alt="Second slide"
    />
    {/* <Carousel.Caption>
      <h3>5×8, 2010</h3>
      <p>Akryl auf Holz</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/location/GWG-Stargarder-6.jpg"
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Moleküle 10×10, 2010</h3>
      <p>Akryl auf Holz</p>
    </Carousel.Caption> */}
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
             
        <h1 className="naslov-product">Abrisshaus in der Stargarder Straße, Ingolstadt, 2017</h1>
        <p className="two-columns">Das Kunsthaus in der Stargarder Straße 15a (an der Südlichen Ringstraße gegenüber vom Wonnemar) ist unter dem Motto "Location occupied for time" am Freitag, 17. November.</p>
        <div />
        
       


    </div>
    
    </Layout1>

)

export default Location