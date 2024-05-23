import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const TextInput = () => {
        const [name, setName] = useState("")
        const [age, setAge] = useState('25')


        return (
                <View style={styles.container}>
                        <Text>Enter your name : </Text>
                        <TextInput
                                multiline
                                style={styles.input}
                                placeholder='enter your name'
                                onChangeText={(val) => setName(val)}

                        />

                        <Text>Enter your age : </Text>
                        <TextInput
                                style={styles.input}
                                placeholder='enter your age'
                                onChangeText={(val) => setAge(val)}
                                keyboardType='numeric'
                        />

                        <Text>{name} , {age}</Text>
                        <StatusBar style="auto" />
                </View>
        );
}

export default TextInput

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
        },

        input: {
                borderWidth: 1,
                borderColor: '#000',
                width: '80%',
                height: 40,
                marginBottom: 20,
        }
})