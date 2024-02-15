import { LOAD_SERIES } from '../actions';

const initialState = {
  series: [],
};

const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SERIES:
      return {
        ...state,
        series: action.payload,
      };
    default:
      return state;
  }
};

export default seriesReducer;
