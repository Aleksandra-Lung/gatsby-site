import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import '../styles/pagestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Analog = () => (

    <Layout1>

<div className="container">
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/analog/analog1.jpg"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/analog/analog2.jpg"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/analog/analog3.jpg"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/analog/analog.jpg"
      alt="First slide"
    />
  </Carousel.Item>

</Carousel>
             
        <h1 className="naslov-product"> ANALOG – PRÄSENZ DER KÜNSTLERINNEN“ – Inglostadt, Germany, 2021  </h1>
        <p className="two-columns">Vom 18. September bis 2. Oktober fand eine multidisziplinäre Ausstellung in einem Leerstand in der Fußgängerzone statt. „.analog. – Präsenz der Künstlerinnen“ wurde durchgeführt von dem Künstler an die Schulen e.V.</p>
        
        <div className="container">
            <div className="row  row-cols-1">
                <div className="col">
                    <figure className="figure">
                        <img src="../images/analog/analog4.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                
                
                
                

            </div>
        </div>


    </div>
    
    </Layout1>

)

export default Analog