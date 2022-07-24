import Image from "next/image";

import aufbau from "../public/images/aufbau.jpg";
import liveMusic from "../public/images/live-music.jpg";
import abschiedFeuerwerk from "../public/images/abschied-feuerwerk.jpg";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";

const scheduleArray = [
  {
    id: 1,
    thumb: aufbau,
    altText: "Aufbau des Food Truck Fest",
    title: "Aufbau des Food Truck Fest",
    date: "08.08.2022",
    text: "I'm baby squid kogi fixie, roof party cardigan gentrify af PBR&B hammock scenester. Locavore drinking vinegar listicle, narwhal farm-to-table heirloom cornhole activated charcoal wolf hot chicken palo santo. Occupy air plant vinyl bushwick, butcher food truck vice mumblecore snackwave distillery farm-to-table brunch keffiyeh DSA. Pork belly vape cold-pressed franzen lomo, seitan yr pitchfork gentrify glossier swag whatever snackwave brunch. Flexitarian mustache venmo vexillologist. Helvetica kinfolk bushwick narwhal vice iPhone kale chips kogi succulents dreamcatcher swag keffiyeh.",
  },
  {
    id: 2,
    thumb: liveMusic,
    altText: "Live Musik",
    title: "Live Musik mit lokalen Bands and Sänger*innen",
    date: "09.08.2022",
    text: "I'm baby squid kogi fixie, roof party cardigan gentrify af PBR&B hammock scenester. Locavore drinking vinegar listicle, narwhal farm-to-table heirloom cornhole activated charcoal wolf hot chicken palo santo. Occupy air plant vinyl bushwick, butcher food truck vice mumblecore snackwave distillery farm-to-table brunch keffiyeh DSA. Pork belly vape cold-pressed franzen lomo, seitan yr pitchfork gentrify glossier swag whatever snackwave brunch. Flexitarian mustache venmo vexillologist. Helvetica kinfolk bushwick narwhal vice iPhone kale chips kogi succulents dreamcatcher swag keffiyeh.",
  },
  {
    id: 3,
    thumb: abschiedFeuerwerk,
    altText: "Abschied mit Feuerwerk",
    title: "Abschied mit einem schönen Feuerwerk",
    date: "10.08.2022",
    text: "I'm baby squid kogi fixie, roof party cardigan gentrify af PBR&B hammock scenester. Locavore drinking vinegar listicle, narwhal farm-to-table heirloom cornhole activated charcoal wolf hot chicken palo santo. Occupy air plant vinyl bushwick, butcher food truck vice mumblecore snackwave distillery farm-to-table brunch keffiyeh DSA. Pork belly vape cold-pressed franzen lomo, seitan yr pitchfork gentrify glossier swag whatever snackwave brunch. Flexitarian mustache venmo vexillologist. Helvetica kinfolk bushwick narwhal vice iPhone kale chips kogi succulents dreamcatcher swag keffiyeh.",
  },
];

const Schedule = () => {
  const [index, setIndex] = useState(1);
  return (
    <section className="wrapper" id="schedule" aria-label="schedule Abschnitt">
      <Row>
        <Col md={6}>
          <Image
            src={scheduleArray[index - 1].thumb}
            alt={scheduleArray[index - 1].altText}
            className="img-fluid"
            placeholder="blur"
            priority
          />
        </Col>
        <Col md={6}>
          <Tabs activeKey={index} onSelect={(k) => setIndex(k)}>
            {scheduleArray.map((schedule) => {
              return (
                <Tab
                  eventKey={schedule.id}
                  key={schedule.id}
                  title={schedule.date}
                >
                  <h3 className="heading-3">{schedule.title}</h3>
                  <p>{schedule.text}</p>
                </Tab>
              );
            })}
          </Tabs>
        </Col>
      </Row>
    </section>
  );
};

export default Schedule;
