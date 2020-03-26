import React from 'react';
import {StyleSheet, View} from 'react-native';
export class DashLineComponent extends React.Component {
  render() {
    return (
      <View style={[styles.wrapperStyle]}>
        <View style={styles.lineStyle} />
        <View style={styles.lineMask} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperStyle: {
    height: 2,
    overflow: 'hidden',
  },
  lineStyle: {
    height: 0,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  lineMask: {
    marginTop: -2,
    height: 2,
    backgroundColor: 'white',
  },
});
