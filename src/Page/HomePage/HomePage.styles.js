import { makeStyles } from "@mui/styles";
import { fontSize } from "../../constant/Constant";

export const useStyles = makeStyles((props) => ({
  main: {
    position: "relative",
  },
  container: {
    overflowY: "auto",
    height: "550px",
    background: "#FAFAF9",
    scrollbarWidth: "none",
  },

  tabBox: {
    position: "absolute",
    right: 0,
    top: "-10%",
    zIndex: 999,
    width: "65%",
    display: "flex",
    justifyContent: "flex-end",
   
  },
  groupButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  buttonAction: (props) => ({
    fontSize: `${fontSize.small}px!important`,
    color: !props?.isArchived ? "#f1f1f1 !important" : "black !important",
    display: "block !important",
  }),
  boxImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  boxName: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },
  typoName: {
    fontSize: `${fontSize.large}px!important`,
    color: "#757575",
    fontWeight: "700!important",
  },
  typoButtonAction: {
    color: "black!important",
    display: "block!important",
    fontSize: `${fontSize.semiSmall}px!important`,
  },
  iconButtonAction: {
    color: "black!important",
    width: "100%",
    "& svg": {
      fontSize: `22px!important`,
    },
  },
  content: {
    padding: "20px 10px",
  },
  groupData: {
    background: "#f3f3f3",
    borderRadius: "13px",
    padding: "15px",
    marginBottom: "15px",
  },
  typoTitleContent: {
    fontSize: `${fontSize.small}px!important`,
    color: "#757575",
    fontWeight: "600!important",
  },
  boxListCall: {
    border: "1px solid #f1f1f1",
    padding: "10px 5px",
    borderRadius: "15px",
    paddingRight: 0,
  },
  tab: {
    "&>.MuiBox-root": {
      padding: "5px !important",
    },
  },
}));
