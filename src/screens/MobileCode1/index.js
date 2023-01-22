import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import VerifyingCode from '../../component/VerifyingCode/index';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MobileCode1
  = ({ navigation }) => {

    return (
      <View style={{ flex: 1 }}>
        <VerifyingCode path="SignedInMobile" />
        <View
          style={{
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            top: '143%',
            left: 25,
            width: '90%',
          }}>
          <TouchableOpacity>
            <Text style={{
              color: '#6E3E89',
              fontFamily: 'Inter',
              fontSize: 15,
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
            }}>Didn't get a code?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ display: 'flex', marginTop: '135%', marginRight: '10%', alignItems: 'flex-end' }}>
          <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('MainBottomNavigation')}>
            <View
              style={{
                justifyContent: 'flex-end',
                marginTop: '100%',
                borderRadius: 50,
                width: 40
              }}>
              <AntDesign name="rightcircleo" size={40} color="black" style={{ backgroundColor: '#DCC7E1', borderRadius: 50, }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
export default MobileCode1;

