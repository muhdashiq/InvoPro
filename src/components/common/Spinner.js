import React from  'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({size}) => {
    return (
        <View style = { styles.SpinnerStyle}>
            <ActivityIndicator />
        </View>
    )
};

const styles = {
    SpinnerStyle:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
};

export default Spinner;