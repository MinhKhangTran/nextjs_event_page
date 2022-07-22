import { useState } from 'react';
import { Form, Button } from "react-bootstrap";

const ctaContent = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  title: "Immer auf dem neusten Stand",
  btnText: "Benachrichtige mich",
};

const CTA = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <section className="" id="cta" aria-label="cta Abschnitt">
      <h2>
        {ctaContent.title}
      </h2>
      <p>{ctaContent.text}</p>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
        <Form.Control
            required
            type="text"
            placeholder="E-Mail Adresse eingeben"
       
          />
      <Form.Control.Feedback type="invalid">
              Bitte eine E-Mail Adresse eingeben
            </Form.Control.Feedback>
            <Button type="submit">
              {ctaContent.btnText}
            </Button>
      </Form>
    </section>
  );
};

export default CTA;
