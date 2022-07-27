import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import '../styles/pagestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Schulen = () => (

    <Layout1>

       
        <div className="container">

        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/deca/deca.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Künstler an die Schulen e.V.</h3>
      <p>Neuburg, 2016</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="../images/deca/deca1.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca2.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca4.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca5.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca6.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca7.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca8.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca9.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca10.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca11.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca12.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca13.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca14.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca15.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/deca/deca16.jpg"
      alt="Third slide"
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
             
        <h1 className="naslov-product"> Künstler an die Schulen e.V. </h1>
        <p className="two-columns"> In einem kompakten Projekt  werden zusammen mit den Kindern und Jugendlichen Ideen besprochen, gesammelt und anschließend mithilfe verschiedener Techniken umgesetzt zu Bildern, Skulpturen, Flächen- und Gestaltungsmodellen. Denkbar ist auch ein Wettbewerb, an dem alle Schüler teilnehmen dürfen. Schwerpunkt und Nutzen eines solchen Projektes liegen hierbei im Fördern und Begleiten des Prozesses von der Idee bis zur Umsetzung in ein materielles Produkt. Dies fördert das Selbstvertrauen und die handwerklichen Kompetenzen der Teilnehmer und legt vorhandene Talente frei.</p>
        <div />
        <div className="container">
            <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col">
                    <figure className="figure">
                        <img src="../images/deca/decau1.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/deca/decau2.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/deca/decau3.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>

                <div className="col">
                    <figure className="figure">
                        <img src="../images/deca/decau4.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/deca/decau5.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/deca/decau6.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                
                
                <div className="col">
                    <figure className="figure">
                        <img src="../images/deca/decau7.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/deca/decau8.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/deca/decau9.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                

            </div>
        </div>
       


    </div>
    
    </Layout1>

)

export default Schulen