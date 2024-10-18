
'use client'
import Image from "next/image";
import styles from "./page.module.css";
import * as React from "react";
import FlipCardComponent from "./components/flipcard";


const components = [
  {
    title: "Prime Vision",
    description: `
        Click here to learn more about our customer by visiting their website.
        `,
    link: "https://primevision.com/",
  },
  {
    title: "Project Info",
    description: `
        Click here to learn more about the project.
        `,
    link: "./project",
  },
  {
    title: "Approach",
    description: `
        Click here to learn more about the approach we took to tackle the project.
        `,
    link: "./methodology",
  },
  {
    title: "Results",
    description: `
        Click here to learn more about the results of the project.
        `,
    link: "./results",
  },
  {
    title: "About Us",
    description: `
        Click here to learn more about our team.
        `,
    link: "./aboutus",
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <strong>
          F24-06: State of the Art Robotic Motion Planning
          </strong>
        </p>
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
      <div className={styles.flipCardContainer}>
        {components.map((component, index) => (
          <FlipCardComponent key={index} post={component} />
        ))}
      </div>
    </main>
  );
}
