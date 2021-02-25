import Head from "next/head";
import { ExperienceBar } from "../components/ExperienceBar";

export default function Home() {
  return (
    <div className="container">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
        rel="stylesheet"
      />

      <ExperienceBar />
    </div>
    // <div>
    //   <Button color="hotpink">
    //     Button 1
    // </Button>
    //   <Button color="pink">
    //     Button 2
    // </Button>
    //   <Button color="violet">
    //     Button 3
    // </Button>
    // </div>
  );
}
