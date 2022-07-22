import Image from "next/image";
import Link from "next/link";
import aboutPic from "../public/images/food-truck-fest.jpg";
import { Col, Row } from "react-bootstrap";



const aboutContent = {
        altText: "Ein Bild von einem Pärchen bei dem Food Truck Fest",
        text:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.</p>"
      };


const About = () => {
    return (
        <section className="wrapper" id="about" aria-label="about Abschnitt">
                <Row>
                    <Col md={6}>
                    <Image
            src={aboutPic}
            alt={aboutContent.altText}
            className="img-fluid"
            placeholder="blur"
            priority
          />
                    </Col>
                    <Col md={6}>
                    <div dangerouslySetInnerHTML={{ __html: aboutContent.text }}></div>
                    </Col>
                </Row>
        </section>  
            );
        };

export default About;