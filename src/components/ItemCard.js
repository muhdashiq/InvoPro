import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ItemCard = (props) => {
    var {
        IconContainerStyle,
        CardContainerStyle,
        ColorLabelStyle,
        DataContainerStyle,
        ItemHeaderStyle,
        ItemCategoryStyle,
        ItemQuantityDetailsStyle,

    } = styles;
    let {item} = props;
    let {units} = item;
    let squareFeet = (item.units * item.size.height * item.size.width)/144;
    let labelColor = (squareFeet<1)?'lightgrey':((squareFeet<10)? 'red' : ((squareFeet<50)?'orange':(squareFeet<100?'yellow':(squareFeet<200)?'green':(squareFeet<=1000)?'blue':'gold')));
    squareFeet = squareFeet > 9999 ? '10K+' : squareFeet;
    console.log(item);
    return (
        <View style = { CardContainerStyle }>
            <View style = { IconContainerStyle}/>
            <View style = {DataContainerStyle}>
                <Text style = {[ItemHeaderStyle,{color: (units<1)?'lightgrey':'black'}]}>{`${item.name} (${item.size.height}x${item.size.width} )`}</Text>
                <Text style = {ItemCategoryStyle}>{`${item.category} | ${item.type} | ${item.color}`}</Text>
                <Text style = {ItemQuantityDetailsStyle}>{`${item.warehouse} warehouse`}</Text>
                <Text>{`${item.units} units (sq.ft.  ${squareFeet}) of stock available`}</Text>
            </View>
            <View style = { [ColorLabelStyle,{backgroundColor: labelColor}]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    CardContainerStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        borderColor: 'rgba(1,1,1,0.1)',
        borderWidth: 1,
        padding: 5,
        //borderRadius: 5,
        marginTop: 5,
        elevation:2,
        position: 'relative',
    },
    IconContainerStyle: {
        flex:16,
        height: 70,
        width: 70,
        borderRadius: 5,
        backgroundColor: 'lightslategrey',
    },
    DataContainerStyle: {
        flex:64,
       // backgroundColor: 'green',
        paddingLeft: 10,
    },
    ColorLabelStyle: {
        flex:1,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    ItemHeaderStyle: {
        fontSize: 20,
        color: 'black'
    },
    ItemCategoryStyle: {},
    ItemQuantityDetailsStyle: {},
});

export default ItemCard;