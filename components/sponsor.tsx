import { Col, Row } from "react-bootstrap";

const sponsorArray = [
  {
    id: 1,
    image: "rennende-schuhe.svg",
    altText: "Logo von Rennende Schuhe",
    color: "#dc3545",
  },
  {
    id: 2,
    image: "veganismus.svg",
    altText: "Logo von Veganismus",
    color: "#198754",
  },
  {
    id: 3,
    image: "amazing-blenders.svg",
    altText: "Logo von Amazing Blenders",
    color: "#0d6efd",
  },
  {
    id: 4,
    image: "mkt-webdesign.svg",
    altText: "Logo von MKT Webdesign",
    color: "#A97155",
  },
];

const Sponsor = () => {
  return (
    <section className="wrapper" id="sponsor" aria-label="sponsor Abschnitt">
      <Row>
        {sponsorArray.map((sponsor)=>{
          return(
            <Col lg={3} md={4} key={sponsor.id}>
                <picture>
                  <img src={`/images/${sponsor.image}`} alt={sponsor.altText} />
                </picture>
            </Col>
          )
        })}
      </Row>
    </section>
  );
};

export default Sponsor;
