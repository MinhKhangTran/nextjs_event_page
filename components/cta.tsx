import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const ctaContent = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  title: "Immer auf dem neusten Stand",
  btnText: "Benachrichtige mich",
};

const CTA = () => {
  return (
    <section className="" id="cta" aria-label="cta Abschnitt">
      <h2 className="heading-1 | text-center">{ctaContent.title}</h2>
      <p className="text-center">{ctaContent.text}</p>

      <Form className="">
        <Row className="align-items-center">
          <Col md="8">
            <Form.Control
              required
              type="text"
              placeholder="E-Mail Adresse eingeben"
            />
          </Col>
          <Col md="4">
            <div className="d-grid d-lg-flex pt-3 pt-md-0">
              <Button type="submit">{ctaContent.btnText}</Button>
            </div>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default CTA;
