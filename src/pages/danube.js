import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import '../styles/pagestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Danube = () => (

    <Layout1>

<div className="container">
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/ambience/danube.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Danube Dialogues</h3>
      <p>Mali likovni salon, Novi Sad und Gallery Meander, Apatin, 2015</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/danube/dunavskidijalozi2a.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/danube/dunavskidijalozi5a.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/danube/dunavskidijalozi1a.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/danube/vertikale.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

</Carousel>
             
        <h1 className="naslov-product"> Danube Dialogues  </h1>
        <p className="two-columns">Mali likovni salon, Novi Sad, Serbia und Gallery Meander, Apatin, Serbia, 2015<br /> <br />Am 28. August bis 18. September fand in Apatin und Novi Sad das dritte internationale Festival für zeitgenössische Kunst der Donauregion „Danube Dialogues“ statt, das von der Galerie Bel Art aus Novi Sad organisiert wurde.</p>
        
        <div className="container">
            <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col">
                    <figure className="figure">
                        <img src="../images/danube/dunavskidijalozi3a.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/danube/vertikale0.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/danube/vertikale1.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>

                <div className="col">
                    <figure className="figure">
                        <img src="../images/danube/vertikale2.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/danube/vertikale3.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/danube/vertikale4.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                
                
                

            </div>
        </div>


    </div>
    
    </Layout1>

)

export default Danube