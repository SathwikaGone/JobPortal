import * as Types from "./types";

export const add_course = (details) => {
  return {
    type: Types.CREATE_COURSE,
    details,
  };
};

export const get_course = (category) => {
  return {
    type: Types.GET_COURSE,
    category,
  };
};

export const get_course_by_search = (word) => {
  return {
    type: Types.GET_COURSE_BY_SEARCH,
    word,
  };
};
