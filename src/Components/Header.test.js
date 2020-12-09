import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAt, testStore } from "../../Utils/index";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<Header store={store} />).dive();
  return component;
};

describe("Header Component ", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAt(component, "nav");
    console.log("debug", wrapper.get(0));
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const wrapper = findByTestAt(component, "logo");
    expect(wrapper.text()).toBe("eLearning");
  });
});
