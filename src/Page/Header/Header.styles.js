import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    height: 75,
    padding: "0px 10px",
    // borderRight: "1px solid #f3f3f3",
    width: "20%",
    boxShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    // borderBottomRightRadius: "90%",
    justifyContent: "center",
    "& svg": {
      display: "block",
      width: "100%",
      height: "100%",
    },
  },
  borderLine: {
    height: 75,
    width: "50px",
    background: "#fff",
    borderRight: '1px solid #f3f3f3',
    borderBottom: '1px solid #f3f3f3',
    borderBottomRightRadius: '50%',
    borderTopLeftRadius: '50%',
  },
}));
