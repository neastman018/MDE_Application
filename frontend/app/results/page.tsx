
import Image from "next/image";
import styles from "./page.module.css";
  
  export default function Page() {
    return ( 
      <main className={styles.main}> 
        <div className={styles.grid}>
          <a
            href="."
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3>
              Home
            </h3>
          </a>
          <a
            href="https://primevision.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              Prime Vision
            </h3>
          </a>

          <a
            href="./project"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3>
              Project Info
            </h3>
          </a>


          <a
            href="./aboutus"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3>
              About Us
            </h3>
          </a>
        </div>

        <h3>Results Page</h3>
        <ul>
          <li>Display Results</li>
          <li>Visual Representations of our Results</li>
          <li>Comparisons between algorithms</li>
          <li>Conclusions</li>
          <li>Probably Crunch numbers in python than socket in a an image and auto update it</li>
        </ul>
      </main>
      
      
    );
  }
  