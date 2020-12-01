import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAt } from "../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component ", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAt(component, "nav");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const wrapper = findByTestAt(component, "logo");
    expect(wrapper.text()).toBe("eLearning");
  });
});
