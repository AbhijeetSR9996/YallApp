import React from 'react';
import { View, TouchableOpacity, } from 'react-native';
import MobileNumber from '../../component/MobileNumber/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { handleNumber } from '../../component/MobileNumber/index';


const SignedInMobile = ({ navigation }) => {
    
    return (
        <View style={{ flex: 1 }}>

            <MobileNumber />

            <View style={{ display: 'flex', marginTop: '130%', marginRight: '10%', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ width: 20 }} onPress={() => [navigation.navigate('MobileCode1'), handleNumber]}>
                    <View
                        style={{
                            justifyContent: 'flex-end',
                            marginTop: '100%',
                            borderRadius: 50,
                            width: 40
                        }}>
                        <AntDesign name="rightcircleo" size={40} color="black" style={{ backgroundColor: '#DCC7E1', borderRadius: 50 }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default SignedInMobile;
