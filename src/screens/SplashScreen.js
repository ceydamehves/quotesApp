import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    return (
            <View style={{flex:1, backgroundColor:'rgba(124, 118, 201, 0.5)'}}>
                <LottieView source={require('../assets/splash.json')} 
                autoPlay 
                loop = {false}
                speed = {0.8}
                onAnimationFinish = {() => 
                    navigation.navigate('Home')
                }
                />
            </View>
        
);
}

export default SplashScreen;