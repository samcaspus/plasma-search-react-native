import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { connect } from "react-redux";
import { Input, Button } from '@ui-kitten/components';
import { useState } from 'react';
import AboutMe from './AboutMe';
import SearchDoner from './SearchDoner';
import Notifications from './Notifications';



function Screen(props) {

    const { index } = props;

    return (

        <View >
            {index === 0 && (

                <AboutMe></AboutMe>
            )}

            {index === 1 && (
                <SearchDoner></SearchDoner>

            )}

            {index === 2 && (
                <Notifications></Notifications>
            )}


        </View>

    )
}


export const mapToState = (state) => {
    return state
}

export default connect(mapToState)(Screen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    button: {
        margin: 2,
        width: "100%",
        marginTop: 10
    },
    controlContainer: {
        borderRadius: 4,
        margin: 2,
        padding: 6,
        justifyContent: 'center',
        backgroundColor: '#3366FF',
    },
});
