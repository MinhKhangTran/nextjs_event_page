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
    date: "08.08",
    text: "Distillery tofu umami tilde brooklyn fingerstache stumptown shaman scenester lo-fi organic ramps wayfarers. Williamsburg raclette synth, jean shorts street art pok pok pop-up tote bag beard lo-fi ugh paleo post-ironic keytar. ",
  },
  {
    id: 2,
    thumb: liveMusic,
    altText: "Live Musik",
    title: "Live Musik mit lokalen Bands and Sänger*innen",
    date: "09.08",
    text: "DSA glossier narwhal hell of drinking vinegar. Art party cliche four dollar toast blog, lomo kitsch pour-over prism semiotics locavore. Echo park organic praxis, kinfolk unicorn food truck cardigan occupy iceland.",
  },
  {
    id: 3,
    thumb: abschiedFeuerwerk,
    altText: "Abschied mit Feuerwerk",
    title: "Abschied mit einem schönen Feuerwerk",
    date: "10.08",
    text: "Tonx twee actually pug farm-to-table subway tile try-hard DSA single-origin coffee godard tilde. Thundercats prism retro kickstarter banjo.",
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
          <Tabs
            variant="pills"
            activeKey={index}
            onSelect={(k) => {
              // @ts-ignore: Unreachable code error
              return setIndex(k);
            }}
          >
            {scheduleArray.map((schedule) => {
              return (
                <Tab
                  eventKey={schedule.id}
                  key={schedule.id}
                  title={schedule.date}
                >
                  <h3 className="heading-3 | pt-4 pb-2">{schedule.title}</h3>
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
