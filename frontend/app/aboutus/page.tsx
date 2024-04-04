// This is very scuffed
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
            href="./results"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3>
              Results
            </h3>
          </a>
        </div>

        <h3>About Us Page</h3>
        <ul>
          <li>Name, year, major</li>
          <li>Short Description about are research and professionalinterests, etc</li>
          <li>Picture</li>
        </ul>
      
      </main>

      

      
    );
  }
  