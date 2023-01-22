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


const ManagePaymentMethods = ({ navigation }) => {

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
                    }}>Manage my payment methods</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '0%' }} />

            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '10%', marginBottom: '0%' }}>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', height: 169, marginTop: '0%', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, borderColor: '#857E7E' }}>
                    <View style={{ flex: 1.2, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-evenly', height: 149, alignSelf: 'center' }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 18,
                            color: '#000000',
                            lineHeight: 22,
                            marginLeft: '4.5%',
                            marginBottom: '-3%'
                        }}>SBI Credit</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            marginLeft: '4.5%',
                            marginBottom: '-3%'
                        }}>Sahil</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            marginLeft: '4.5%',
                            marginBottom: '-3%'
                        }}>Expire 12/2022</Text>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 149, alignSelf: 'center' }}>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#C4C4C4',
                            backgroundColor: '#FFFFFF',
                            width: width * 0.4,
                            height: '60%',
                            marginBottom: '3%'
                        }}
                            onPress={() => navigation.navigate('EditCard')}>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                color: '#4B4B4B',
                                lineHeight: 15
                            }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#C4C4C4',
                            backgroundColor: '#FFFFFF',
                            width: width * 0.4,
                            height: '60%',
                            marginBottom: '3%'
                        }}>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                color: '#4B4B4B',
                                lineHeight: 15
                            }}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', height: 169, marginTop: '10%', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, borderColor: '#857E7E' }}>
                    <View style={{ flex: 1.2, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-evenly', height: 149, alignSelf: 'center' }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 18,
                            color: '#000000',
                            lineHeight: 22,
                            marginLeft: '4.5%',
                            marginBottom: '-3%'
                        }}>Kodak Mahindra Bank debit card***</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            marginLeft: '4.5%',
                            marginBottom: '-3%'
                        }}>Sahil</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            marginLeft: '4.5%',
                            marginBottom: '-3%'
                        }}>Expire 12/2022</Text>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 149, alignSelf: 'center' }}>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#C4C4C4',
                            backgroundColor: '#FFFFFF',
                            width: width * 0.4,
                            height: '60%',
                            marginBottom: '3%'
                        }}
                            onPress={() => navigation.navigate('EditCard')}>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                color: '#4B4B4B',
                                lineHeight: 15
                            }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#C4C4C4',
                            backgroundColor: '#FFFFFF',
                            width: width * 0.4,
                            height: '60%',
                            marginBottom: '3%'
                        }}>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                color: '#4B4B4B',
                                lineHeight: 15
                            }}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', height: 169, marginTop: '10%', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, borderColor: '#857E7E' }}>
                    <View style={{ flex: 1.2, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-evenly', height: 149, alignSelf: 'center' }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 18,
                            color: '#000000',
                            lineHeight: 22,
                            marginLeft: '4.5%',
                            marginBottom: '-3%'
                        }}>SBI Credit</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            marginLeft: '4.5%',
                            marginBottom: '-3%'
                        }}>Sahil</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            marginLeft: '4.5%',
                            marginBottom: '-3%'
                        }}>Expire 12/2022</Text>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 149, alignSelf: 'center' }}>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#C4C4C4',
                            backgroundColor: '#FFFFFF',
                            width: width * 0.4,
                            height: '60%',
                            marginBottom: '3%'
                        }}
                            onPress={() => navigation.navigate('EditCard')}>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                color: '#4B4B4B',
                                lineHeight: 15
                            }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#C4C4C4',
                            backgroundColor: '#FFFFFF',
                            width: width * 0.4,
                            height: '60%',
                            marginBottom: '3%'
                        }}>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                color: '#4B4B4B',
                                lineHeight: 15
                            }}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 49, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 18,
                            color: '#000000',
                            lineHeight: 22,
                        }}>Add a payment method</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    );
};
export default ManagePaymentMethods;