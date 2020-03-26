import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import M01CommunityQuestionHeaderView from '../M01CommunityQuestionHeaderView';
import {DashLineComponent} from './components/DashLineComponent';

interface ScaffoldProps {}

interface ScaffoldState {
  dataSource: any[];
}

const _data: Array<object> = [
  {key: '我的卡券'},
  {key: '选择优惠券'},
  {key: '测试'},
];

export class CouponComponent extends React.Component {
  constructor(props: ScaffoldProps) {
    super(props);
    this.state = {
      dataSource: _data,
    };
  }

  _clickRow = () => {
    console.log('点击优惠券详情');
  };

  _renderRow = ({item}: {item: any}) => {
    return (
      <TouchableWithoutFeedback
        style={styles.cellContainer}
        onPress={this._clickRow}>
        <View style={styles.item}>
          {this._renderInfo()}
          <View style={styles.dashContainer}>
            <DashLineComponent />
          </View>
          {this._renderIntroduce()}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  _renderInfo() {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>¥1000</Text>
        <View style={styles.verticalLine} />
        <View style={styles.infoTextContainer}>
          <Text style={styles.titleText}>提车活动满100000-1000</Text>
          <Text style={styles.timeText}>201.12.12-2020.01.12</Text>
        </View>
      </View>
    );
  }

  _renderIntroduce() {
    return (
      <View style={styles.introduceContainer}>
        <Text style={styles.timeText}>使用说明</Text>
        <Image style={styles.arrowImage} source={{uri: 'arrow'}} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <M01CommunityQuestionHeaderView /> */}
        <FlatList data={this.state.dataSource} renderItem={this._renderRow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44,
    backgroundColor: 'gray',
  },

  item: {
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  cellContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 15,
    // backgroundColor: 'green',
    borderRadius: 5,
  },

  infoContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'blue',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
  verticalLine: {
    width: 1,
    height: 30,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'gray',
  },

  infoTextContainer: {
    flex: 1,
  },

  titleText: {
    fontSize: 18,
  },

  timeText: {
    fontSize: 14,
    color: 'gray',
  },
  dashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  introduceContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'blue',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
  arrowImage: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
  },
});
