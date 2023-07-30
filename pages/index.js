import Head from "next/head";

// component imports
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Promotr</title>
        <meta
          name="description"
          content="Welcome to Promotr! We are a full-service marketing agency dedicated to helping businesses thrive in the digital age. Our expert team offers a wide range of services, including web development, graphic designing, digital marketing, traditional marketing, and event management. Partner with us to elevate your brand and achieve remarkable success in today's competitive landscape."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <LandingPage />
      </main>
    </>
  );
}
