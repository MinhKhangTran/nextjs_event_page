import Image from "next/image";

import peterKim from "../public/images/peter-kim.png";
import janeDoe from "../public/images/jane-doe.png";
import cathyBaros from "../public/images/cathy-baros.png";
import albertoRossi from "../public/images/alberto-rossi.png";


const mitwirkendeArray = [
  {
    id: 1,
    thumb: peterKim,
    altText: "Ein Bild von Peter Kim",
    title: "Peter Kim",
    essen: "Koreanisches Essen",
    text: "Cat ipsum dolor sit amet, malkin yet ocicat. Tomcat donskoy. Kitten. Havana brown russian blue lion turkish angora british shorthair, egyptian mau. Persian tomcat himalayan kitty. Thai sphynx british shorthair yet kitten burmese.",
  },
  {
    id: 2,
    thumb: janeDoe,
    altText: "Ein Bild von Jane Doe",
    title: "Jane Doe",
    essen: "Amerikanisches Essen",
    text: "Ocelot ragdoll or norwegian forest cougar, tiger or tabby kitten. Abyssinian munchkin so devonshire rex. British shorthair ocicat but kitten. Malkin kitten and american shorthair maine coon leopard. ",
  },
  {
    id: 3,
    thumb: cathyBaros,
    altText: "Ein Bild von Cathy Baros",
    title: "Cathy Baros",
    essen: "Griechisches Essen",
    text: "Jaguar siberian so puma but ragdoll yet ragdoll lion scottish fold. Leopard. Tiger scottish fold or persian thai munchkin. Devonshire rex abyssinian panther norwegian forest lynx. Panther norwegian forest burmese and balinese . American shorthair.",
  },
  {
    id: 4,
    thumb: albertoRossi,
    altText: "Ein Bild von Alberto Rossi",
    title: "Alberto Rossi",
    essen: "Italienisches Essen",
    text: "American shorthair turkish angora or kitty, or malkin bengal. Panther abyssinian , for lynx. Bengal norwegian forest. Panther ocicat so ocicat tiger tabby. Tomcat egyptian mau yet panther, leopard or jaguar. Cornish rex himalayan and cornish rex for bengal but jaguar yet burmese yet bengal.",
  }
];

const Mitwirkende = () => {
    return (
        <section className="" id="mitwirkende" aria-label="mitwirkende Abschnitt">
                Mitwirkende
        </section>  
            );
        };

export default Mitwirkende;