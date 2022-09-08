import { Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../navigation/Routes';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from "./styles"

type Props = NativeStackNavigationProp<RootStackParams>;


const HomeScreen = () => {
  const navigation = useNavigation<Props>()

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('addUser')}>
          <Text style={styles.btnText}>Create user</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer} >
        <TouchableOpacity onPress={() => navigation.navigate('users')}>
          <Text style={styles.btnText}>Get users</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

