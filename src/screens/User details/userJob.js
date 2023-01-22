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

const UserJob = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={userStyles.container}>
      <Text style={userStyles.text}>Whats your job title?</Text>
      <View style={userStyles.textInput}>
        <TextInput
          placeholder="Job title"
          placeholderTextColor="#AAAAAA"
          style={userStyles.textInput1}></TextInput>
      </View>

      <View style={{ flexDirection: 'row', top: 150, left: 21 }}>
        <Text style={{ top: 5, color: '#AAAAAA' }}>Visit on profile</Text>
        <Switch
          style={{ left: 10 }}
          trackColor={{ false: '#767577', true: '#008000' }}
          thumbColor={isEnabled ? '#008000' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
        <View style={{ display: 'flex', marginTop: '135%', marginRight: '10%', alignItems: 'flex-end' }}>
          <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('UserLocation')}>
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
    </View>
  );
};
export default UserJob;
