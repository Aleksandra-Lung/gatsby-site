import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import '../styles/pagestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Objects = () => (

    <Layout1>

<div className="container">
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/design/cap1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>ESPRESSO CUPS</h3>
      <p>Rosenthal Incentive Service and Stadt Ingolstadt</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/design/cap2.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/design/cap.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/design/cap3 (5).jpg"
      alt="Third slide"
    />
  </Carousel.Item>

</Carousel>
             
        <h1 className="naslov-product"> Objects and Design works  </h1>
        {/* <p className="two-columns">Mali likovni salon, Novi Sad, Serbia und Gallery Meander, Apatin, Serbia, 2015<br /> <br />Am 28. August bis 18. September fand in Apatin und Novi Sad das dritte internationale Festival für zeitgenössische Kunst der Donauregion „Danube Dialogues“ statt, das von der Galerie Bel Art aus Novi Sad organisiert wurde.</p>
         */}
        <div className="container">
            <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col">
                    <figure className="figure">
                        <img src="../images/design/licht.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/design/licht1.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/design/licht2a.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>

                <div className="col">
                    <figure className="figure">
                        <img src="../images/design/new1.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/design/new2.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/design/new3.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>

                <div className="col">
                    <figure className="figure">
                        <img src="../images/design/licht33.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/design/licht34.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/design/licht35.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                

                <div className="col">
                    <figure className="figure">
                        <img src="../images/design/workinprogress.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                
                

            </div>
        </div>


    </div>
    
    </Layout1>

)

export default Objects