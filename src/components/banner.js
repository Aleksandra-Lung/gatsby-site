import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import { StaticImage } from "gatsby-plugin-image";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faFacebookSquare, faInstagram, FaRegAddressCard } from "@fortawesome/free-brands-svg-icons"
import { FaInstagram, FaFacebookSquare, FaEnvelope } from "react-icons/fa"
import '../styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  const { placeholderImage123 } = useStaticQuery(
          graphql`
      query {
        allImageSharp(filter: {id: {eq: "c635e7b3-b46a-5300-96c1-ff89d6b08f5f"}}) {
          nodes {
            fluid {
              src
            }
            id
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage123);



  return (
    <div className="masthead">
        <StaticImage 
                      src="../../static/images/background.jpg"
                      alt="Background image of Aleksandra Lung webpage"
                      style={{ position:"absolute" }}
                      className="back"
                    />
      <div class="black-overlay d-sm-flex">
        <div class="d-flex align-items-center content-box">
          <div class="container-sm">
            <div class="row">
              <div class="col-sm align-self-center">
                <h2>Paintings, Art Objects and Installations</h2>
                <h1>Aleksandra Lung</h1>
                <p>Aleksandra Lung has exhibited her arts consistently since 2010. She is an Yugoslavia-born German artist from Ingolstadt.</p>
                <p>
                  <p></p>
                  <div className="icons">
                  <a className="sandra" href="https://www.facebook.com/aleksandra.lung" target="_blank" rel="noreferrer noopener"><FaInstagram  size="2rem" color="#b9b9b9" /></a>
                  <a className="sandra" href="https://www.facebook.com/aleksandra.lung" target="_blank" rel="noreferrer noopener"><FaFacebookSquare size="2rem" color="#b9b9b9" /></a>
                  <a className="mailto" href="mailto:&#109;&#97;&#105;&#76;&#116;&#111;&#58;&#115;&#97;&#110;&#100;&#114;&#105;&#110;&#100;&#114;&#101;&#97;&#109;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;" target="_blank" rel="noreferrer noopener"><FaEnvelope size="2rem" color="#b9b9b9" /></a>
                </div>
                </p>
              </div>
              <div class="col-sm">
              <StaticImage 
                      src="../../static/images/aleksandralungback.jpg"
                      alt="Aleksandra Lung Painting"
                      className="img-fluid portret"
                    />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Banner