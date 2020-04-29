import React, {Component} from 'react';
import {View, Text} from 'react-native';

class SearchScreen extends Component {
  render() {
    console.log(this.props.navigation.state.params);
    return (
      <View>
        <Text>{this.props.navigation.state.params}</Text>
      </View>
    );
  }
}

export default SearchScreen;
