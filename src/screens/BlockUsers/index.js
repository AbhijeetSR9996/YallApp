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


const BlockUsers = ({ navigation }) => {

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
                            marginLeft: '20%',
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 18,
                        lineHeight: 25,
                        letterSpacing: -0.017,
                        right: '105%'
                    }}>Block Users</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '-3%', top: '0%' }} />
            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '5%', marginBottom: '0%', bottom: '0%' }}>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                letterSpacing: -0.017,
                                fontSize: 10,
                                lineHeight: 12,
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                letterSpacing: -0.017,
                                fontSize: 10,
                                lineHeight: 12,
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                letterSpacing: -0.017,
                                fontSize: 10,
                                lineHeight: 12,
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                letterSpacing: -0.017,
                                fontSize: 10,
                                lineHeight: 12,
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                letterSpacing: -0.017,
                                fontSize: 10,
                                lineHeight: 12,
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                letterSpacing: -0.017,
                                fontSize: 10,
                                lineHeight: 12,
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                letterSpacing: -0.017,
                                fontSize: 10,
                                lineHeight: 12,
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 49, marginTop: '0%', alignSelf: 'center', borderRadius: 5, marginBottom: '-5%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'BakbakOne-Regular',
                            fontSize: 18,
                            color: '#000000',
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            right: '3%',
                        }}>Phone Pe</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    );
};
export default BlockUsers;