import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import "98.css";

import Favicon from "../components/head";
import Taskbar from "../components/taskbar";

export default function Home() {
  return (
    <home>
      <Head>
        <Favicon />
        <title>WIP!! Michaelsoft Binbows</title>
      </Head>
      <section>
        <p>In case you couldn't tell, this is still very much a work in progress</p>
        <Link href="/qwertyuiop">Here's a 404 page if you'd like.</Link>
        <Taskbar />
      </section>
    </home>
  );
}
