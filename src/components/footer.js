import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/styles.scss'
import { StaticImage } from 'gatsby-plugin-image'


const Footer = () => (
    <footer>
        <div className="footer-back">
            <Container>
            <div className="sociallMiddle">
                <p>© 2021 <a className="mailto" href="mailto:&#109;&#97;&#105;&#76;&#116;&#111;&#58;&#115;&#97;&#110;&#100;&#114;&#105;&#110;&#100;&#114;&#101;&#97;&#109;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">Aleksandra Lung</a> | WebDesign: <a href="mailto:&#109;&#65;&#73;&#108;&#84;&#111;&#58;"> DM Media</a></p>
              </div>
              
            </Container>
        </div>
    </footer>
    )
    


export default Footer 



export function Dino() {
  return (
    <StaticImage
      src="../images/social/email.png"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    />
  )
}