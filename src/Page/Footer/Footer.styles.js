import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    boxShadow: " 0 -1px 0 rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  iconCenter: {
    background: "#43BE21 !important",
    borderRadius: "50% !important",
    width: "70px !important",
    height: "70px !important",
    minWidth: "70px !important",
    minHeight: "70px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>svg": {
      color: "#fff",
      fontSize: "35px",
    },
    position: "absolute",
    top: "-50%",
    border: "4px solid #fff !important",
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
}));