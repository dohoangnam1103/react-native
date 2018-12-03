/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    colors:['yellow', 'orange' ,'red' , 'blue', 'cyan', 'green'],
    selectColor:""
  }
  didSelectColor = (color) => {
    this.setState({selectColor:color})
  }
  didSelectGoBack = () => {
    this.setState({selectColor:""})
  }
  render() {
    if (this.state.selectColor !== "") {
      return (<TouchableOpacity 
                onPress={() => this.didSelectGoBack()} 
                style={[styles.cell,{backgroundColor:this.state.selectColor}]}>
              </TouchableOpacity>)
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>Color Match</Text>
        </View>
        {
          this.state.colors.map( (color, index) => {
            return (<TouchableOpacity 
                      onPress={() => this.didSelectColor(color)} 
                      key={index} 
                      style={[styles.cell,{backgroundColor:color}]}>
                    </TouchableOpacity>)
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  titleContainer: {
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  title: {
    fontSize:32
  },
  cell: {
    flex:1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
