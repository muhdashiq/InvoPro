import React from 'react'
import { View, Text } from 'react-native'

const ItemDetails = (props) => {
    console.log(props);
    var {item} = props;
    return(
        <View>
            <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>{item.title}</Text>
        </View>
    )
};

export default  ItemDetails;