import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { CELL_COUNT } from '../../services/constant';

const VerifyingCode = ({ path, paths }) => {

    const navigation = useNavigation();
    const [value, setValue] = React.useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <View>
            <View style={{ width: 214, height: 70, top: 85, left: 21 }}>
                <Text style={{
                    color: '#000000',
                    fontFamily: 'BakbakOne-Regular',

                    fontSize: 25,
                    lineHeight: 35,
                }}>Enter your verification code.</Text>
            </View>
            <View style={{ flexDirection: 'row', top: 100, left: 22, width: 190 }}>
                <Text style={{ color: '#AAAAAA', fontFamily: 'Inter' }}>Sent to +91-1234567890

                    - </Text>
                <TouchableOpacity onPress={() => navigation.navigate(path)}>
                    <Text style={{ color: '#000000', fontWeight: '500', fontFamily: 'Inter' }}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={{ top: 120 }}>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={{
                        width: 280,
                        left: 22,
                    }}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    onPress={() => { navigation.navigate(paths) }}
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[{
                                width: 60,
                                height: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: '#000000',
                                borderBottomWidth: 1,
                            }
                                ,
                            isFocused && {
                                borderBottomColor: '#000000',
                                borderBottomWidth: 1,
                            },
                            ]}>
                            <Text style={{
                                color: '#000',
                                fontSize: 36,
                                textAlign: 'center',
                            }}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};
export default VerifyingCode;