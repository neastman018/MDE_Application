'use client'
import Image from "next/image";
import styles from "./page.module.css";
import * as React from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
import FlipCardLink from "./components/linkflipcard";

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
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Card
        sx={{
          backgroundColor: '#861F41',
          borderRadius: '16px',
          padding: '24px',
          paddingTop: '16px',
          paddingBottom: '16px',
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
          marginBottom: '5px',
        }}
      >
        <Typography variant="h4" sx={{ fontSize: {
          xs: '1.5rem',
          sm: '2rem'
        }}}>
          F24-06: State of the Art Robotic Motion Planning
        </Typography>
      </Card>

      <Image
        src="/VTLogo.png"
        alt="VT Logo"
        width={360}
        height={200}
        style={{ marginTop: '0px' }}
      />

      <Box sx={{ paddingTop: '5px' }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {components.map((component, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={2.25} 
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }} // Centers each FlipCardLink component
            >
              <FlipCardLink post={component} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}
