import { CompleteChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      {/* dividir em dois */}
      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
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
