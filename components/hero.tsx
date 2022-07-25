import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";

import heroPic from "../public/images/hero.png";

// SVG for next
// https://frontend-digest.com/how-to-import-svgs-into-nextjs-8ec6100e613f

const heroContent = {
  altText:
    "Ein Bild von einer Frau in einem Food Truck, die eine Kundin bedient",
  title: "Food Truck Fest 2023",
  btnText: "Erfahre mehr",
  time_and_location: [
    {
      id: 1,
      icon: "calendar.svg",
      text: "08. - 10.08.2023",
    },
    {
      id: 2,
      icon: "location.svg",
      text: "Friedrichsau, Ulm",
    },
  ],
};

const bubbles = [
  {
    id: 1,
    image: "bibimbap.svg",
    title: "bibimbap",
  },
  {
    id: 2,
    image: "empanada.svg",
    title: "empanada",
  },
  {
    id: 3,
    image: "fast-food.svg",
    title: "fast-food",
  },
  {
    id: 4,
    image: "greek-yogurt.svg",
    title: "greek-yogurt",
  },
  {
    id: 5,
    image: "pita.svg",
    title: "pita",
  },
  {
    id: 6,
    image: "pizza.svg",
    title: "pizza",
  },
  {
    id: 7,
    image: "spaguetti.svg",
    title: "spaguetti",
  },
  {
    id: 8,
    image: "tteok.svg",
    title: "tteok",
  },
];

const Hero = () => {
  return (
    <section
      className="position-relative"
      id="hero"
      aria-label="hero Abschnitt"
    >
      <div className="hero__wrapper | wrapper d-flex flex-column flex-lg-row align-items-center">
        <div className="hero__wrapper--left">
          <h1 className="heading-1 | position-relative">{heroContent.title}</h1>
          <div className="time_and_location__wrapper | d-flex flex-column flex-lg-row">
            {heroContent.time_and_location.map((item) => {
              return (
                <div key={item.id} className="d-flex gap-2 align-items-center">
                  <picture>
                    <img
                      aria-hidden="true"
                      src={`/images/${item.icon}`}
                      alt={item.text}
                    />
                  </picture>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
          <div className="d-grid d-lg-flex">
            <Link className="" href="/#countdown" passHref>
              <Button size="lg" variant="primary">
                {heroContent.btnText}
              </Button>
            </Link>
          </div>
        </div>
        <div className="hero__wrapper--right">
          <Image
            src={heroPic}
            alt={heroContent.altText}
            className="img-fluid"
            placeholder="blur"
            priority
          />
        </div>
      </div>
      {bubbles.map((bubble) => {
        return (
          <picture key={bubble.id}>
            <img
              src={`/images/${bubble.image}`}
              aria-hidden="true"
              alt={bubble.title}
              className={`${bubble.title} position-absolute`}
            />
          </picture>
        );
      })}
    </section>
  );
};

export default Hero;
