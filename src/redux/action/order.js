import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils';

export const getOrders = () => (dispatch) => {
  getData('token').then((resToken) => {
    Axios.get(`${API_HOST.url}/transaction`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then((res) => {
        dispatch({type: 'SET_ORDER', value: res.data.data.data});
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  });
};
