import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar } from 'react-native';
import MyStack from './src/navigation/Routes';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1, marginTop: StatusBar.currentHeight,
    }}>
      <MyStack />
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}

