import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Fab from '../components/Fab';

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

  return (
    <View style={ styles.container }>
        <Text style={ styles.titleScreen }>Contador: {counter}</Text>
        <Fab 
            title='-1'
            position='bl'
            onPress={ () => setCounter(counter - 1) }
        />  
        <Fab 
            title='+1'
            onPress={ () => setCounter(counter + 1) }
        />    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fafafa',
    },
    titleScreen: {
        fontSize: 40,
        textAlign: 'center',
        top: -15,
        color: 'black'
    },
});

export default CounterScreen