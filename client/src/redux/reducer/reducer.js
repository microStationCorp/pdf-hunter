import { queryState } from "../state/states.js";
import { ITEM_LOADED, ITEM_LOADING } from "../constants/constants.js";

export const queryReducer = (state = queryState, action) => {
  switch (action.type) {
    case ITEM_LOADING:
      return {
        ...state,
        isLoading: true,
        queryResult: [],
        firstLoad: false,
        queryKeyword: action.payload,
      };

    case ITEM_LOADED:
      return {
        ...state,
        queryResult: action.payload,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
