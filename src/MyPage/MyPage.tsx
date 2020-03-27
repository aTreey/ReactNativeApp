import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import GlobalStyles from '../Styles/GlobalStyles';
import ViewUtils from '../Util/ViewUtils';
import {MyPage_Menu} from './enum/MoreMenu';

interface IProps {}

class MyPage extends PureComponent<IProps> {
  render() {
    return (
      <View style={GlobalStyles.listView_container}>
        <ScrollView>
          <TouchableHighlight onPress={() => {}}>
            <View style={{backgroundColor: 'cyan', height: 130}}>
              <Text>Header View</Text>
            </View>
          </TouchableHighlight>
          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.MyGrade,
            require('../Images/1.png'),
            MyPage_Menu.MyGrade,
            '理想会员',
          )}
          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.MyMessage,
            require('../Images/1.png'),
            MyPage_Menu.MyMessage,
            null,
          )}
          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.MyOrder,
            require('../Images/1.png'),
            MyPage_Menu.MyOrder,
            null,
          )}
          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.MyChargingPile,
            require('../Images/1.png'),
            MyPage_Menu.MyChargingPile,
            null,
          )}

          <Text style={styles.groupTitle} />

          {this.getItem(
            MyPage_Menu.InviteBuyCar,
            require('../Images/1.png'),
            MyPage_Menu.InviteBuyCar,
            '邀请购车-邀请二维码',
          )}
          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.InviteBuyCar,
            require('../Images/1.png'),
            MyPage_Menu.InviteBuyCar,
            null,
          )}
          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.MyIntegral,
            require('../Images/1.png'),
            MyPage_Menu.MyIntegral,
            null,
          )}
          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.MyCoupon,
            require('../Images/1.png'),
            MyPage_Menu.MyCoupon,
            null,
          )}
          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.MyActivity,
            require('../Images/1.png'),
            MyPage_Menu.MyActivity,
            null,
          )}
          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.MyFavorite,
            require('../Images/1.png'),
            MyPage_Menu.MyFavorite,
            null,
          )}

          <Text style={styles.groupTitle} />

          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.Setting,
            require('../Images/1.png'),
            MyPage_Menu.Setting,
            null,
          )}
          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.HelpCenter,
            require('../Images/1.png'),
            MyPage_Menu.HelpCenter,
            null,
          )}
          <View style={GlobalStyles.line} />
          {this.getItem(
            MyPage_Menu.FeedBack,
            require('../Images/1.png'),
            MyPage_Menu.FeedBack,
            null,
          )}
        </ScrollView>
      </View>
    );
  }

  onClick(tag: MyPage_Menu) {
    switch (tag) {
      case MyPage_Menu.MyGrade:
        console.log('click' + tag);
        break;
      case MyPage_Menu.Setting:
        break;
      default:
        console.log('click 其他' + tag);
        break;
    }
  }

  getItem(tag: MyPage_Menu, icon, title: string, subTitle: string) {
    return ViewUtils.getSettingItem(
      () => this.onClick(tag),
      icon,
      title,
      subTitle,
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  groupTitle: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 12,
    color: 'gray',
  },
});

export default MyPage;
