import React from 'react';
import { View, Text, Image, Linking, TouchableHighlight } from 'react-native';
import {SIZES, COLORS} from '../../constants';

const Header = () => {
    return (
        <View style={{height: 100, alignItems: 'center', justifyContent: 'space-around', marginBottom: 60}}>
            <TouchableHighlight onPress={() => Linking.openURL('https://ithub.bulgakov.app/')}>
            <Image source={require('../../public/img/logo.png')} style={{
                width: 195,
                height: 32,
                marginBottom: 20
            }}/>
            </TouchableHighlight>
            <Text style={{fontSize: SIZES.body3, color: COLORS.lightGrey1, width: 250, textAlign: 'center'}}>Умный помощник для развития бизнес-команд</Text>
        </View>
    );
};

export default Header;