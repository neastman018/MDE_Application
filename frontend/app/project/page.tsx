
import Image from "next/image";
import styles from "./page.module.css";
  
  export default function Page() {
    return (  
      <main className={styles.main}> 
        <div className={styles.grid}>
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
            href="."
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3>
              Home
            </h3>
          </a>

          <a
            href="./results"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3>
              Results
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

        <h3>Project Information Page</h3>
        <ul>
          <li>Goal of our Project</li>
          <li>Requirement Analysis</li>
          <li>What we are hoping/did accomplish</li>
          <li>Other Documents</li>
          <li>Maybe code here but it might make more sense on results page</li>
  
        </ul>
      </main>
      
      
    );
  }
  