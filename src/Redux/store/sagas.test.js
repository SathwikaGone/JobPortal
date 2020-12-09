import { put, takeEvery } from "redux-saga/effects";
import rootSaga, { createCourse } from "./sagas";
import * as types from "../actions/types";

describe("SAGAS", () => {
  let action = {};
  let mockResponse;
  beforeEach(() => {
    action.details = {
      courseName: "react java",
      category: "cat",
      level: "fgfg",
      description: "ghhghgh",
      price: 23,
      access: "fgfg",
      certification: "hhghg",
      toLearn: "ggfg",
      requirments: "gfgfg",
      duration: 23,
      createdBy: "hghgh",
    };
    mockResponse = {
      result: {
        data: { addCourse: { courseName: "react java", category: "cat" } },
      },
    };

    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });
  });

  it('should dispatch action "CREATE_COURSE" ', () => {
    const generator = rootSaga();
    expect(generator.next().value).toEqual(
      takeEvery(types.CREATE_COURSE, createCourse)
    );
    // expect(generator.next().done).toBeTruthy();
  });

  // NOT WORKING
  it('should dispatch action "CREATE_COURSE_SERVER_RESPONSE_SUCCESS" with result from fetch API', () => {
    const generator = createCourse(action);
    generator.next();

    // const mockFetch = Promise.resolve({ json: () => Promise.resolve(accepted) });
    // global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    console.log(generator.next(mockResponse).value);
    expect(generator.next(mockResponse).value).toEqual(
      put({
        type: types.CREATE_COURSE_SERVER_RESPONSE_SUCCESS,
        result: {
          data: { addCourse: { courseName: "react java", category: "cat" } },
        },
      })
    );
    //     expect(generator.next().done).toBeTruthy();
  });
});
