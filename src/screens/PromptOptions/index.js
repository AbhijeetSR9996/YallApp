import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width } from '../../services/helper';

const PromptOptions = ({ navigation }) => {

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
                    }}>Select a prompt</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '0%', bottom: '1%' }} />

            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '0%', marginBottom: '0%' }}>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('WriteAnswer') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>My greatest strength</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>This is my year for</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>A life goal of mine</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>New year same</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>Unusual skill</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>My simple pleasures</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>the way to win me over is</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>Unusual skill</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>My greatest strength</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>This is my year for</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>A life goal of mine</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#020203',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>New year same</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>
            </ScrollView>
        </View >
    );
};
export default PromptOptions;