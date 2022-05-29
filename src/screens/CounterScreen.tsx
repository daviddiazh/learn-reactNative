import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

  return (
    <View style={ styles.container }>
        <Text style={ styles.titleScreen }>Contador: {counter}</Text>
        <TouchableOpacity
            onPress={ () => setCounter(counter + 1) }
            style={ styles.buttons }
        >
            <Text>+1</Text>
        </TouchableOpacity>
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
        fontSize: 25,
        textAlign: 'center',
        top: -15,
    },
    buttons: {
        backgroundColor: '#2196f3',
        borderRadius: 100,
    }
});

export default CounterScreen