import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({ pageContext }) => (

    <Layout1>
        
        <div className="container">

            <div className="hero-media">
                <div className="row">
                    <div className="col-12">
                        <div className="media">
                        <div className="aspect-ratio-box">
                        <img 
                            src={pageContext.image}
                            alt={pageContext.title } 
                            className="back-product"
                             />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
             
        <h1> {pageContext.title} </h1>
        <p> {pageContext.price} </p>
        <div dangerouslySetInnerHTML={{ __html: pageContext.description }} />


        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pageContext.image1} className="d-block w-100" alt={pageContext.title }/>
    </div>
    <div className="carousel-item">
      <img src={pageContext.image2} className="d-block w-100" alt={pageContext.title }/>
    </div>
    <div className="carousel-item">
      <img src={pageContext.image3}className="d-block w-100" alt={pageContext.title }/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </div>
    
    </Layout1>

)

export default Product