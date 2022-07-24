import Link from "next/link";

const footerContent = {
  text: "contact@foodtruckfest.de",
  title: "Kontakt",
};
const socials = [
  {
    id: 1,
    image: "facebook.svg",
    title: "Facebook",
    url: "https://www.facebook.com/",
  },
  {
    id: 2,
    image: "youtube.svg",
    title: "Youtube",
    url: "https://www.youtube.com/",
  },
  {
    id: 3,
    image: "tiktok.svg",
    title: "Tik Tok",
    url: "https://www.tiktok.com/",
  },
  {
    id: 4,
    image: "instagram.svg",
    title: "Instagram",
    url: "https://www.instagram.com/",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <section>
          <div className="logo">
            <Link href="/">
              <a>
                <picture>
                  <img src="/images/Logo.svg" alt="Logo von Food Truck Fest" />
                </picture>
              </a>
            </Link>
          </div>
          <div className="contact">
            <h2>{footerContent.title}</h2>
            <p>{footerContent.text}</p>
          </div>
          <div className="socials | d-flex">
            {socials.map((social) => {
              return (
                <a key={social.id} href={social.url}>
                  <picture>
                    <img
                      src={`/images/${social.image}`}
                      alt={social.title}
                      aria-hidden="true"
                    />
                  </picture>
                </a>
              );
            })}
          </div>
        </section>
        <p className="text-center">
          ©{new Date().getFullYear()} Food Truck Fest. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
