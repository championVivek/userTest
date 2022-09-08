import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

type Props = {
    placeholder: string;
    onChangeText: (text: string) => void
}

const TextField: React.FC<Props> = ({ placeholder, onChangeText }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textarea} onChangeText={onChangeText} placeholder={placeholder} />
        </View>
    )
}

export default TextField

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        elevation: 5
    },
    textarea: {
        padding: 10,
        height: 50
    }
})