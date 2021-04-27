import { ITEM_LOADED, ITEM_LOADING } from "../constants/constants.js";
import axios from "axios";

export const getQueryResult = (queryData) => (dispatch) => {
  dispatch({
    type: ITEM_LOADING,
    payload: queryData.keyword,
  });

  axios
    .post("http://localhost:5000/api/q", { key: queryData.keyword })
    .then((res) => dispatch({ type: ITEM_LOADED, payload: res.data }));
};
