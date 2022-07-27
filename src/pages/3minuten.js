import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import '../styles/pagestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Minuten = () => (

    <Layout1>

       
        <div className="container">

        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/3minuten.jpg"
      alt="First slide"
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
             
        <h1 className="naslov-product"> Video action "3 minutes/3Minuten" </h1>
        <p className="two-columns">Video action "3 minutes" - The Cultural Report of the City of Ingolstadt presents the video action "3 minutes". This platform in the Corona-Zeit Kunstlerinnen and Künstlern is a platform, as well as their work in 2020.</p>
        <hr class="solid"></hr>
        <p className="two-columns">Das Kulturreferat der Stadt Ingolstadt präsentiert die Video-Aktion „3 Minuten“.  Diese bietet in der Corona-Zeit Künstlerinnen und Künstlern eine Plattform, sich und ihre Arbeit vorzustellen. Angesprochen sind freischaffende Einzelkünstler aus Ingolstadt bzw. mit dem Schwerpunkt ihrer Tätigkeit in Ingolstadt (aus Musik, bildender Kunst, Theater, Literatur).</p>
        <div />
        <div className="container">
            <div className="row  row-cols-1">
                
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ajS3FTfrEOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        </div>
       


    </div>
    
    </Layout1>

)

export default Minuten