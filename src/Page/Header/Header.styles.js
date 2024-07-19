import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    height: 60,
    padding: "0px 10px",
    width: "35%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#fff",
    borderBottomRightRadius: "35px",
    "& svg": {
      display: "block",
      width: "80%",
      height: "100%",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "30px",
      top: 0,
      right: "-100%",
      borderLeft: "1px solid #0000001a",
      borderTopLeftRadius: "100px",
      background: "#FAFAF9",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "30px",
      bottom: 0,
      right: 0,
      borderRight: "1px solid #0000001a",
      borderBottomRightRadius: "100px",
      borderBottom: "1px solid #0000001a",
    },
  },
  borderLine: {
    height: 75,
    width: "50px",
    background: "#fff",
    borderRight: "1px solid #f3f3f3",
    borderBottom: "1px solid #f3f3f3",
    borderBottomRightRadius: "50%",
    borderTopLeftRadius: "50%",
  },
}));
