import React, { Component } from "react";
import { StyleSheet, View, Text, Image, } from 'react-native';
import GetStarted from '../GetStarted/index';


class Splash extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }

    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    }

    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 5000);
    }

    render() {
        let Splash_Screen = (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    {/* <Text style={{ fontSize: 30, marginBottom: '10%', fontWeight: 'bold', color: '#fff', }}>YALL</Text> */}
                    <Image source={require('../../../assets/images/logo.png')}
                    />
                </View>
            </View>
        )
        return (
            <View style={styles.MainContainer}>
                <GetStarted />
                {
                    (this.state.isVisible === true) ? Splash_Screen : null
                }
           </View>
        );
    }
}

export default Splash;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
    SplashScreen_RootView: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    SplashScreen_ChildView: {
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#00bcd4',
        backgroundColor: '#fff',
        flex: 1,
        marginVertical: '-10%',
    },
});
