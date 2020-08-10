import React from 'react';
import { View , ImageBackground, Image, Text }  from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBackgroundImage from '../../Assets/Images/give-classes-background.png'

import Landing from '../Landing';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function GiveClasses(){

    const { goBack } = useNavigation();


    function handleNavigateReturnToLanding(){
        goBack();
    }

    return(

        <View style={styles.container}>
            <ImageBackground 
                resizeMode='contain'
                source={giveClassesBackgroundImage} 
                style={styles.content}
            >
                <Text style={styles.title}> 
                    Quer ser um Proffy ? 
                </Text>
                <Text style={styles.description}> 
                    Para começar, você precisa se cadastar como professor na plataforma Web. 
                </Text>

            </ImageBackground>

            <RectButton onPress={handleNavigateReturnToLanding} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo Bem</Text>
            </RectButton>

        </View>

    );

}

export default GiveClasses;