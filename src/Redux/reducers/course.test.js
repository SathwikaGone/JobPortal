import * as types from "../actions/types";
import courseReducer from "./course";
describe("Course Reducer ", () => {
  const defaultState = {
    allCourse: [],
    result: [],
  };
  it("Should return default state", () => {
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual({ ...defaultState });
  });

  it("Should return default state for initial requests", () => {
    let data = { result: { data: { addCourse: { name: "Java", cost: 15 } } } };
    const newState = courseReducer(defaultState, {
      type: types.CREATE_COURSE,
      data,
    });
    expect(newState).toEqual({ ...defaultState });
  });

  it("Should return updated state for addCourse success request", () => {
    let action = {
      type: types.CREATE_COURSE_SERVER_RESPONSE_SUCCESS,
      result: { data: { addCourse: [{ name: "Java", cost: 15 }] } },
    };
    const newState = courseReducer(defaultState, action);
    expect(newState).toEqual({
      allCourse: [],
      result: [{ cost: 15, name: "Java" }],
    });
  });
});
