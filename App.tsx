/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import { StatusBar, Text, useColorScheme} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import TabNavigation from './TabNavigation/TabNavigation.js'
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TabNavigation/>
    </SafeAreaProvider>
  );
}


export default App;
