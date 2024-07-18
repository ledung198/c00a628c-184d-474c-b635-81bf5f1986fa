import { makeStyles } from "@mui/styles";
import { fontSize } from "../../constant/Constant";

export const useStyles = makeStyles(() => ({
  container: {
    padding: 15,
    cursor: "pointer",
    paddingBottom: 0,
  },
  boxListCall: {
    border: "1px solid #f1f1f1",
    padding: "10px 5px",
    borderRadius: "15px",
    paddingRight: 0,
  },
  typoPhone: {
    fontSize: `${fontSize.large}px !important`,
    lineHeight: "20px",
    marginBottom: "5px",
    fontWeight: "700 !important",
    position: "relative",
    width: "fit-content",
  },
  typoBadge: {
    position: "absolute",
    top: "-5px",
    right: "-15px",
    background: "red",
    color: "white",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    fontSize: `${fontSize.small}px !important`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  typoMessage: {
    fontSize: `${fontSize.small}px !important`,
    color: "#757575",
    fontWeight: "400 !important",
  },
  boxTime: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  typoHours: {
    fontSize: `${fontSize.small}px !important`,
    color: "#757575",
    fontWeight: "400 !important",
  },
  typoSleep: {
    textAlign: "end",
    border: "1px solid #f1f1f1",
    fontSize: `${fontSize.small}px !important`,
    color: "#757575",
    fontWeight: "700 !important",
    padding: "2px 10px",
  },
  typoDataDate: {
    fontSize: `${fontSize.medium}px!important`,
    color: "#757575",
    fontWeight: "500!important",
    marginBottom: "10px",
    textAlign: "center",
    marginBottom: "5px",
  },
  buttonAction: {
    fontSize: `${fontSize.small}px!important`,
    color: "black !important",
    display: "block !important",
  },
}));
