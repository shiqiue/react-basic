import axios from "axios";
import * as actionTypes from './actionTypes'

const changDetail = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content
});

export const getDtail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data;
      dispatch(changDetail(result.title, result.content))
    })
  }
};