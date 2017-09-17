import React from 'react'
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native'
import firebase from 'firebase'
const Header = (props) => {
    let {HeaderContainerStyle, HeaderTextStyle,headerDataBlockStyle} = styles;
    return(
        <View style = {HeaderContainerStyle}>
            <View style={headerDataBlockStyle}/>
            <View style={headerDataBlockStyle}>
                <Text style = {HeaderTextStyle}>{props.headerText}</Text>
            </View>
            <TouchableOpacity
                style={[headerDataBlockStyle,{alignItems: 'flex-end'}]}
                 onPress={() => firebase.auth().signOut()}
            >
                <Text>Sign out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    HeaderContainerStyle:{
        height: 60,
        //paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        //backgroundColor: '#f8f8f8',
        elevation: 2,
        position: 'relative',
    },
    HeaderTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'darkslategrey',
    },
    headerDataBlockStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    }
});

export default Header;