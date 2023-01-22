import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import { icons } from '../../../assets/icons/icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { height, width } from '../../services/helper';

const SignUpEmail = ({ navigation }) => {

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', flexDirection: 'column', alignItems: 'stretch' }}>
      <View style={{ backgroundColor: 'transparent', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '15%', marginBottom: '3%' }}>
        <Text style={{
          fontFamily: 'BakbakOne-Regular', fontSize: 25, fontWeight: '400', lineHeight: 35, width: 297, color: '#000000', marginLeft: '-5%'
        }}>When sent a 4 digit code to your mail@12354</Text>
      </View>
      <ScrollView>

        <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start', marginTop: '5%', marginBottom: '10%' }}>
          <TextInput
            placeholder="Enter code"
            placeholderTextColor="#AAAAAA"
            style={{
              marginTop: '0%',
              fontFamily: 'Inter',
              borderBottomWidth: 1.5,
              width: 314,
              color: '#000000',
              fontSize: 18,
              letterSpacing: -0.017
            }}></TextInput>
        </View>

        <View style={{
          backgroundColor: 'transparent',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '70%',
          marginBottom: '15%'
        }}>

          <TouchableOpacity
            style={[
              {
                width: width * 0.8,
                borderWidth: 1,
                top: '-4%',
                right: '2%'
              },
            ]}
            onPress={() => { navigation.navigate('MainBottomNavigation') }}>

            <View style={{
              left: 10,
              top: 8,
              width: width * 0.8,
              borderWidth: 1,
              borderRightWidth: 0,
              height: height * 0.07,
              alignSelf: 'center',
              backgroundColor: '#DCC7E1',

            }}>
              <Text style={{
                fontSize: 18,
                fontFamily: 'BakbakOne-Regular',
                color: '#000000',
                alignSelf: 'center',
                justifyContent: 'center',
                top: '30.3%',
                right: '30%',
                lineHeight: 25,
                letterSpacing: -0.017
              }}>Continue</Text>
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
            style={[
              {
                width: width * 0.8,
                borderWidth: 1,
                bottom: '-6%',
                right: '2%'
              },
            ]}>
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
                fontSize: 18,
                fontFamily: 'BakbakOne-Regular',
                color: "#FFFFFF",
                alignSelf: 'center',
                justifyContent: 'center',
                top: '30.3%',
                right: '25%',
                lineHeight: 25,
                letterSpacing: -0.017
              }}>Go to Email</Text>
              <View style={{
                width: width * 0.15,
                borderWidth: 1,
                borderColor: "#FFFFFF",
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

          <TouchableOpacity
            style={[
              {
                width: width * 0.8,
                borderWidth: 1,
                bottom: '-16%',
                right: '2%',
              },
            ]}>
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
                fontSize: 18,
                fontFamily: 'BakbakOne-Regular',
                color: '#FFFFFF',
                alignSelf: 'center',
                justifyContent: 'center',
                top: '30.3%',
                right: '22%',
                lineHeight: 25,
                letterSpacing: -0.017
              }}>Resend Code</Text>
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

        </View>
        <View style={{
          flex: 0.2,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignUpEmail;

