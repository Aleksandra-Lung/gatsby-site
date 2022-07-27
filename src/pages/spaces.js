import React from "react";
import Layout1 from "../components/layout1"
import '../styles/styles.scss';
import '../styles/pagestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Spaces = () => (

    <Layout1>

       
        <div className="container">

        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../images/ambience/IMG_0248.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Spaces - paintings</h3>
      <p>Gallery Meander, Apatin, 2010.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="../images/ambience/IMG_0246.jpg"
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
      src="../images/ambience/DSCF9352.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
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
             
        <h1 className="naslov-product"> Spaces </h1>
        <p className="two-columns"> Aleksandra Lung belongs to the fine arts generation from Novi Sad, at the begining of the nineties, whose many active participants still are present at domestic scene of fine arts. The circumstances have caused that Aleksandra has set out along the other life paths, but those are wonderful paths Her vital energy acumulated during many years finally exploded in the form of pictures, and it seems that this crative process will last long. The art of painting of Aleksandra Lung is geometric abstraction which is constructively dismembered and rich and harmonius with its colours. In some way on account of the spirit of the procedure, the oil paint that is being slowly dried and then because of the variance of the constructive composition, her works of art have been created in series of 4-5 paintings. One theme is being unpacked gradually, it is being built inpusively as emotions flow with an internal peace of unrest. Those paintings have double action as separate complete compositions and details they belong to the same emotive process. They are colorful animations that cut picture space by lines and geometrical surfaces. The conception of space here designates the idea spreding in other words disposing of elements inside the painting space and then their manipulation in order to correct physical component into a visual imaginary one. With some authors this style differs in the surface structure and it has usually been explained as the result of the subconsciousness of the abstracted visual environment. It is not present here. As they are clean and tughtened surfaces and mutually precise relations, then we can mention the other abstracted experiences. Her experiences do not origin form the external formed environment, but from internal psycho-emotion composition. And it is peaceful surrender to takong delight in order and harmony, refined colourful sounds, the perception in it self.  <br /> <br />Radmila Savcic </p>
        <div />
        <div className="container">
            <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/DSCF9353.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/DSCF9389.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/DSCF9390.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>

                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/DSCF9392.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/DSCF9395.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/DSCF9396.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                
                
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/DSCF9399.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/DSCF9402.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/DSCF9406.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/IMG_0179.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/IMG_0180.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/IMG_0229.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>

                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/IMG_0231.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/IMG_0225.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/IMG_0224.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>

                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/IMG_0235.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/IMG_0235a.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col">
                    <figure className="figure">
                        <img src="../images/ambience/IMG_0234.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>

            </div>
        </div>
       


    </div>
    
    </Layout1>

)

export default Spaces