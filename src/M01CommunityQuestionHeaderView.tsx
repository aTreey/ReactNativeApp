/*
 * @Author: yuhongpeng@chehejia.com
 * @Date: 2019-11-15 17:50:29
 * @Last Modified by: yuhongpeng@chehejia.com
 * @Last Modified time: 2019-12-06 11:20:20
 */

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// const {width} = Dimensions.get('window');

export interface M01CommunityQuestionHeaderViewProps {
  title: string;
  answerTotal: number;
}

export default class M01CommunityQuestionHeaderView extends React.PureComponent {
  props: M01CommunityQuestionHeaderViewProps;

  _answerTotalTap() {
    // new ToNativeConfig().jumpNativeScreen();
  }

  _answerTap() {
    // new ToNativeConfig().jumpNativeScreen();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>问答问题标题？</Text>
        <View style={styles.itemContainer}>
          <View style={styles.answerContainer}>
            <Text
              style={styles.answerDesc}
              onPress={() => {
                this._answerTotalTap();
              }}>
              查看全部{this.props.answerTotal}个回答
            </Text>
            <Image
              style={styles.icon}
              source={require('../src/Images/1.png')}
            />
          </View>

          <View style={styles.answerContainer}>
            <Text
              style={styles.answerDesc}
              onPress={() => {
                this._answerTap();
              }}>
              查看全部{this.props.answerTotal}个回答
            </Text>
            <Image
              style={styles.icon}
              source={require('../src/Images/1.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'cyan',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'space-between',
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  title: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    fontSize: 15,
    marginBottom: 0,
    textAlign: 'left',
  },
  answerDesc: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    fontSize: 15,
    marginBottom: 0,
    textAlign: 'left',
  },
});
