import { Box, Button, Popover } from "@mui/material";
import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./HomePage.styles";
import {
  handleArchive,
  handleFetchDataListCall,
  handleResetArchiveCall,
} from "./HandleHomePage.js";
import ListCall from "../../Component/ListCall/ListCall.jsx";

const ArchiveCall = () => {
  const navigate = useNavigate();
  const [listDataCall, setListDataCall] = useState([]);
  const [listDataArchiveCall, setListDataArchiveCall] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles({
    isArchived: Boolean(listDataArchiveCall?.length),
  });

  useEffect(() => {
    handleFetchDataListCall(setListDataCall);
  }, []);

  useEffect(() => {
    if (listDataCall?.length > 0) {
      const archiveCall = listDataCall.filter((item) => item.is_archived);
      setListDataArchiveCall(archiveCall);
    }
  }, [listDataCall]);

  const onGoBack = () => {
    navigate(-1);
  };
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
      {listDataArchiveCall?.length > 0
        ? listDataArchiveCall?.map((item) => {
            return (
              <ListCall
                key={item.id}
                id={item.id}
                phoneNumber={item.from}
                nameCall={item.id}
                time={item.created_at}
                callType={item.call_type}
                direction={item.direction}
                duration={item.duration}
                isArchived={item.is_archived}
                handleArchive={handleArchive}
                setListDataCall={setListDataCall}
              />
            );
          })
        : null}

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
          disabled={listDataArchiveCall?.length === 0}
          onClick={() => {
            handleResetArchiveCall(setListDataCall);
            handleClose();
          }}
          fullWidth
        >
          Rest
        </Button>
      </Popover>
    </Box>
  );
};

export default ArchiveCall;
