import Head from "next/head";
import Link from "next/link";
import "98.css";

import Favicon from "../components/head";
import Taskbar from "../components/taskbar";

import styles from "../styles/Home.module.css";

import InterwebsNavigator from "../components/programs/interwebs";

export default function Home() {
  return (
    <home id="home">
      <Head>
        <Favicon />
        <title>Michaelsoft Binbows</title>
      </Head>
      <section>
        <div className={styles.WIPtext}>
          <p>
            In case you couldn't tell, this is still very much a WIP (work in
            progress)
          </p>
          <p>
            If you wanna see something that I personally find pretty cool, click
            on the Internet Explorer icon in the taskbar!
          </p>
          <p>
            Also, <Link href="/qwertyuiop">here</Link>'s a 404 page if you'd
            like.
          </p>
        </div>

        <InterwebsNavigator className="interwebs" />
      </section>
      <Taskbar />
    </home>
  );
}
