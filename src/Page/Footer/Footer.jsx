import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";
import { useStyles } from "./Footer.styles";
const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.container}
    >
      <BottomNavigationAction value="recents" icon={<LocalPhoneIcon />} />
      <BottomNavigationAction value="favorites" icon={<PersonIcon />} />
      <BottomNavigationAction
        value="nearby"
        icon={<AppsIcon />}
        className={classes.iconCenter}
      />
      <BottomNavigationAction value="folder" icon={<SettingsIcon />} />
      <BottomNavigationAction
        value="GpsNotFixedIcon"
        icon={<GpsNotFixedIcon />}
      />
    </BottomNavigation>
  );
};

export default Footer;
