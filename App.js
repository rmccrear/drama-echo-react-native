// In App.js in a new project
import { Audio } from 'expo-av';
import { NativeBaseProvider, Box, extendTheme } from "native-base";
import { VStack } from 'native-base';
import * as React from 'react';
import { useEffect } from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DramaList from "./components/DramaList/DramaList";
import DramaDialog from "./components/DramaDialog/DramaDialog";

import { styles } from "./styles";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container} >
      <DramaList navigation={navigation} />
    </View>
  );
}
/*
      <VStack>
        <Text>Home Screen!</Text>
      </VStack>
      <VStack>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      </VStack>
*/

function DetailsScreen({ navigation }) {
  useEffect(() => {
    const effect = async () => {
      try {
        console.log('Requesting permissions..');
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
      } catch (e) {
        console.log("unable to get permission to access audio", e)
      }
    }
    effect();

  });
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <DramaDialog />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;