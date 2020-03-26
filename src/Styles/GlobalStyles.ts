import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  line: {
    flex: 1,
    height: 0.4,
    opacity: 0.5,
    backgroundColor: 'darkgray',
  },
  cell_container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 3,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
    shadowColor: 'gray',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 2,
  },
  listView_container: {
    flex: 1,
    backgroundColor: '#f3f3f4',
  },
  window_height: height,
  window_width: width,
});
