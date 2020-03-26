import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
export class DashLine extends React.Component {
  render() {
    var len = this.props.len;
    var array = [];
    for (let i = 0; i < len; i++) {
      array.push(i);
    }

    return (
      <View style={[styles.dashLine, {width: this.props.width}]}>
        {array.map(() => {
          return (
            <Text
              style={[
                styles.dashItem,
                {backgroundColor: this.props.backgroundColor},
              ]}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dashLine: {
    flexDirection: 'row',
  },
  dashItem: {
    flex: 1,
    height: 1,
    width: 2,
    marginHorizontal: 2,
    marginRight: 2,
    backgroundColor: '#ddd',
  },
});
