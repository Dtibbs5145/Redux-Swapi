import { FETCHING, SUCCESS, FAILURE } from '../actions';


const initialState = {
  characters: [],
  error: null,
  isFetching: false  
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
      };
      case SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload.results
      };
      case FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
