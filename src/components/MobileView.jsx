import React from "react";
import { Box, Typography, Button } from "@mui/material";
import mobileView from "../assets/images/mobileView.png";

export default function MobileView() {
  return (
    <>
       <Box sx={{backgroundColor:"#016AAB", height:"100%"}}>
        <Box sx={{textAlign:"center", paddingTop:"240px", paddingBottom:"240px"}}>
        <img
          src={`${mobileView}`}
          height="10px"
          alt="logo2"
          style={{
            height: "80px",
            width: "80px",
          }}
        />
        <Box sx={{width:"90%", margin:"auto"}}>
        <Typography sx={{color:"white", fontWeight:"600"}}>
          oh, hi there!
        </Typography>
        <Typography sx={{color:"white", fontWeight:"100"}}>
          Our form builder is optimized for desktop computers and tablets. Please manage your forms on a different device, or if you're on a tablet, try rotating it.
        </Typography>
        <Button variant="outlined" sx={{border:"1px solid white", color:"white", marginTop:"20px"}}>Go Back</Button>
        </Box>
        </Box>
      </Box>
    </>
  );
}
