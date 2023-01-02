import React from "react";
import { Typography, Box } from "@mui/material";

export default function HeadingSection() {
  return (
    <>
      <Box sx={{ width: "100%", margin: "auto", paddingBottom: "30px" }}>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "700",
            marginTop: "20px",
            fontFamily: "Poppins",
          }}
        >
          Dashboard
        </Typography>
        <Box
          sx={{ width: "100%", backgroundColor: "#D6DAE1", height: "1px" }}
        ></Box>
      </Box>
    </>
  );
}
