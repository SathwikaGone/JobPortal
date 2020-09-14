import * as Type from "../actions/types";
const initialUserObj = {
  result: [],
  allCourse: [],
};

const handleCreateCourse = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      result: [...action.result.data.addCourse],
    });
  }
  return { ...newState };
};

const handleGetCourse = (state, action) => {
  let newState = { ...state };
  if (action.result.data !== undefined) {
    newState = Object.assign({}, state, {
      allCourse: [...action.result.data.getCategory],
    });
  }
  return { ...newState };
};

const handleGetCourseBySearch = (state, action) => {
  let newState = { ...state };
  if (action.result.data !== undefined) {
    newState = Object.assign({}, state, {
      allCourse: [...action.result.data.searchCards],
    });
  }
  return { ...newState };
};

const handleGetCourseFilter = (state, action) => {
  let newState = { ...state };
  if (action.result.data !== undefined) {
    newState = Object.assign({}, state, {
      allCourse: [...action.result.data.filterCards],
    });
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
      return handleGetCourseBySearch(state, action);
    case Type.GET_COURSE_BY_SEARCH_SERVER_RESPONSE_ERROR:
      return { ...state };

    case Type.GET_FILTER_DATA:
      return { ...state };
    case Type.GET_FILTER_DATA_SERVER_RESPONSE_SUCCESS:
      return handleGetCourseFilter(state, action);
    case Type.GET_FILTER_DATA_SERVER_RESPONSE_ERROR:
      return { ...state };
    default:
      return { ...state };
  }
};
