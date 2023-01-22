import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';
import { icons } from '../../../assets/icons/icons';
import { height, width } from '../../services/helper';

const Gender2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Gender1')}>
        <Text style={styles.moveBack}>{icons.back}</Text>
      </TouchableOpacity>

      <Text style={styles.gender1Text}>Pets</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 20 }}>
        <View
          style={{
            borderWidth: 1.5,
            top: -20,
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
            Soccer
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -20,
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
            Running
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -20,
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
            Cricket
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            top: -20,
            width: 'auto',
            height: 44,
            left: 60,
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
            Kabbadi
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 20 }}>
        <View
          style={{
            borderWidth: 1.5,
            top: -20,
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
            Football
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -20,
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
            BasketBall
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            top: -20,
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
            VolleyBall
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 10, top: 20 }}>
        <View
          style={{
            borderWidth: 1.5,
            top: -20,
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
            Table Tennis
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -20,
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
            Others (please state)
          </Text>
        </View>
      </View>

      <Text style={[styles.foodHead, { top: 10 }]}>Music</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 20 }}>
        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            apple
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            Burger
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            Cricket
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            top: -30,
            width: 'auto',
            height: 44,
            left: 60,
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
            Pizza
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 20 }}>
        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            kadhai paneer
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            icecream
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            watermelon
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 20 }}>
        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            apple
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            Burger
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            Cricket
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            top: -30,
            width: 'auto',
            height: 44,
            left: 60,
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
            Pizza
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 20 }}>
        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            kadhai paneer
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            icecream
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            watermelon
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 20 }}>
        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            gauva
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -30,
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
            Others (please state)
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          top: '8%',
          alignSelf: 'center',
          width: width * 0.8,
          height: height * 0.07,
          borderWidth: 1,
          right: '2%'
        }}
        onPress={() => { navigation.navigate('Gender3') }}>
        <View style={{
          left: 10,
          top: 8,
          width: width * 0.8,
          borderWidth: 1,
          borderRightWidth: 0,
          height: height * 0.07,
          //alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: '#DCC7E1',
          position: 'relative',
        }}>
          <Text style={{
            fontSize: 17,
            fontFamily: 'BakbakOne-Regular',
            color: '#000000',
            alignSelf: 'center',
            justifyContent: 'center',
            top: '30.3%',
            right: '25%',
            lineHeight: 25,
            letterSpacing: -0.017
          }}>Continue [2/4]</Text>
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
    </View>
  );
};
export default Gender2;
