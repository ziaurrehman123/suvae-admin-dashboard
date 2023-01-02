import React from "react";
import {
  Typography,
  Box,
  TableHead,
  TableBody,
  Table,
  Grid,
  Link,
  TableCell,
  Button,
  TableContainer,
  TableRow,
  TextField,
  Paper,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import TablePagination from "@mui/material/TablePagination";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import SearchSection from "./SearchSection";

//styling
const useStyles = makeStyles((theme) => ({
  tableInnerContent: {
    padding: "10px 40px 40px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    marginTop: "40px",
  },
  infoiconStyle: {
    color: "#8B8FA3",
    marginLeft: "20px",
    marginTop: "0px",
    "&:hover": {
      color: "#7335FD",
    },
  },
  tableheadingRow: {
    backgroundColor: "#F6F7F8",
  },
  tableCellheading: {
    fontWeight: "400",
    fontSize: "16px",
    textAlign: "center",
    color: "#8B8FA3",
  },
  tableCellContent: {
    fontWeight: "400",
    fontSize: "16px",
    textAlign: "center",
  },
  productContent: {
    display: "flex",
    width: "99%",
    [theme.breakpoints.down("sm")]: {
      width: "73%",
    },
    margin: "auto",
  },
  productImage: {
    height: "50px",
    width: "50px",
    marginRight: "10px",
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  borderTop: "5px solid #7335FD",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "10px",
};

export default function ProductsTable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen1(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen1(false);
  const handleClose2 = () => setOpen2(false);
  const [page, setPage] = React.useState(2);
  const [valueReview, setValueReview] = React.useState("10");
  const [valueStatus, setValueStatus] = React.useState("pending");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChange = (event) => {
    setValueReview(event.target.value);
  };
  const handleChange1 = (event) => {
    setValueStatus(event.target.value);
    console.log("status value:", valueStatus);
    if (event.target.value === "verified") {
      handleOpen();
    } else if (event.target.value === "delete") {
      handleOpen2();
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box>
        <TableContainer
          component={Paper}
          className={classes.tableInnerContent}
          sx={{
            width: "95%",
            margin: "auto",
            borderRadius: "20px",
          }}
        >
          <SearchSection />
          <Box sx={{ marginBottom: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: "600", fontSize: "24px" }}>
                  4 Results
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ justifyContent: "right", display: "flex" }}>
                  <Box>
                    <input
                      type="text"
                      name="daterange"
                      value="01/01/2018 - 01/15/2018"
                    />
                  </Box>
                  <Box>
                    <div>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="menu-appbar1"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose1}
                        className="logoutMenuu"
                      >
                        <MenuItem>
                          <Box
                            sx={{ paddingLeft: "10px", paddingRight: "30px" }}
                          >
                            <Typography
                              sx={{ fontWeight: "600", fontSize: "12px" }}
                            >
                              SORT BY
                            </Typography>
                            <Box
                              sx={{
                                height: "1px",
                                backgroundColor: "lightgrey",
                                marginTop: "10px",
                                marginBottom: "10px",
                              }}
                            ></Box>
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <Box
                                  sx={{
                                    paddingLeft: "0px",
                                    paddingRight: "80px",
                                  }}
                                >
                                  <FormControl>
                                    <FormLabel
                                      id="demo-radio-buttons-group-label"
                                      sx={{ fontSize: "12px" }}
                                    >
                                      Review Status
                                    </FormLabel>
                                    <RadioGroup
                                      aria-labelledby="demo-radio-buttons-group-label"
                                      defaultValue="All"
                                      name="radio-buttons-group"
                                    >
                                      <FormControlLabel
                                        value="All"
                                        control={<Radio size="small" />}
                                        label="All"
                                      />
                                      <FormControlLabel
                                        value="Verified"
                                        control={<Radio size="small" />}
                                        label="Verified"
                                      />
                                      <FormControlLabel
                                        value="Pending"
                                        control={<Radio size="small" />}
                                        label="Pending"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box
                                  sx={{
                                    paddingLeft: "20px",
                                    paddingRight: "20px",
                                  }}
                                >
                                  <FormControl>
                                    <FormLabel
                                      id="demo-radio-buttons-group-label"
                                      sx={{ fontSize: "12px" }}
                                    >
                                      Admin Status
                                    </FormLabel>
                                    <RadioGroup
                                      aria-labelledby="demo-radio-buttons-group-label"
                                      defaultValue="All"
                                      name="radio-buttons-group"
                                    >
                                      <FormControlLabel
                                        value="All"
                                        control={<Radio size="small" />}
                                        label="All"
                                      />
                                      <FormControlLabel
                                        value="Red"
                                        control={<Radio size="small" />}
                                        label="Red"
                                      />
                                      <FormControlLabel
                                        value="Orange"
                                        control={<Radio size="small" />}
                                        label="Orange"
                                      />
                                      <FormControlLabel
                                        value="Blue"
                                        control={<Radio size="small" />}
                                        label="Blue"
                                      />
                                      <FormControlLabel
                                        value="Purple"
                                        control={<Radio size="small" />}
                                        label="Purple"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </MenuItem>
                      </Menu>
                    </div>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Table aria-label="simple table" sx={{ overflowX: "hidden" }}>
            <TableHead className={classes.tableheadingRow}>
              <TableRow>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography className={classes.tableCellheading}>
                    Client ID
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography className={classes.tableCellheading}>
                    Order ID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                    }}
                  >
                    <Typography className={classes.tableCellheading}>
                      Customer Info
                    </Typography>
                    <Box>
                      <Tooltip
                        title="Feedback from Form Submission"
                        placement="top-start"
                      >
                        <InfoIcon className={classes.infoiconStyle} />
                      </Tooltip>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography className={classes.tableCellheading}>
                    Submission Date
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography className={classes.tableCellheading}>
                    Admin Status
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography className={classes.tableCellheading}>
                    Review Status
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {" "}
                  <Typography className={classes.tableCellContent}>
                    118-986254-235656
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography className={classes.tableCellContent}>
                    <Link href="#">118-986254-235656</Link>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography>Alex Smith</Typography>
                    <Typography>Johndoe@gmail.com</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography className={classes.tableCellContent}>
                      Sep 10, 2022
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <FormControl fullWidth className="select1demo">
                      <Select
                        labelId="demo-simple-select-label1"
                        id="demo-simple-select1"
                        value={valueReview}
                        onChange={handleChange}
                        className="adminStatusSelect"
                        sx={{
                          boxShadow: "2",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          backgroundColor: "white",
                          borderRadius: "45px",
                          height: "40px",
                          textAlign: "left",
                        }}
                      >
                        <MenuItem value={10}>RED</MenuItem>
                        <MenuItem value={20}>ORANGE</MenuItem>
                        <MenuItem value={30}>BLUE</MenuItem>
                        <MenuItem value={40}>PURPLE</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={valueStatus}
                        onChange={handleChange1}
                        sx={{
                          boxShadow: "2",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          backgroundColor: "white",
                          borderRadius: "45px",
                          height: "40px",
                          textAlign: "left",
                        }}
                      >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="verified">Verified</MenuItem>
                        <MenuItem value="delete">Delete</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {" "}
                  <Typography className={classes.tableCellContent}>
                    118-986254-235656
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography className={classes.tableCellContent}>
                    <Link href="#">118-986254-235656</Link>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography>Alex Smith</Typography>
                    <Typography>Johndoe@gmail.com</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography className={classes.tableCellContent}>
                      Sep 10, 2022
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <FormControl fullWidth className="select1demo">
                      <Select
                        labelId="demo-simple-select-label1"
                        id="demo-simple-select1"
                        value={valueReview}
                        onChange={handleChange}
                        className="adminStatusSelect"
                        sx={{
                          boxShadow: "2",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          backgroundColor: "white",
                          borderRadius: "45px",
                          height: "40px",
                          textAlign: "left",
                        }}
                      >
                        <MenuItem value={10}>RED</MenuItem>
                        <MenuItem value={20}>ORANGE</MenuItem>
                        <MenuItem value={30}>BLUE</MenuItem>
                        <MenuItem value={40}>PURPLE</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={valueStatus}
                        onChange={handleChange1}
                        sx={{
                          boxShadow: "2",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          backgroundColor: "white",
                          borderRadius: "45px",
                          height: "40px",
                          textAlign: "left",
                        }}
                      >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="verified">Verified</MenuItem>
                        <MenuItem value="delete">Delete</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {" "}
                  <Typography className={classes.tableCellContent}>
                    118-986254-235656
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography className={classes.tableCellContent}>
                    <Link href="#">118-986254-235656</Link>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography>Alex Smith</Typography>
                    <Typography>Johndoe@gmail.com</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography className={classes.tableCellContent}>
                      Sep 10, 2022
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <FormControl fullWidth className="select1demo">
                      <Select
                        labelId="demo-simple-select-label1"
                        id="demo-simple-select1"
                        value={valueReview}
                        onChange={handleChange}
                        className="adminStatusSelect"
                        sx={{
                          boxShadow: "2",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          backgroundColor: "white",
                          borderRadius: "45px",
                          height: "40px",
                          textAlign: "left",
                        }}
                      >
                        <MenuItem value={10}>RED</MenuItem>
                        <MenuItem value={20}>ORANGE</MenuItem>
                        <MenuItem value={30}>BLUE</MenuItem>
                        <MenuItem value={40}>PURPLE</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={valueStatus}
                        onChange={handleChange1}
                        sx={{
                          boxShadow: "2",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          backgroundColor: "white",
                          borderRadius: "45px",
                          height: "40px",
                          textAlign: "left",
                        }}
                      >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="verified">Verified</MenuItem>
                        <MenuItem value="delete">Delete</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {" "}
                  <Typography className={classes.tableCellContent}>
                    118-986254-235656
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography className={classes.tableCellContent}>
                    <Link href="#">118-986254-235656</Link>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography>Alex Smith</Typography>
                    <Typography>Johndoe@gmail.com</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography className={classes.tableCellContent}>
                      Sep 10, 2022
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <FormControl fullWidth className="select1demo">
                      <Select
                        labelId="demo-simple-select-label1"
                        id="demo-simple-select1"
                        value={valueReview}
                        onChange={handleChange}
                        className="adminStatusSelect"
                        sx={{
                          boxShadow: "2",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          backgroundColor: "white",
                          borderRadius: "45px",
                          height: "40px",
                          textAlign: "left",
                        }}
                      >
                        <MenuItem value={10}>RED</MenuItem>
                        <MenuItem value={20}>ORANGE</MenuItem>
                        <MenuItem value={30}>BLUE</MenuItem>
                        <MenuItem value={40}>PURPLE</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={valueStatus}
                        onChange={handleChange1}
                        sx={{
                          boxShadow: "2",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          backgroundColor: "white",
                          borderRadius: "45px",
                          height: "40px",
                          textAlign: "left",
                        }}
                      >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="verified">Verified</MenuItem>
                        <MenuItem value="delete">Delete</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box sx={{ width: "97%", margin: "auto", paddingTop: "20px" }}>
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </TableContainer>
      </Box>

      <Modal
        open={open1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              paddingBottom: "20px",
              paddingTop: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Box sx={{ textAlign: "right" }}>
              <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
            </Box>

            <Typography
              id="modal-modal-title"
              sx={{
                textAlign: "center",
                marginTop: "-30px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Verify Review?
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ width: "90%", margin: "auto", paddingBottom: "30px" }}>
            <Typography
              sx={{
                paddingTop: "20px",
                fontSize: "16px",
              }}
            >
              URL
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Optional"
            />
            <Box sx={{ textAlign: "center", marginTop: "10px" }}>
              <Button
                variant="outlined"
                sx={{
                  color: "#7335FD",
                  textTransform: "capitalize",
                  border: "1px solid #7335FD",
                  margin: "10px",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#7335FD",
                  color: "white",
                  textTransform: "capitalize",
                  margin: "10px",
                }}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              paddingBottom: "20px",
              paddingTop: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Box sx={{ textAlign: "right" }}>
              <CloseIcon onClick={handleClose2} style={{ cursor: "pointer" }} />
            </Box>

            <Typography
              id="modal-modal-title"
              sx={{
                textAlign: "center",
                marginTop: "-30px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Delete?
            </Typography>
          </Box>
          <Divider />
          <Typography
            sx={{
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "20px",
            }}
          >
            This action cannot be reverted.
          </Typography>
          <Box sx={{ width: "90%", margin: "auto", paddingBottom: "30px" }}>
            <Box sx={{ textAlign: "center", marginTop: "10px" }}>
              <Button
                variant="outlined"
                sx={{
                  color: "#7335FD",
                  textTransform: "capitalize",
                  border: "1px solid #7335FD",
                  margin: "10px",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF0000",
                  color: "white",
                  textTransform: "capitalize",
                  margin: "10px",
                }}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
