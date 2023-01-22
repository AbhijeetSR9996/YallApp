import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from "../../component/SearchBar";

const Discover = ({ navigation }) => {
    const onPressSearch = () => {
        return;
    };

    return (
        <SafeAreaView style={styles.main_container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={styles.letf_arrow} />
                    </TouchableOpacity>
                </View>
                <View>
                    <SearchBar
                        title="Type location"
                        onPressSearch={onPressSearch}
                    />
                </View>
                <View style={styles.discover_second_container}>
                    <TouchableOpacity onPress={() => navigation.navigate('JoinParty')}
                        style={{ marginVertical: '2%', left: '0.5%' }}>
                        <ImageBackground
                            source={require('../../../assets/images/weekend.png')}
                            style={styles.image_size}
                            resizeMode="stretch"
                        >
                            <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                            <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                            <Text style={styles.discover_sub_title_text}>Discover</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('JoinParty')}
                        style={{ marginVertical: '2%', left: '0.5%' }}>
                        <ImageBackground
                            source={require('../../../assets/images/weekend.png')}
                            style={styles.image_size}
                            resizeMode="stretch"
                        >
                            <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                            <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                            <Text style={styles.discover_sub_title_text}>Discover</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('JoinParty')}
                        style={{ marginVertical: '2%', left: '0.5%' }}>
                        <ImageBackground
                            source={require('../../../assets/images/weekend.png')}
                            style={styles.image_size}
                            resizeMode="stretch"
                        >
                            <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                            <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                            <Text style={styles.discover_sub_title_text}>Discover</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('JoinParty')}
                        style={{ marginVertical: '2%', left: '0.5%' }}>
                        <ImageBackground
                            source={require('../../../assets/images/weekend.png')}
                            style={styles.image_size}
                            resizeMode="stretch"
                        >
                            <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                            <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                            <Text style={styles.discover_sub_title_text}>Discover</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('JoinParty')}
                        style={{ marginVertical: '2%', left: '0.5%' }}>
                        <ImageBackground
                            source={require('../../../assets/images/weekend.png')}
                            style={styles.image_size}
                            resizeMode="stretch"
                        >
                            <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                            <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                            <Text style={styles.discover_sub_title_text}>Discover</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('JoinParty')}
                        style={{ marginVertical: '2%', left: '0.5%' }}>
                        <ImageBackground
                            source={require('../../../assets/images/weekend.png')}
                            style={styles.image_size}
                            resizeMode="stretch"
                        >
                            <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                            <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                            <Text style={styles.discover_sub_title_text}>Discover</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('JoinParty')}
                        style={{ marginVertical: '2%', left: '0.5%' }}>
                        <ImageBackground
                            source={require('../../../assets/images/weekend.png')}
                            style={styles.image_size}
                            resizeMode="stretch"
                        >
                            <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                            <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                            <Text style={styles.discover_sub_title_text}>Discover</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('JoinParty')}
                        style={{ marginVertical: '2%', left: '0.5%' }}>
                        <ImageBackground
                            source={require('../../../assets/images/weekend.png')}
                            style={styles.image_size}
                            resizeMode="stretch"
                        >
                            <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                            <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                            <Text style={styles.discover_sub_title_text}>Discover</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Discover;