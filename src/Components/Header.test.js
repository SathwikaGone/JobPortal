import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAt, testStore } from "../../Utils/index";
import * as actions from "../Redux/actions/course";
let mockFunc = jest.fn();
const setUp = (initialState = {}, props = { dispatch: jest.fn() }) => {
  const store = testStore(initialState);

  const component = shallow(
    <Header store={store} {...props} onClick={mockFunc} />
  ).dive();
  return component;
};

describe("Header Component ", () => {
  let component;
  let mockFunc;

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

  //not working
  it("should trigger a callback event once", () => {
    // let mockFunc = jest.fn();
    // mockFunc();
    // actions.get_course = jest.fn();
    // const button = findByTestAt(component, "search");

    // console.log("button debug", button.debug());
    // button.prop("onClick")();
    // component.instance().searchData(mockFunc);
    // expect(props.dispatch.mock.calls.length).toBe(1);

    // button.simulate("click");

    // component.find("BsSearch").simulate("click");
    // expect(mockFunc.mock.calls.length).toBe(1);
    // expect(mockFunc).toHaveBeenCalled();

    //https://stackoverflow.com/questions/43747397/simulate-a-button-click-in-jest
    const store = testStore({});
    let props = { dispatch: jest.fn() };
    const component = shallow(
      <Header store={store} {...props} onClick={mockFunc} />
    ).dive();
    const buttonn = findByTestAt(component, "search");

    buttonn.simulate("click");
    expect(mockFunc).toHaveBeenCalled();
  });
});
