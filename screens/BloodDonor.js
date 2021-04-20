import * as React from 'react'
import {View } from 'react-native';
import { Button, Divider } from 'react-native-paper';

function BloodDonor(){

    return(
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Button icon="water" mode="contained" onPress={() => console.log('Pressed')}>
            Donor
        </Button>
        <Divider />
        <Divider />
        <Button icon="water" mode="contained" onPress={() => console.log('Pressed')}>
            Patient
        </Button>
    </View>
    )

}


export default BloodDonor;