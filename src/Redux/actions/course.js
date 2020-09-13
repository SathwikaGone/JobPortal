import * as Types from "./types";

export const add_course = (result) => {
  return {
    type: Types.CREATE_COURSE,
    result,
  };
};

export const get_course = () => {
  return {
    type: Types.GET_COURSE,
  };
};

export const get_course_by_search = (result) => {
  return {
    type: Types.GET_COURSE_BY_SEARCH,
    result,
  };
};
