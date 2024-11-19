
import React, { useState } from "react";
import { Box, Typography, Button, Dialog, DialogContent } from "@mui/material";


export default function SimLogExample() {
  <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
    <DialogContent
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Box
        component="img"
        src="example_simulation_log.png" // Replace with your image path
        alt="Example Simulation Log"
        sx={{
          maxWidth: "100%", // Ensures the image doesn't exceed dialog width
          height: "auto",
        }}
      />
    </DialogContent>
  </Dialog>
};