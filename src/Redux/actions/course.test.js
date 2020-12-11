import * as types from "./types";
import * as actions from "./course";

describe("actions", () => {
  it("should create an action to add a course", () => {
    const details = { title: "Java", cost: 35 };
    const expectedAction = {
      type: types.CREATE_COURSE,
      details,
    };
    expect(actions.add_course(details)).toEqual(expectedAction);
  });

  it("should create an action to get course", () => {
    let category = "IT";
    expect(actions.get_course(category)).toEqual({
      type: types.GET_COURSE,
      category,
    });
  });

  it("should create an action to search by word", () => {
    let word = "react";
    expect(actions.get_course_by_search(word)).toEqual({
      type: types.GET_COURSE_BY_SEARCH,
      word,
    });
  });

  it("should create a action to search by filter", () => {
    let filter = ["lessthanfive"];
    expect(actions.get_course_by_filter(filter)).toEqual({
      type: types.GET_FILTER_DATA,
      filter,
    });
  });
});
