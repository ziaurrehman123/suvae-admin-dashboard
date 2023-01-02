import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

export default function CustomerForm() {
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            marginTop: "20px",
            marginBottom: "20px",
            fontFamily: "Poppins",
          }}
        >
          Customer Form
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box sx={{ backgroundColor: "white", paddingTop:"5px", paddingBottom:"5px" }}>
              <Box sx={{ textAlign: "center" }}>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                  }}
                >
                  System Update Message
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ backgroundColor: "white", paddingTop:"5px", paddingBottom:"5px" }}>
              <Box sx={{ textAlign: "center" }}>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                  }}
                >
                  Email Unavailable
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ backgroundColor: "white", paddingTop:"5px", paddingBottom:"5px" }}>
              <Box sx={{ textAlign: "center" }}>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1, }} defaultChecked />}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                  }}
                >
                 Text Unavailable
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
