import React from 'react';
import { View, Text, Image, } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const TicketSold = () => {

    return (

        <View style={styles.main_view}>
            <Image
                style={styles.image_bg}
                source={require('../../../assets/images/soldoutbg.png')}
                resizeMode="cover" />
            <Image
                style={styles.image_bg}
                source={require('../../../assets/images/soldoutbg2.png')}
                resizeMode="cover" />
            <Image
                style={[styles.image_bg, { transform: [{ rotate: '0deg' }], left: 245 }]}
                source={require('../../../assets/images/SoldOut.png')}
                resizeMode="cover" />
            <View style={styles.first_view}>
                <Image source={require('../../../assets/images/timer-glass2.png')} style={{ top: '5%' }}
                />
            </View>

            <View style={styles.second_view}>
                <View
                    style={
                        {
                            width: 107,
                            alignSelf: 'center',
                            height: 107,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            textAlignVertical: 'center',
                            elevation: 8
                        }
                    }>
                    <Text style={[styles.main_text, { color: '#000000', fontSize: 50, lineHeight: 70, letterSpacing: -0.017 }]}>00</Text>
                </View>
                <View
                    style={
                        {
                            width: '5%',
                            alignSelf: 'center',
                            height: '40%',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            backgroundColor: 'transparent',
                            textAlignVertical: 'center'
                        }
                    }>
                    <View><Icon name="circle" style={{ color: '#FFFFFF', fontSize: 10 }} /></View>
                    <View><Icon name="circle" style={{ color: '#FFFFFF', fontSize: 10 }} /></View>
                </View>
                <View
                    style={
                        {
                            width: 107,
                            alignSelf: 'center',
                            height: 107,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            textAlignVertical: 'center',
                            elevation: 8
                        }
                    }>
                    <Text style={[styles.main_text, { color: '#000000', fontSize: 50, lineHeight: 70, letterSpacing: -0.017 }]}>00</Text>
                </View>
                <View
                    style={
                        {
                            width: '5%',
                            alignSelf: 'center',
                            height: '40%',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            backgroundColor: 'transparent',
                            textAlignVertical: 'center'
                        }
                    }>
                    <View><Icon name="circle" style={{ color: '#FFFFFF', fontSize: 10 }} /></View>
                    <View><Icon name="circle" style={{ color: '#FFFFFF', fontSize: 10 }} /></View>
                </View>
                <View
                    style={
                        {
                            width: 107,
                            alignSelf: 'center',
                            height: 107,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            textAlignVertical: 'center',
                            elevation: 8
                        }
                    }>
                    <Text style={[styles.main_text, { color: '#000000', fontSize: 50, lineHeight: 70, letterSpacing: -0.017 }]}>00</Text>
                </View>
            </View>
            <View style={styles.third_view}>
                <Text style={[styles.main_text, { width: 146, textAlign: 'center' }]}>Sold Out </Text>
                <Text style={[styles.main_text, { width: 325, textAlign: 'center' }]}>Wait the next event in </Text>
                <Text style={[styles.main_text, { width: 295, textAlign: 'center' }]}>7 days </Text>
            </View>
        </View>
    )
}

export default TicketSold;
