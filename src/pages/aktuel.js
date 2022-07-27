import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import '../styles/pagestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Aktuel = () => (

    <Layout1>

<div className="container">
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/aktuel/Aktuel 2019c.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>AKTUELL</h3>
      <p>Städtische Galerie In der Harderbastei Ingolstadt</p>
    </Carousel.Caption>
  </Carousel.Item>

  
</Carousel>
             
        <h1 className="naslov-product"> AKTUELL, Städtische Galerie In der Harderbastei Ingolstadt  </h1>
        <p className="two-columns">Jahresausstellung des Berufsverbandes Bildender Künstler Obb. Nord Ingolstadt e.V.</p>
        
        <div className="container">

        <h4 className="naslov-product"> 2021  </h4>
            <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3">

            

                <div className="col">
                    <figure className="figure">
                        <img src="../images/aktuel/aktuel1.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/aktuel/aktuel2.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/aktuel/aktuel3.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>

            </div>

            <h4 className="naslov-product"> 2019  </h4> 
            <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3">
               

                <div className="col">
                    <figure className="figure">
                        <img src="../images/aktuel/Aktuel 2019a.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/aktuel/Aktuel 2019.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/aktuel/Aktuel 2019b.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>

            </div>

            <h4 className="naslov-product"> 2017  </h4>
            <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3">  

                
                <div className="col">
                    <figure className="figure">
                        <img src="../images/aktuel/aktuel2017.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/aktuel/aktuel2017a.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/aktuel/aktuel2017c.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>

                

            </div>
        </div>


    </div>
    
    </Layout1>

)

export default Aktuel