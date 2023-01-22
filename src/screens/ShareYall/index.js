import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { height, width } from '../../services/helper';
import { Card } from 'react-native-paper';

const ShareYall = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <View style={{ width: width, backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', marginTop: '2%', marginBottom: '5%' }}>
                <View style={{ flex: 1.5, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
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
                        right: '100%'
                    }}>Setting</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', marginTop: '-3%' }} />
            <ScrollView style={{ backgroundColor: 'transparent', height: '90%', flex: 1, width: width, marginTop: '2%', marginBottom: '0%' }}>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '5%', marginBottom: '-7%', alignSelf: 'center' }}>

                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '-5%', }}>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Account Settings
                        </Text>
                        <TouchableOpacity
                            style={{
                                width: '100%',
                                height: '35%',
                                fontSize: 15,
                                color: '#000000',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                flexDirection: 'row'
                            }}
                            onPress={() => { navigation.navigate('UpdatePhoneNumber') }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('UpdatePhoneNumber') }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#000000',
                                    right: '65%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}> Phone Number
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('UpdatePhoneNumber') }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#000000',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    left: '30%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>8171830852
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: 'Inter',
                            color: '#4B4B4B',
                            alignSelf: 'center',
                            left: '0%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Verify a phone number to help secure your account.
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Discovery Settings
                        </Text>
                        <TextInput
                            placeholder=' Location'
                            placeholderTextColor='#4B4B4B'
                            style={{
                                width: '100%',
                                height: '35%',
                                fontSize: 15,
                                color: '#000000',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'Inter',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                            }} />
                        <Text style={{
                            fontSize: 12,
                            fontFamily: 'Inter',
                            color: '#4B4B4B',
                            alignSelf: 'center',
                            left: '0%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Change your location to see Tinder member in other cities.
                        </Text>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#000000',
                                bottom: '380%',
                                left: '28%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>My current location
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >


            <View style={{
                flex: 1, alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF', width: width,
                height: height * 0.75,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            }}>
                <ScrollView >
                    <Card style={{
                        width: '90%',
                        alignSelf: 'center',
                        height: 61,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: '#6B6B6B',
                        backgroundColor: '#F7F7F7',
                        marginTop: '15%'
                    }}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/images/linkicon.png')}
                                style={{ left: '5%', top: '100%' }} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder='Share via "Nearby Share"'
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 15,
                                color: '#000000',
                                left: '13%',
                                bottom: '33%',
                                width: '85%',
                                height: '100%',
                            }} />
                    </Card>


                    <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: 'transparent', marginTop: '-3%', top: '8%' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ left: '30%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/whatsapp.png')} style={{ left: '5%', }} />
                                </TouchableOpacity>
                                <Text style={{ left: '4%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Whatsapp</Text>
                            </View>
                            <View style={{ left: '75%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/instagram.png')} style={{ left: '5%', }} />
                                </TouchableOpacity>
                                <Text style={{ left: '20%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                            </View>
                            <View style={{ left: '120%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/snapchat.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '4%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Snapchat</Text>
                            </View>
                            <View style={{ left: '165%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/facebook.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '-2%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> News Feed</Text>
                            </View>
                            <View style={{ left: '210%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/whatsapp.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '20%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                            </View>
                            <View style={{ left: '255%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/instagram.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '10%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                            </View>
                            <View style={{ left: '300%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/snapchat.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '20%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                            </View>
                            <View style={{ left: '345%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/facebook.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '20%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: 'transparent', marginTop: '-2%', top: '15%' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ left: '30%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/facebook.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '-5%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Your groups</Text>
                            </View>
                            <View style={{ left: '65%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/gmail.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '26%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chat</Text>
                            </View>
                            <View style={{ left: '110%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/gmail.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '20%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Gmail</Text>
                            </View>
                            <View style={{ left: '155%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/skype.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '20%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Skype</Text>
                            </View>
                            <View style={{ left: '210%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/whatsapp.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '3%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Whatsapp</Text>
                            </View>
                            <View style={{ left: '255%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/instagram.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '15%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                            </View>
                            <View style={{ left: '300%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/snapchat.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '15%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Snapchat</Text>
                            </View>
                            <View style={{ left: '345%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/facebook.png')} style={{ left: '5%' }} />
                                </TouchableOpacity>
                                <Text style={{ left: '15%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> News Feed</Text>
                            </View>
                        </ScrollView>
                    </View >
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparent', marginTop: '15%', top: '0%' }}>
                        <TouchableOpacity >
                            <Image source={require('../../../assets/images/ellipse1.png')} style={{ paddingRight: '3%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={require('../../../assets/images/ellipse2.png')} style={{ paddingRight: '3%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={require('../../../assets/images/ellipse2.png')} style={{ paddingRight: '3%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={require('../../../assets/images/ellipse2.png')} style={{ paddingRight: '3%' }} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View >
    );
};
export default ShareYall;