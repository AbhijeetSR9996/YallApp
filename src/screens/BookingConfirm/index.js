import React from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import styles from './styles';
import { icons } from '../../../assets/icons/icons';

const BookingConfirm = ({ navigation }) => {

    return (
        <View style={styles.main_view}>
            <Image
                style={styles.image_bg}
                source={require('../../../assets/images/Gradient-Fill.png')}
                resizeMode="cover" />
            <View style={styles.first_view}>
                <TouchableOpacity>
                    <Image source={require('../../../assets/images/booking-confirm-icons.png')}
                        style={styles.image} />
                </TouchableOpacity>
            </View>
            <View style={styles.second_view}>
                <Text style={styles.main_text}>Congratulations </Text>
                <Text style={styles.desc_text}>
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard.
                </Text>
            </View>
            <View style={styles.second_view}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('PaymentMethods')}>
                    <View style={styles.buttonView}>
                        <Text style={[styles.buttonText, { right: '25%' }]}>Back Home</Text>
                        <View style={styles.buttonIcon}>{icons.rightarrow}</View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('EventTicket')}>
                    <View style={styles.buttonView}>
                        <Text style={styles.buttonText}>Get Ticket</Text>
                        <View style={styles.buttonIcon}>{icons.rightarrow}</View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.third_view}></View>
        </View>
    )
}

export default BookingConfirm;
