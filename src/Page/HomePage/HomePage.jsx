import React, { useEffect, useState } from "react";
import ListCall from "../../Component/ListCall/ListCall.jsx";
import { Box, Button, Typography } from "@mui/material";
import { useStyles } from "./HomePage.styles.js";
import { handleArchive, handleFetchDataListCall } from "./HandleHomePage.js";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { DIRECTION } from "../../constant/Constant.js";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomePage = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const [listDataCall, setListDataCall] = useState([]);
  const [callInbox, setCallInbox] = useState([]);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    handleFetchDataListCall(setListDataCall);
  }, []);

  useEffect(() => {
    if (listDataCall?.length > 0) {
      const inbox = listDataCall.filter(
        (item) => item.direction === DIRECTION.IN
      );
      setCallInbox(inbox);
    }
  }, [listDataCall]);

  return (
    <Box className={classes.main}>
      <Box className={classes.tabBox}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Inbox" {...a11yProps(0)} />
          <Tab label="All calls" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0} className={classes.tab}>
        <Box className={classes.container}>
          <Box sx={{ padding: "10px" }}>
            <Box className={classes.boxListCall}>
              <Button
                onClick={() => navigate("/archive")}
                fullWidth
                startIcon={<StorefrontIcon />}
              >
                Archive all calls
              </Button>
            </Box>
          </Box>
          {callInbox?.length > 0
            ? callInbox?.map((item) => {
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
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className={classes.tab}>
        <Box className={classes.container}>
          <Box sx={{ padding: "10px" }}>
            <Box className={classes.boxListCall}>
              <Button
                onClick={() => navigate("/archive")}
                fullWidth
                startIcon={<StorefrontIcon />}
              >
                Archive all calls
              </Button>
            </Box>
          </Box>
          {listDataCall?.length > 0
            ? listDataCall?.map((item) => {
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
        </Box>
      </CustomTabPanel>
    </Box>
  );
};

export default HomePage;
