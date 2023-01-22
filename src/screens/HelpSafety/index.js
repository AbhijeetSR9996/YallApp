import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    BackHandler,
} from 'react-native';
import { icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width } from '../../services/helper';

const HelpSafety = ({ navigation }) => {

    const handleBackButtonClick = () => {
        navigation.goBack();
        return true;
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => { BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick); };
    }, []);


    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
            <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', marginTop: '2%', marginBottom: '5%' }}>
                <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={{
                            fontSize: 40,
                            color: '#000000',
                            fontWeight: "200",
                            marginLeft: '20%'
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 18,
                        lineHeight: 25,
                        letterSpacing: -0.017,
                        right: '110%'
                    }}>Help Centre</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', marginTop: '-4%' }} />
            <ScrollView style={{ backgroundColor: 'transparent', height: '90%', flex: 1, width: width, marginTop: '8%', marginBottom: '0%' }}>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 49, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '-5%' }}>
                    <Text style={{
                        fontFamily: 'Inter',
                        fontSize: 12,
                        color: '#000000',
                        lineHeight: 15,
                        letterSpacing: -0.017,
                        left: '0.5%'
                    }}>Yall    /    Safety Security, and Privacy</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 65, marginTop: '5%', bottom: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '-5%' }}>

                    <Text style={{
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 25,
                        color: '#000000',
                        lineHeight: 35,
                        letterSpacing: -0.017,
                        width: 234
                    }}>Safety Security, and Privacy</Text>
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '10%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 18,
                            color: '#000000',
                            lineHeight: 22,
                            letterSpacing: -0.017
                        }}>Yall Basics</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>What we believe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ left: 317, marginTop: -23, textAlign: 'center', color: '#000000' }}>{icons.right}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>What is Yall?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ left: 317, marginTop: -23, textAlign: 'center', color: '#000000' }}>{icons.right}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>Is Yall free?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ left: 317, marginTop: -23, textAlign: 'center', color: '#000000' }}>{icons.right}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>What we believe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ left: 317, marginTop: -23, textAlign: 'center', color: '#000000' }}>{icons.right}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>What we believe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ left: 317, marginTop: -23, textAlign: 'center', color: '#000000' }}>{icons.right}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
            </ScrollView >
        </View >
    );
};
export default HelpSafety;