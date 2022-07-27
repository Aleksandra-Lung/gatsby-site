import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import '../styles/pagestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Trotz = () => (

    <Layout1>

<div className="container">
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/trotz/flag.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Trotz dem jetzt, Outdootprojekt</h3>
      <p>Inglostadt, Germany, 2021</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
             
        <h1 className="naslov-product"> Trotz dem jetzt, Outdootprojekt – Inglostadt, Germany, 2021  </h1>
        <p className="two-columns">Freilichtausstellung in der Innenstadt in Ingolstadt organisiert die Gemeinnützige Ingolstädter Veranstaltungs GmbH (Inkult).</p>
        
        <div className="container">
            <div className="row  row-cols-1">
                <div className="col">
                    <figure className="figure">
                        <img src="../images/trotz/expo_banner_jpg_3.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                
                
                
                

            </div>
        </div>


    </div>
    
    </Layout1>

)

export default Trotz