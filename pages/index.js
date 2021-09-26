import Head from "next/head";

import {
  Header,
  HeroBanner,
  Platform,
  WhyKmmrce,
  Feedback,
  CaseStudy,
  SuperMerchants,
  Services,
  FeaturesSolutions,
  GrowBusiness,
  Footer,
} from "@kmmrce/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>KMMRCE</title>
        <meta name="description" content="KMMRCE Landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroBanner />
      <Platform />
      <WhyKmmrce />
      <Feedback />
      <CaseStudy />
      <SuperMerchants />
      <Services />
      <FeaturesSolutions />
      <GrowBusiness />
      <Footer />
    </>
  );
}
