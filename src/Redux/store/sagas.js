import { takeEvery, call, put } from "redux-saga/effects";
import * as Types from "../actions/types";
import { GetDataFromServer } from "../service";

function* createCourse(action) {
  try {
    let formBody = {};
    formBody = action.result;
    const loginUrl = "http://localhost:5000/api";
    const body = {
      query: `mutation{
            addCourse(Course: {
              courseName:"${details.courseName}",
              description:" ${details.description}",
              category:"${details.category}",
              level:" ${details.level}",
              createdBy: "${details.createdBy}",
              toLearn: "${details.toLearn}",
              requirments:" ${details.requirments}",
              access: "${details.access}",
              certification : "${details.certification}",
              duration: ${details.duration},
              price: ${details.price},
            } ){
              courseName
              category
            }
          }`,
    };

    const response = yield call(GetDataFromServer, loginUrl, "POST", body);
    const result = yield response.json();
    console.log("Result Json" + JSON.stringify(result));
    if (result.error) {
      yield put({
        type: Types.CREATE_COURSE_SERVER_RESPONSE_ERROR,
        error: result.error,
      });
    } else {
      yield put({
        type: Types.CREATE_COURSE_SERVER_RESPONSE_SUCCESS,
        result,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getCourse(action) {
  try {
    let formBody = {};
    formBody = action.result;
    const reqMethod = "POST";
    const loginUrl = "http://localhost:5000/api";
    const body = {
      query: `query{
        getCategory(category: "${category}"){
          courseName
          category
          level
          description
          price
          access
          certification
          toLearn
          requirments
          duration
          createdBy
          date
        }
      }`,
    };

    const response = yield call(GetDataFromServer, loginUrl, "POST", body);
    const result = yield response.json();
    console.log("Result Json" + JSON.stringify(result));
    if (result.error) {
      yield put({
        type: Types.GET_COURSE_DETAILS_SERVER_RESPONSE_ERROR,
        error: result.error,
      });
    } else {
      yield put({
        type: Types.GET_COURSE_DETAILS_SERVER_RESPONSE_SUCCESS,
        result,
      });
      console.log("EMPLOYEE DETAILS" + JSON.stringify(result));
    }
  } catch (error) {
    console.log(error);
  }
}

function* getCourseBySearch(action) {
  try {
    let formBody = {};
    formBody = action.result;
    const reqMethod = "POST";
    const loginUrl = "http://localhost:5000/api";
    const body = {
      query: `query{
            searchCards(word: "${value}"){
              courseName
              category
              level
              description
              price
              access
              certification
              toLearn
              requirments
              duration
              createdBy
              date
            }
          }`,
    };

    const response = yield call(GetDataFromServer, loginUrl, "POST", body);
    const result = yield response.json();
    console.log("Result Json" + JSON.stringify(result));
    if (result.error) {
      yield put({
        type: Types.GET_COURSE_BY_SEARCH_SERVER_RESPONSE_ERROR,
        error: result.error,
      });
    } else {
      yield put({
        type: Types.GET_COURSE_DETAILS_SERVER_RESPONSE_SUCCESS,
        result,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga(params) {
  yield takeEvery(Types.CREATE_COURSE, createCourse);
  yield takeEvery(Types.GET_COURSE, getCourse);
  yield takeEvery(Types.GET_COURSE_BY_SEARCH, getCourseBySearch);

  console.log("ROOT SAGA");
}
