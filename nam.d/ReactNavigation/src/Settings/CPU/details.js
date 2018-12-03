import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

class CPUDetails extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.navigation.getParam('title')}</Text>
                <Button
                    onPress={() => this.props.navigation.setParams({ title: 'DEF' })}
                    title="change param navigation"
                />
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})


export default CPUDetails;
