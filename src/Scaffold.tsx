import React from 'react';
import {CouponComponent} from './Coupon/CouponListView';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

interface ScaffoldProps {}

interface ScaffoldState {
  dataSource: any[];
}

const _data: Array<object> = [
  {key: '我的卡券'},
  {key: '选择优惠券'},
  {key: '测试'},
];

export class ScaffoldView extends React.PureComponent<>
//   ScaffoldProps,
//   ScaffoldState
{
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
          <Text>{item.key}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return <CouponComponent />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44,
  },
  item: {
    margin: 5,
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'cyan',
  },
  cellContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
});
