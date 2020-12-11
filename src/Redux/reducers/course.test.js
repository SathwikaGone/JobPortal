import * as types from "../actions/types";
import courseReducer from "./course";
describe("Course Reducer ", () => {
  const defaultState = {
    allCourse: [],
    result: [],
  };

  let data;
  beforeEach(() => {
    data = {
      result: { data: { addCourse: [{ name: "Java", cost: 15 }] } },
    };
  });

  describe("Default states", () => {
    it("Should return default state", () => {
      const newState = courseReducer(undefined, {});
      expect(newState).toEqual({ ...defaultState });
    });

    it("Should return default state for initial CREATE_COURSE requests", () => {
      const newState = courseReducer(defaultState, {
        type: types.CREATE_COURSE,
        data,
      });
      expect(newState).toEqual({ ...defaultState });
    });

    it("Should return default state for initial GET_COURSE requests", () => {
      let catagory = "IT";
      const newState = courseReducer(defaultState, {
        type: types.GET_COURSE,
        catagory,
      });

      expect(newState).toEqual({ ...defaultState });
    });

    it("Should return default state for initial GET_COURSE_BY_SEARCH requests", () => {
      let word = "react";
      const newState = courseReducer(defaultState, {
        type: types.GET_COURSE_BY_SEARCH,
        word,
      });

      expect(newState).toEqual({ ...defaultState });
    });

    it("Should return default state for initial GET_FILTER_DATA requests ", () => {
      let filter = ["lessthanfive"];
      const newState = courseReducer(defaultState, {
        type: types.GET_FILTER_DATA,
        filter,
      });

      expect(newState).toEqual({ ...defaultState });
    });
  });

  describe("Update states", () => {
    it("Should return updated state for addCourse success request", () => {
      let action = {
        type: types.CREATE_COURSE_SERVER_RESPONSE_SUCCESS,
        result: data.result,
      };
      const newState = courseReducer(defaultState, action);
      expect(newState).toEqual({
        allCourse: [],
        result: [{ cost: 15, name: "Java" }],
      });
    });
  });
});
