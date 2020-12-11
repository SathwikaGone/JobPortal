import React from "react";
import Filter from "./Filter";
import { shallow, mount } from "enzyme";
import { findByTestAt, testStore } from "../../Utils/index";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<Filter store={store} />);
  return component;
};

describe("Filter Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  //not working
  it("handleChecked method should update the state as expected", () => {
    let mockState = {
      target: {
        checked: true,
        name: "lessthanfive",
      },
    };

    // let mockFunc = jest.fn();
    // let button = findByTestAt(component, "lessthanfive");
    // button.simulate("click", mockState);
    // expect(mockFunc).toBeCalledTimes();
    // const filterState = classInstance.Filter;
    // expect(component.state.).toBe(["lessthanfive"]);

    const store = testStore({});

    const setFilters = jest.fn();
    const wrapper = mount(<Filter onClick={setFilters} store={store} />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((Filters) => [Filters, setFilters]);

    wrapper.find(`[data-test='lessthanfive']`).simulate("click", mockState);
    console.log("setFilters", setFilters);
    expect(setFilters).toBeTruthy();
    expect(setFilters.mock.calls.length).toEqual(1);

    // setFilters.mockReturnValueOnce(["lessthanfive"]);
    // let p = setFilters();
    // console.log("p", p);
    // expect([...p]).toStrictEqual(["lessthanfive"]);
  });
});
