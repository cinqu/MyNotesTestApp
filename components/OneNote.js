import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const OneNote = function ({ note } ){

    const { title, description, cTime, cDate } = note;

    return (
        <View style={ style.item, { /*backgroundColor: isDarkMode ? Colors.black : Colors.blue */ }}>
            <View style={ style.itemLeft }>
                <Text style={style.itemText} >{ title }</Text>
                <Text style={style.itemText} >{ description }</Text>
                <View style={style.topdown}>
                    <Text style={style.topdownitem}>at: { cTime }</Text>
                    <Text style={style.topdownitem}>on: { cDate }</Text>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    topdown: {
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    topdownitem: {
        fontSize: 18,
        marginLeft: 20,
    },
    item: {
        backgroundColor: '#FF0',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemText: {
        fontSize: 24,
        marginLeft: 10,
    }
});

export default OneNote;