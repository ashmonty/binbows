import "98.css";
import styles from "../styles/Custom404.module.css";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Favicon from "../components/head";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    document.addEventListener("keydown", pushToHome);
    function pushToHome() {
      document.removeEventListener("keydown", pushToHome);
      router.push("/");
    }
  });

  return (
    <home>
      <Head>
        <title>404 :/</title>
      </Head>
      <section>
        <Favicon />
        <a href="/">
          <div className={styles.blbg}>
            <div className={styles.yeet}>
              <p className={styles.header}>404 - Page not found</p>
              <div className={styles.text}>
                <p>An error has occured. To continue:</p>
                <p>
                  Click anywhere or press any key to return to the home page.
                </p>
                <p>Error: 404 : P4G3 : N07F0UND</p>
                <div className={styles.pressDiv}>
                  <p className={styles.pressText}>
                    Press any key to continue&nbsp;
                    <span className={styles.blink}>_</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>
    </home>
  );
}
