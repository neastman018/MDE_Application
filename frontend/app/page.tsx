import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          F24-06: State of the Art Robotic Motion Planning
        </p>
        {/* <div>
          <a
            href="./dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/VTLogo.png"
          alt="VT Logo"
          width={360}
          height={200}
          priority
        />
      </div> 

      <div className={styles.grid}>
        <a
          href="https://primevision.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Prime Vision<span>-&gt;</span>
          </h2>
          <p>Click here to learn more about our Customer</p>
        </a>

        <a
          href="./project"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Project Info<span>-&gt;</span>
          </h2>
          <p>Click here to learn more about Project</p>
        </a>

        <a
          href="./results"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Results <span>-&gt;</span>
          </h2>
          <p>Click Here to explore our results</p>
        </a>

        <a
          href="./aboutus"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            About Us <span>-&gt;</span>
          </h2>
          <p>
            Click here to learn more about our team
          </p>
        </a>
      </div>
    </main>
  );
}
