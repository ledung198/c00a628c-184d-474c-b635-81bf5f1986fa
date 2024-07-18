import { Avatar, Box, Button, Grid, Popover, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "./HomePage.styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { handleGetDetail } from "./HandleHomePage.js";
import { useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Divider from "@mui/material/Divider";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DuoIcon from "@mui/icons-material/Duo";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import { useNavigate } from "react-router-dom";
import { CALL_TYPE, handleFormatDate } from "../../constant/Constant.js";

const HomePageDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [dataDetail, setDataDetail] = useState(null);
  console.log("dataDetail:", dataDetail);
  const [dataDate, setDataDate] = useState({
    date: "",
    time: "",
    ampm: "",
    title: "",
  });

  useEffect(() => {
    handleGetDetail(location.state.id, setDataDetail);
  }, [location.state.id]);

  const checkData = {
    [CALL_TYPE.MISS]: "Tried to Call",
    [CALL_TYPE.ANS]: `Answered `,
    [CALL_TYPE.VOID]: `Void mail `,
  };

  useEffect(() => {
    if (dataDetail) {
      const convertDate = handleFormatDate(dataDetail.created_at);
      setDataDate({
        date: convertDate.formattedDate,
        time: convertDate.formattedHour,
        ampm: convertDate.ampm,
        title: checkData[dataDetail.call_type],
      });
    }
  }, [dataDetail]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.groupButton}>
        <Button
          onClick={() => {
            onGoBack();
          }}
        >
          <ArrowBackIcon />
        </Button>
        <Button>
          <MoreVertIcon onClick={handleClick} />
        </Button>
      </Box>
      <Box>
        <Box className={classes.boxImage}>
          <Avatar
            alt="Name"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 80, height: 80 }}
          />
        </Box>
        <Box className={classes.boxName}>
          <Typography className={classes.typoName}>Some Name</Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Button fullWidth>
                <Box className={classes.iconButtonAction}>
                  <MapsUgcIcon />
                  <Typography className={classes.typoButtonAction}>
                    Message
                  </Typography>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth>
                <Box className={classes.iconButtonAction}>
                  <LocalPhoneIcon />
                  <Typography className={classes.typoButtonAction}>
                    Phone
                  </Typography>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth>
                <Box className={classes.iconButtonAction}>
                  <DuoIcon />
                  <Typography className={classes.typoButtonAction}>
                    Video Call
                  </Typography>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth>
                <Box className={classes.iconButtonAction}>
                  <VoicemailIcon />
                  <Typography className={classes.typoButtonAction}>
                    Voice Mail
                  </Typography>
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Divider />
      </Box>
      <Box className={classes.content}>
        <Box className={classes.groupData}>
          <Typography className={classes.typoTitleContent}>
            {dataDate.date}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              {dataDate.time} {dataDate.ampm}
            </Grid>
            <Grid item xs={9}>
              {dataDate.title}
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.groupData}>
          <Typography className={classes.typoTitleContent}>Phone</Typography>
          <Typography>+{dataDetail?.from}</Typography>
        </Box>
        <Box className={classes.groupData}>
          <Button fullWidth variant="text" sx={{ textAlign: "start" }}>
            Send Message
          </Button>
          <Button fullWidth variant="text" sx={{ textAlign: "start" }}>
            Share Contact
          </Button>
          <Button fullWidth variant="text" sx={{ textAlign: "start" }}>
            Add to Favorites
          </Button>
        </Box>
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Button
          className={classes.buttonAction}
          variant="text"
          disabled={dataDetail?.is_archived}
          onClick={() => {}}
          fullWidth
        >
          Save Archive
        </Button>
      </Popover>
    </Box>
  );
};

export default HomePageDetail;
