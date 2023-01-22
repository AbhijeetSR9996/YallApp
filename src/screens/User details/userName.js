import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import { userStyles } from './userStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const UserName = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={userStyles.container}>
      <Text style={userStyles.text}>My Full Name is</Text>
      <View style={{ flexDirection: 'row', top: 70, left: 22, width: 269 }}>
        <Text style={{ color: '#AAAAAA', fontFamily: 'Inter' }}>
          Don’t lose access to your accont, verify your email.
        </Text>
      </View>
      <View style={userStyles.textInput}>
        <TextInput
          placeholder="Enter Name"
          placeholderTextColor="#AAAAAA"
          style={userStyles.textInput1}></TextInput>
      </View>

      <View style={{ flexDirection: 'row', top: 150, left: 21 }}>
        <Text style={{ color: '#AAAAAA', top: 5, fontFamily: 'Inter' }}>Only show my initials</Text>
        <Switch
          style={{ left: 10 }}
          trackColor={{ false: '#767577', true: 'green' }}
          thumbColor={isEnabled ? 'green' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style={{ display: 'flex', marginTop: '114%', marginRight: '10%', alignItems: 'flex-end' }}>
        <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('UserDOB')}>
          <View
            style={{
              justifyContent: 'flex-end',
              marginTop: '350%',
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
export default UserName;
