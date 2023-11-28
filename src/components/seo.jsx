import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Empowering Innovation with Zenka Europe UAB: Your Reliable European Partner in Electronic Component Distribution. Leading B2B Electronic Component Supplier and contract manufacturer in Europe.
Explore the World of Electronics: Resistors, Integrated Circuits, Capacitors, RF/IF and RFID, Transistors, Diodes, Operational Amplifiers, Logic Gates, Resistor Arrays, Signal Generators, DC Power Supply, Cathode Ray Oscilloscope, Multimeters, etc. We Have It All!
Elevate Your Projects with Top-Class Electronic Components: Solving Challenges, Delivering in Excellence and Powering Your Innovations." />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:image" content="https://zenkaeurope.com/assets/img/logo/logometa.png" />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

    </Head>
  </>
);

export default SEO;