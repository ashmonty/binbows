import Head from "next/head";
import Link from "next/link";
import "98.css";

import Favicon from "../components/head";
import Taskbar from "../components/taskbar";

import InterwebsNavigator from "../components/programs/interwebs";

export default function Home() {
  return (
    <home id="home">
      <Head>
        <Favicon />
        <title>Michaelsoft Binbows</title>
      </Head>
      <section>
        <p>
          In case you couldn't tell, this is still very much a work in progress.
        </p>
        <p>Click on the Internet Explorer icon in the taskbar!</p>
        <Link href="/qwertyuiop">Here's a 404 page if you'd like.</Link>
          <span>
            <InterwebsNavigator className="interwebs" />
          </span>
      </section>
      <Taskbar />
    </home>
  );
}
