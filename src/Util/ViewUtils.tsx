import React from 'react';
import {TouchableHighlight, View, Image, StyleSheet, Text} from 'react-native';

export default class ViewUtils {
  static getSettingItem(callBack, icon, title, subTitle) {
    return (
      <TouchableHighlight onPress={callBack}>
        <View style={styles.setting_item_container}>
          <View style={styles.setting_item_LeftContainer}>
            {icon ? <Image source={icon} style={styles.icon} /> : <View />}
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.setting_item_rightContainer}>
            <Text style={styles.subTitle}>{subTitle}</Text>
            <Image
              source={require('../Images/ic_tiaozhuan.png')}
              style={styles.arrow}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  setting_item_container: {
    backgroundColor: 'white',
    padding: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  setting_item_LeftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  title: {
    padding: 10,
    color: '#2F2F2F',
    fontSize: 16,
  },

  subTitle: {
    color: '#666666',
    fontSize: 16,
  },

  icon: {
    opacity: 1,
    width: 40,
    height: 40,
  },

  arrow: {
    padding: 10,
    opacity: 1,
    width: 40,
    height: 40,
  },

  setting_item_rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
