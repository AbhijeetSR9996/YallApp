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
import { height, width } from '../../services/helper';
import AntDesign from 'react-native-vector-icons/AntDesign';


const RemoveConfirmation = ({ navigation }) => {

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
            <View style={{ flex: 0.1, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={{
                            fontSize: 40,
                            color: '#000000',
                            fontWeight: "200",
                            marginLeft: '20%',
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 18,
                        lineHeight: 25,
                        letterSpacing: -0.017,
                        right: '70%'
                    }}>Remove Confirmation</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '0%' }} />

            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '10%', marginBottom: '0%' }}>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 170, marginTop: '0%', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, borderColor: '#857E7E' }}>
                    <View style={{ flex: 2, flexDirection: 'column', width: '95%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', alignSelf: 'center', borderRadius: 5, }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            color: '#393939',
                            lineHeight: 15,
                            marginLeft: '16%',
                            top: '5%'
                        }}> Kotak Mahindra Bank debit card***</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            color: '#857E7E',
                            lineHeight: 15,
                            marginLeft: '3%',
                            bottom: '3%'
                        }}>Remove:                                                                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem the industry's standard.Ipsum is simply dummy text of the printing and typesetting industry. Lorem the industry's standard.text of the printing and typesetting industry. Lorem the industry's standard.Ipsum is simply dummy text of the printing and typesetting industry. Lorem the industry's standard.</Text>

                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        alignSelf: 'center',
                        width: width * 0.8,
                        height: height * 0.07,
                        borderWidth: 1,
                        right: '2%',
                        marginTop: '10%',
                        marginBottom: '7%'
                    }}
                    onPress={() => navigation.navigate('ProfileDisplay')}>
                    <View style={{
                        left: 10,
                        top: 8,
                        width: width * 0.8,
                        borderWidth: 1,
                        borderRightWidth: 0,
                        height: height * 0.07,
                        alignSelf: 'center',
                        backgroundColor: '#DCC7E1',
                        position: 'relative',
                    }}>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            top: '30.3%',
                            right: '27%',
                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>Yes</Text>
                        <View style={{
                            width: width * 0.15,
                            borderWidth: 1,
                            height: '104%',
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#DCC7E1',
                            position: 'absolute',
                            marginVertical: -1,
                        }}>{icons.rightarrow}</View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        alignSelf: 'center',
                        width: width * 0.8,
                        height: height * 0.07,
                        borderWidth: 1,
                        right: '2%',
                        marginTop: '0%',
                        marginBottom: '5%'
                    }}
                    onPress={() => navigation.navigate('ProfileDisplay')}>
                    <View style={{
                        left: 10,
                        top: 8,
                        width: width * 0.8,
                        borderWidth: 1,
                        borderColor: '#FFFFFF',
                        borderRightWidth: 0,
                        height: height * 0.07,
                        alignSelf: 'center',
                        backgroundColor: '#000000',
                    }}>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'BakbakOne-Regular',
                            color: '#FFFFFF',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            top: '30.3%',
                            right: '27.5%',
                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>No</Text>
                        <View style={{
                            width: width * 0.15,
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            height: '104%',
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#000000',
                            position: 'absolute',
                            marginVertical: -1,
                        }}><AntDesign name="arrowright" size={30} color="#FFFFFF" /></View>
                    </View>
                </TouchableOpacity>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: 59, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            width: 264,
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem the industry's standard.</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    );
};
export default RemoveConfirmation;