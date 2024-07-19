import axios from "axios";
import { URL_API } from "../../Config/Config.js";
import { handleCheckResponse } from "../../constant/Constant.js";

export const handleFetchDataListCall = (setListDataCall) => {
  axios
    .get(`${URL_API}/activities`)
    .then((res) => {
      if (handleCheckResponse(res)) {
        setListDataCall(res.data.reverse());
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleArchive = (id, setListDataCall) => {
  axios
    .patch(`${URL_API}/activities/${id}`, {
      is_archived: true,
    })
    .then((res) => {
      if (handleCheckResponse(res)) {
        handleFetchDataListCall(setListDataCall);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleGetDetail = (id, setDataDetail) => {
  return axios
    .get(`${URL_API}/activities/${id}`)
    .then((res) => {
      if (handleCheckResponse(res)) {
        setDataDetail(res.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleResetArchiveCall = (setListDataCall) => {
  axios
    .patch(`${URL_API}/reset`)
    .then((res) => {
      if (handleCheckResponse(res)) {
        handleFetchDataListCall(setListDataCall);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleArchiveListCallDetail = (id, setDataDetail) => {
  axios
    .patch(`${URL_API}/activities/${id}`, {
      is_archived: true,
    })
    .then((res) => {
      if (handleCheckResponse(res)) {
        handleGetDetail(id, setDataDetail);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
