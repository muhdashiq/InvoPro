import React from 'react'
import {View,StyleSheet, Text} from 'react-native'

const Header = (props) => {
    let {HeaderContainerStyle, HeaderTextStyle} = styles;
    return(
        <View style = {HeaderContainerStyle}>
            <Text style = {HeaderTextStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    HeaderContainerStyle:{
        height: 60,
        //paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        //backgroundColor: '#f8f8f8',
        elevation: 2,
        position: 'relative',
    },
    HeaderTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'darkslategrey',
    },
});

export default Header;