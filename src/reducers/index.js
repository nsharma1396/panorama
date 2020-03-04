import { LOADING, SUCCESS, ERROR, CHANGE_CURRENT } from "../constants";

const init = {
  data: [],
  status: "loadState",
  current: 0
};

export default (state = init, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, status: "loading" };
    case SUCCESS:
      return { ...state, status: "success", data: action.items };
    case ERROR:
      return { ...state, status: "error" };
    case CHANGE_CURRENT:
      return { ...state, current: action.index };
    default:
      return state;
  }
};
