import React, { useState, } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const goingoutdata = [
    { label: 'Agender', value: 'Agender' },
    { label: 'Androgyne', value: 'Androgyne' },
    { label: 'Bigender', value: 'Bigender' },
    { label: 'Cisgender', value: 'Cisgender' },
    { label: 'Enby', value: 'Enby' },
    { label: 'Transgender', value: 'Transgender' },
    { label: 'Transgender Woman', value: 'Transgender Woman' },
    { label: 'Gender Fluid', value: 'Gender Fluid' },
    { label: 'Gender Nonconforming', value: 'Gender Nonconforming' },
    { label: 'Neutrois', value: 'Neutrois' },
    { label: 'Non-binary', value: 'Non-binary' },
    { label: 'Pangender', value: 'Pangender' },
    { label: 'Polygender', value: 'Polygender' },
    { label: 'Omnigender', value: 'Omnigender' },
    { label: 'Two Spirit', value: 'Two Spirit' },
    { label: 'Others', value: 'Others' },
];

const GoingOut = () => {

    const [value, setValue] = useState(null);

    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', bottom: '83%' }}>
            <View style={{
                width: '100%',
                height: '30%',
                fontSize: 15,
                color: '#000000',
                alignSelf: 'center',
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderColor: '#6B6B6B',
            }}>
                <Dropdown
                    style={{
                        width: '100%',
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        color: '#000000',
                        height: 40,
                        backgroundColor: 'transparent'
                    }}
                    placeholder="        Going out"
                    placeholderStyle={{
                        fontSize: 15,
                        textAlign: 'left',
                        height: 18,
                        fontFamily: 'BakbakOne-Regular',
                        lineHeight: 21,
                        letterSpacing: -0.017,
                        color: '#000000',
                        bottom: '1%'
                    }}
                    selectedTextStyle={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        textAlign: 'left',
                        lineHeight: 21,
                        letterSpacing: -0.017,
                        left: '100%'
                    }}
                    data={goingoutdata}
                    iconColor='transparent'
                    labelField="label"
                    valueField="value"
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                />
            </View>
            <Text style={{
                fontSize: 13,
                fontFamily: 'Inter',
                color: '#919191',
                alignSelf: 'center',
                justifyContent: 'center',
                marginRight: '-13%',
                marginBottom: '10%',
                lineHeight: 15,
                letterSpacing: -0.017,
                width: '90%',
            }}>{value}
            </Text>
        </View>
    );
};

export default GoingOut;

