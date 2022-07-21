import Image from "next/image";
import Link from "next/link";
import heroPic from "../public/images/hero.png";


// SVG for next
// https://frontend-digest.com/how-to-import-svgs-into-nextjs-8ec6100e613f


const heroContent = {
        altText: "Ein Bild von einer Frau in einem Food Truck, die eine Kundin bedient",
        title: "Food Truck Fest 2022",
        btnText: "Erfahre mehr",
        time_and_location:[
                {
                        id:1,
                        icon: "calendar.svg",
                        text:"08. - 10.08.2022"

                },
                {
                        id:2,
                        icon: "location.svg",
                        text:"Friedrichsau, Ulm"

                }
        ]
      };

const Hero = () => {
    return (
        <section className="" id="hero" aria-label="hero Abschnitt">
                Hero
        </section>  );
        };

export default Hero;