import * as Type from "../actions/types";
const initialUserObj = {
  result: [],
};

const handleCreateCourse = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    let r = state.result;
    r.push(action.result.data.addEmployee);
    newState = Object.assign({}, state, { result: r });
  }
  return { ...newState };
};

const handleGetCourse = (state, action) => {
  let newState = { ...state };
  if (action.result.data !== undefined) {
    let r = state.result;
    r.push(action.result.data.allEmployees);
    newState = Object.assign({}, state, { allCourse: r });
  }
  return { ...newState };
};

export default (state = initialUserObj, action = {}) => {
  switch (action.type) {
    case Type.CREATE_COURSE:
      return { ...state };
    case Type.CREATE_COURSE_SERVER_RESPONSE_SUCCESS:
      return handleCreateCourse(state, action);
    case Type.CREATE_COURSE_SERVER_RESPONSE_ERROR:
      return { ...state };

    case Type.GET_COURSE:
      return { ...state };
    case Type.GET_COURSE_DETAILS_SERVER_RESPONSE_SUCCESS:
      return handleGetCourse(state, action);
    case Type.GET_COURSE_DETAILS_SERVER_RESPONSE_SUCCESS:
      return { ...state };

    case Type.GET_COURSE_BY_SEARCH:
      return { ...state };
    case Type.GET_COURSE_BY_SEARCH_SERVER_RESPONSE_SUCCESS:
      return handleGetCourse(state, action);
    case Type.GET_COURSE_BY_SEARCH_SERVER_RESPONSE_ERROR:
      return { ...state };
    default:
      return { ...state };
  }
};
