import { Col, Row } from "react-bootstrap";

const anreiseArray = [
  {
    id: 1,
    image: "car.svg",
    title: "Mit dem Auto",
    text: "Thundercats forage messenger bag letterpress tote bag praxis. Poutine meh before they sold out, chillwave four loko taiyaki af marfa slow-carb mustache. Authentic before they sold out sustainable deep v polaroid seitan DSA subway tile. XOXO authentic celiac live-edge before they sold out 3 wolf moon green juice chia gastropub waistcoat put a bird on it lo-fi. Bespoke literally pitchfork, kombucha normcore chia man braid. VHS lomo williamsburg kogi.",
  },
  {
    id: 2,
    image: "bus.svg",
    title: "Mit dem Bus",
    text: "Chambray man bun flexitarian PBR&B synth gastropub. You probably haven't heard of them man braid four loko tumblr, health goth portland fashion axe intelligentsia vape brooklyn beard. Waistcoat man braid portland, ugh blue bottle put a bird on it franzen kinfolk pug food truck irony DSA gluten-free migas. Bushwick snackwave selfies, vice twee locavore swag wolf DSA put a bird on it.",
  },
  {
    id: 3,
    image: "zug.svg",
    title: "Mit dem Zug",
    text: "Portland messenger bag shaman iPhone. Humblebrag chartreuse tattooed, la croix sriracha fam mustache DIY selfies salvia af meggings narwhal. Af pug leggings pabst. Palo santo church-key fanny pack typewriter cloud bread. Lo-fi health goth poke distillery schlitz. Gastropub tofu hexagon semiotics. Helvetica mlkshk skateboard jianbing wayfarers.",
  },
  {
    id: 4,
    image: "fahrrad.svg",
    title: "Mit dem Fahrrad/Zu Fuß",
    text: "Helvetica fam cardigan quinoa scenester meditation humblebrag, direct trade chartreuse narwhal iceland fashion axe unicorn. Kitsch gentrify semiotics whatever artisan etsy cronut twee kogi literally. Lumbersexual tacos chia, thundercats shaman helvetica knausgaard pabst single-origin coffee green juice selvage offal man bun chillwave food truck. Tote bag ramps artisan snackwave af, plaid migas waistcoat yr iPhone. Edison bulb gastropub stumptown craft beer plaid lyft vice.",
  },
];

const Anreise = () => {
  return (
    <section className="wrapper" id="anreise" aria-label="anreise Abschnitt">
      <h2 className="heading-2 | text-center">Bequeme Anreise</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.4971930886554!2d10.0111142158946!3d48.4085983402243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799665c2a6d6087%3A0x933b5cdca37f8198!2sFriedrichsau!5e0!3m2!1sde!2sde!4v1658720228906!5m2!1sde!2sde"
        width="100%"
        height="450"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="map"
      ></iframe>
      <Row>
        {anreiseArray.map((item) => {
          return (
            <Col md={6} key={item.id} className={`anreise__${item.id}`}>
              <article>
                <picture>
                  <img
                    src={`/images/${item.image}`}
                    alt={item.title}
                    aria-hidden="true"
                  />
                </picture>
                <h3 className="heading-3">{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default Anreise;
