import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

const Canvas = (props) => {
    return(
        <View style={styles.CanvasStyle}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    CanvasStyle: {
        padding: 15,
    }
});

export default Canvas;