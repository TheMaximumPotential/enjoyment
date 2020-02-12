import Types from '../types';
import DataStore from '../../expand/dao/DataStore';
export function onLoadListData(storeName, url) {
  return dispatch => {
    dispatch({type: Types.LIST_REFRESH, storeName});
    let dataStore = new DataStore();
    dataStore
      .fetchData(url) // 异步action与数据流
      .then(data => {
        handleData(dispatch, storeName, data);
      })
      .catch(error => {
        dispatch({
          type: Types.LIST_LOAD_FAIl,
          storeName,
          error,
        });
      });
  };
}
function handleData(dispatch, storeName, data) {
  dispatch({
    type: Types.LIST_LOAD_SUCCESS,
    items: data && data.data && data.data.items,
    storeName,
  });
}
