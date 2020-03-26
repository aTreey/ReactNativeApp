import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Switch,
} from 'react-native';
import GlobalStyles from '../Styles/GlobalStyles';
import ViewUtils from '../Util/ViewUtils';

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

          <Text style={styles.groupTitle}>第一组</Text>
          <View style={GlobalStyles.line} />
          {this.getItem(1, null, '设置', '请选择')}
          <View style={GlobalStyles.line} />
          <View style={GlobalStyles.line} />
          {this.getItem(2, require('../Images/1.png'), '设置', '请选择')}
          <View style={GlobalStyles.line} />
          {this.getItem(3, require('../Images/1.png'), '设置', '250M')}
          <View style={GlobalStyles.line} />

          <Text style={styles.groupTitle}>第二组</Text>
          <View style={GlobalStyles.line} />
          {this.getItem(4, require('../Images/1.png'), '设置', null)}
          <View style={GlobalStyles.line} />
          <View style={GlobalStyles.line} />
          {this.getItem(5, require('../Images/1.png'), '设置', '250M')}
          <View style={GlobalStyles.line} />
        </ScrollView>
        <Text style={styles.groupTitle}>我的页面</Text>
      </View>
    );
  }

  onClick(tag) {
    switch (tag) {
      case 1:
        console.log('click' + tag);
        break;

      default:
        console.log('click 其他' + tag);
        break;
    }
  }

  getItem(tag, icon, title, subTitle) {
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
