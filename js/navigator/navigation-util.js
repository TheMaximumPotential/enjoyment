/**
 * 全局导航跳转工具类
 */
export default class NavigationUtil {
  /**
   * 返回上一页
   * @param naviagtion
   */
  static goBackPage(navigation) {
    navigation.goback();
  }
  /**
   * 返回首页
   * @param params
   */
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('NavTabBar');
  }
}
