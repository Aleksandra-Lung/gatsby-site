import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import '../styles/pagestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Konflikt = () => (

    <Layout1>

       
        <div className="container">

        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/konflikt/Konflikt-768x300.jpg"
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
             
        <h1 className="naslov-product"> Konflikt - Der Zweck des Gemetzels, KAP 94, Ingolstadt, 2018. </h1>
        <p className="two-columns"> Die Künstler der Ausstellung beschäftigen sich mit der Planmäßigkeit der Zerstörung. Die Auswirkungen strategischer Überlegungen im Zusammenhang mit Konflikten werden mit Hilfe des künstlerischen Ausdrucks aufgezeigt.<br></br>Kriege, Schlachten und die Awendung destruktiver Systeme wie Gewalt, Angst und Unterdrückung und deren Auswirkungen, sowie die Abstraktion verschiedenster Muster zerstörerischen Verhaltens, werden durch die Werke der einzelnen Künstler verdeutlicht. Schematisch reicht der Spannungsbogen von der Abstraktion bis zum Expressiven.<br></br>Die Objektkünstlerin Aleksandra Lung sind kriegerische Konflikte ein „Kollateralschaden“. </p>
        <div />
        <div className="container">
            <div className="row">
                <div className="col">
                    <figure className="figure">
                        <img src="../images/konflikt/konflikt.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                

            </div>
        </div>
       


    </div>
    
    </Layout1>

)

export default Konflikt