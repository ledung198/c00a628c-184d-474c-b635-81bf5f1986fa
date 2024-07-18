import { Box, Button, Grid, Popover, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import { useStyles } from "./ListCall.styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  CALL_TYPE,
  convertSecondsToTime,
  DIRECTION,
  handleFormatDate,
} from "../../constant/Constant";
import CallIn from "../../assets/icon/callIn.png";
import MissedCall from "../../assets/icon/missedCall.png";
import CallOut from "../../assets/icon/phone.png";
import VoiceMail from "../../assets/icon/voicemail.png";
import { useNavigate } from "react-router-dom";
const ListCall = (props) => {
  const navigate = useNavigate();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [callDetails, setCallDetails] = useState({
    typoMessage: "",
    image: "",
  });
  const [dataDate, setDataDate] = useState({
    date: "",
    time: "",
    ampm: "",
  });

  const checkData = {
    [CALL_TYPE.MISS]: {
      typoMessage: "Tried to Call",
      image: MissedCall,
    },
    [CALL_TYPE.ANS]: {
      typoMessage: `Answered on ${convertSecondsToTime(props.duration) ?? ""}`,
      image: CallIn,
    },
    [CALL_TYPE.VOID]: {
      typoMessage: `Void mail on ${convertSecondsToTime(props.duration) ?? ""}`,
      image: VoiceMail,
    },
  };

  const handleCheckCallTye = () => {
    if (props.direction === DIRECTION.IN) {
      setCallDetails(checkData[props.callType]);
    } else {
      setCallDetails({
        typoMessage: `Called on ${convertSecondsToTime(props.duration) ?? ""}`,
        image: CallOut,
      });
    }
  };

  useEffect(() => {
    handleCheckCallTye();
  }, []);

  useEffect(() => {
    if (props.time) {
      const convertDate = handleFormatDate(props.time);
      setDataDate({
        date: convertDate.formattedDate,
        time: convertDate.formattedHour,
        ampm: convertDate.ampm,
      });
    }
  }, [props.time]);

  const checkBadgeMissCall =
    props.callType === CALL_TYPE.MISS && props.direction === DIRECTION.IN;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box className={classes.container}>
      <Typography className={classes.typoDataDate}>{dataDate.date}</Typography>
      <Box className={classes.boxListCall}>
        <Grid container alignItems={"center"}>
          <Grid item xs={1} sx={{ textAlign: "center" }}>
            <img src={callDetails.image} alt="" height={"25px !important"} />
          </Grid>
          <Grid item xs={7} sx={{ paddingLeft: "15px" }}>
            <Typography className={classes.typoPhone}>
              + {props.phoneNumber ?? ""}{" "}
              {/* {props?.children?.length > 0
                ? `(${props?.children?.length + 1})`
                : ""} */}
              {checkBadgeMissCall && (
                <Typography className={classes.typoBadge}>
                  {props?.children?.length > 0
                    ? props?.children?.length + 1
                    : 1}
                </Typography>
              )}
            </Typography>

            <Typography className={classes.typoMessage}>
              {callDetails.typoMessage}
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.boxTime}>
            <Button
              sx={{ minWidth: "20px !important", padding: "5 !important" }}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <MoreVertIcon sx={{ fontSize: "12px !important" }} />
            </Button>
            <Typography className={classes.typoHours}>
              {dataDate.time}
            </Typography>
            <Typography className={classes.typoSleep}>
              {dataDate.ampm}
            </Typography>
          </Grid>
        </Grid>
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
          disabled={props.isArchived}
          onClick={() => {
            props.handleArchive(props.id, props.setListDataCall);
            handleClose();
          }}
          fullWidth
        >
          Save Archive
        </Button>
        <Button
          className={classes.buttonAction}
          variant="text"
          onClick={() => {
            navigate("/details", {
              state: {
                id: props.id,
              },
            });
            handleClose();
          }}
          fullWidth
        >
          View Detail
        </Button>
      </Popover>
    </Box>
  );
};

export default ListCall;
