import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Gender = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Which gender you prefer? </Text>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Man
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: ,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Woman
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 50,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Non-binary
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Agender
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Androgyne
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 45,
            left: 50,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Bigender
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 10,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Cisgender
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Enby
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 50,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Transgender Man
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Transgender Woman
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Gender Fluid
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Gender Nonconforming
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Neutrois
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Non-Binary
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Pangender
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 50,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Polygender
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            //left: 35,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Omnigender
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            //left: 50,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Two Spirit
          </Text>
        </View>
      </View>
      <View
        style={{
          top: 165,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          height: '10%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 15, width: 270, color: '#000000', bottom: -35, fontFamily: 'Inter' }}>
          Learn more
        </Text>
        <Text
          style={{
            fontSize: 15,
            width: 270,
            right: '235%',
            bottom: -35,
            color: '#AAAAAA',
            fontFamily: 'Inter'
          }}>
          about we sue your gender
        </Text>
        <Text style={{
          fontSize: 15, width: 270,
          right: '673%', bottom: -50, color: '#AAAAAA', fontFamily: 'Inter'
        }}>
          to recommend people on Yall
        </Text>
      </View>

      <View style={{ display: 'flex', marginTop: '35%', marginRight: '10%', alignItems: 'flex-end' }}>
        <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('Gender1')}>
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
export default Gender;
