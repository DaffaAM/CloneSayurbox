import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

class SearchScreen extends Component {
  render() {
    console.log(this.props.navigation.state.params);
    return (
      <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              backgroundColor: 'white',
            }}>
            <View style={{position: 'relative', flex: 1, marginLeft: 30}}>
              <TextInput
                placeholder="Cari Produk segar di sini...."
                style={{
                  borderWidth: 2,
                  borderColor: '#E8E8E8',
                  borderRadius: 10,
                  height: 40,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: '#E7ECE7',
                }}
              />
              <Image
                source={require('../assets/assetsF/Icon/Search.png')}
                style={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  height: 25,
                  width: 25,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 15,
            backgroundColor: 'white',
            marginVertical: 2,
          }}>
          <Text style={{fontSize: 26}}>
            {this.props.navigation.state.params}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {/* insert Product as Category*/}
        </View>
      </View>
    );
  }
}

export default SearchScreen;
