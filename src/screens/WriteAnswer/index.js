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
import { width } from '../../services/helper';

const WriteAnswer = ({ navigation }) => {

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
            <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', marginTop: '5%', marginBottom: '5%' }}>
                <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 18,
                        lineHeight: 25,
                        letterSpacing: -0.017,
                        left: '70%'
                    }}>Write Answer</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('EditAccount')}>
                        <Text style={{
                            color: '#000000',
                            fontFamily: 'Inter',
                            fontSize: 15,
                            lineHeight: 18,
                            letterSpacing: -0.017,
                            marginLeft: '69.5%'
                        }}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '-3%', top: '0%' }} />


            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '7%', marginBottom: '0%' }}>
                <View style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', height: 75, marginTop: '0%', alignSelf: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <View style={{ flex: 0.75, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-evenly', height: 75, alignSelf: 'center' }}>
                        <TextInput
                            placeholder='My greatest strength'
                            placeholderTextColor='#000000'
                            style={{
                                width: '90%',
                                height: '100%',
                                fontSize: 15,
                                color: '#000000',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                fontFamily: 'Inter',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderColor: '#6B6B6B',
                            }} />
                    </View>
                    <View style={{
                        flex: 0.25, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 75, alignSelf: 'center', borderColor: '#6B6B6B', borderLeftWidth: 1
                    }}>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 5,
                        }}>
                            <Image source={require('../../../assets/images/edit_icon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
};
export default WriteAnswer;