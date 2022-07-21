import Link from "next/link";

const Header = () => {
  return <header className="">
    <nav className="wrapper | pt-3">
    <Link href="/">
<a>

    <picture>
      <img src="/images/Logo.svg" alt="Logo von Food Truck Fest" />
    </picture>
  </a>
    </Link>
    </nav>

  </header>;
};

export default Header;
