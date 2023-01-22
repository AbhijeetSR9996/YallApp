import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    BackHandler,
} from 'react-native';
import { icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { height, width } from '../../services/helper';


const Help = ({ navigation }) => {

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
                        right: '100%'
                    }}>Help Centre</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', marginTop: '-3%' }} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'transparent', height: '90%', flex: 1, width: width, marginTop: '15%', marginBottom: '0%' }}>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: "center",
                    backgroundColor: 'transparent',
                    marginTop: '0%'
                }}>
                    {/* <TouchableOpacity> */}
                    <Image source={require('../../../assets/images/helpimage.png')}
                        style={{
                            width: 311,
                            height: 288,
                        }} />
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', marginTop: '0%', }}>
                    <View style={{
                        width: '83%',
                        alignSelf: 'center',
                        height: '80%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#000000',
                    }}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/images/searchicon.png')}
                                style={{ right: '0%', top: '127%' }} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder='Welcome. How can we help?'
                            placeholderTextColor='#919191'
                            style={{
                                flex: 1,
                                fontFamily: 'Inter',
                                fontSize: 18,
                                color: '#000000',
                                lineHeight: 22,
                                letterSpacing: -0.017,
                                left: '8%',
                                bottom: '15%',
                                height: '100%',
                                width: '92%',
                                marginBottom: '2%'
                            }} />
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
                        marginBottom: '2%'
                    }}
                    onPress={() => navigation.navigate('HelpGettingStarted')}>
                    <View style={{
                        left: 10,
                        top: 8,
                        width: width * 0.8,
                        borderWidth: 1,
                        borderRightWidth: 0,
                        height: height * 0.07,
                        //alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: '#DCC7E1',
                        position: 'relative',
                    }}>
                        <Text style={{
                            //fontWeight: '400',
                            //fontWeight: '900',
                            fontSize: 17,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            top: '30.3%',
                            right: '27%',
                            //right: '20%',
                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>Getting Started</Text>
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
                        marginTop: '5%',
                        marginBottom: '2%'
                    }}
                    onPress={() => navigation.navigate('HelpSafety')}>
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
                            right: '10%',
                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>Safety, Security and Privacy</Text>
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
                        marginTop: '5%',
                        marginBottom: '25%'
                    }}
                    onPress={() => navigation.navigate('HelpSupport')}>
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
                            right: '37%',
                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>Support</Text>
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
            </ScrollView >
        </View >
    );
};
export default Help;