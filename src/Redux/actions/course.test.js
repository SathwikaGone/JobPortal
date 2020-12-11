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
});
