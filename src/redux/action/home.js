import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage} from '../../utils';

export const getFoodData = () => (dispatch) => {
  Axios.get(`${API_HOST.url_bwa}/food`)
    .then((res) => {
      //   console.log('res food: ', res.data.data.data);
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch((err) => {
      showMessage(err?.response?.data?.data?.message);
    });
};
