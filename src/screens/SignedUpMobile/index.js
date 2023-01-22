import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MobileNumber from '../../component/MobileNumber/index';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignedUpMobile = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>

      <MobileNumber />

      <View style={{ display: 'flex', marginTop: '130%', marginRight: '10%', alignItems: 'flex-end' }}>
        <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('MobileCode2')}>
          <View
            style={{
              justifyContent: 'flex-end',
              marginTop: '100%',
              borderRadius: 50,
              //width: width * .105
              width: 40
            }}>
            {/* {icons.rightcirclearrow} */}
            <AntDesign name="rightcircleo" size={40} color="black" style={{ backgroundColor: '#DCC7E1', borderRadius: 50, }} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignedUpMobile;
