import { ReactNode } from "react";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children?: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Event Page - Food Truck Fest</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Eine Website für ein erfundenes Event namens Food Truck Fest"
        />
        <meta name="keywords" content="Food Truck, Fest, NextJs, Bootstrap" />
        <meta name="author" content="MKT" />
      </Head>
      <a className="skip-to-content" href="#main-content">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <main tabIndex={-1} id="main-content">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
