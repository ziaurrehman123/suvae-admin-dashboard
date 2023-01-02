import React from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "88%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    border: "none",
    padding: "3px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  },
  searchIconStyle: {
    marginLeft: "25px",
marginTop:"4px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "32px",
    },
    color: "#7335FD",
    "&:hover": {
      color: "#8B8FA3",
    },
  },
  searchBox: {
    border: "1px solid grey",
    paddingTop: 2,
    marginBottom: 20,
    paddingBottom: 2,
    borderRadius: 10,
  },
  searchInputBox: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function SearchSection() {
  const classes = useStyles();
  return (
    <div>
      <Box
        sx={{
          paddingTop: "20px",
          paddingBottom: "1px",
        }}
      >
        <Box>
          <Box className={classes.searchInputBox}>
            <Box
              sx={{
                backgroundColor: "white",
              }}
              className={classes.searchBox}
            >
              <TextField
                className={classes.searchInput}
                id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder="Search All"
              />
              <SearchIcon
                className={classes.searchIconStyle}
                sx={{ fontSize: 35 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
