import {AsyncStorge} from 'react-native';
import {call} from 'react-native-reanimated';

export default class DataStore {
  /**
   * 保存数据
   * @param url
   * @param data
   * @param callback
   */
  saveData(url, data, callback) {
    if (!data || !url) return;
    AsyncStorge.setItem(url, JSON.stringify(this._wrapData(data)), callback);
  }
  /**
   * 获取本地数据
   * @param url
   * @return {Promise}
   */
  fetchData(url) {
    return new Promise((resolve, reject) => {
      this.fetchLocalData(url)
        .then(wrapData => {
          if (wrapData && DataStore.checkTimestampValid(wrapData.timestamp)) {
            resolve(wrapData);
          } else {
            this.fetchNetData(url)
              .then(data => {
                resolve(this._wrapData(data));
              })
              .catch(error => {
                reject(error);
              });
          }
        })
        .catch(error => {
          this.fetchNetData(url)
            .then(data => {
              resolve(this._wrapData(data));
            })
            .catch(error => {
              reject(error);
            });
        });
    });
  }
  _wrapData(data) {
    return {data: data, timestamp: new Date().getTime()};
  }
  /**
   * 检查timestamp是否在有效期内
   * @param timestamp 项目更新时间
   * @return {boolean} true 不需要更新, false 需要更新
   */
  static checkTimestampValid(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date();
    targetDate.setTime(timestamp);
    if (currentDate.getMonth() !== targetDate.getMonth()) return false;
    if (currentDate.getDate() !== targetDate.getDate()) return false;
    if (currentDate.getHours() - targetDate.getHours() > 4) return false; // 有效期四小时
    return true;
  }
}
