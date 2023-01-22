import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { userStyles } from './userStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const UserDOB = ({ navigation }) => {
  return (
    <View style={userStyles.container}>
      <Text style={userStyles.text}>What is your Date of birth?</Text>
      <View style={userStyles.mainViewDob}>
        <Text style={userStyles.textDOB1}>Month</Text>
        <Text style={userStyles.textDOB2}>Day</Text>
        <Text style={userStyles.textDOB3}>Year</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          top: 160,
          justifyContent: 'space-around',
        }}>
        <TextInput
          style={userStyles.dateInput}
          placeholder="MM"
          placeholderTextColor="#B4B4B4"
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          style={userStyles.dateInput}
          placeholder="DD"
          placeholderTextColor="#B4B4B4"
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          style={userStyles.yearInput}
          placeholder="YYYY"
          placeholderTextColor="#B4B4B4"
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <View style={{ display: 'flex', marginTop: '135%', marginRight: '10%', alignItems: 'flex-end' }}>
        <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('UserEmail')}>
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
export default UserDOB;
