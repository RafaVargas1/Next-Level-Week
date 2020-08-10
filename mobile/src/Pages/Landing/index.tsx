import React, {useState , useEffect } from 'react';
import { View , Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'; 

import landingImg from '../../Assets/Images/landing.png';
import studyIcon from '../../Assets/Images/Icons/study.png';
import giveClassses from '../../Assets/Images/Icons/give-classes.png';
import heartIcon from '../../Assets/Images/Icons/heart.png';

import api from '../../Services/api';

import styles from './styles';

function Landing (){

    const { navigate } = useNavigation();
    
    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses');
    }

    function handleNavigateToStudyTabs(){
        navigate('Study');
    }

    const [ totalConnections , setTotalConnections ] = useState(0);

    useEffect( () => {
        api.get('/connections').then( response => {
            const { total } = response.data;
            setTotalConnections( total )
        })
    }, [])

    return (
     
        <View style={styles.container} > 
            <Image source={landingImg} style={styles.banner} /> 
            
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}> O que deseja fazer ? </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    onPress={handleNavigateToStudyTabs} 
                    style={[styles.button, 
                    styles.buttonPrimary]}
                >
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText} > Estudar </Text>
                </RectButton>

                <RectButton 
                    onPress={handleNavigateToGiveClassesPage} 
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClassses}/>
                    <Text style={styles.buttonText} > Dar Aulas </Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                    Total de {totalConnections} conexões já realizadas {'  '}
                <Image source={heartIcon} />
            </Text>



        </View>
    );
}

export default Landing;