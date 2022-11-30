import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from './Button';
import { Audio } from 'expo-av';

function DialogAudio({ audioUrl }) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const sound = new Audio.Sound();

    await sound.loadAsync({
      uri: audioUrl
    });

    setSound(sound);

    console.log('Playing Sound');
    // sound.setIsLoopingAsync(true)
    await sound.playAsync();
    // sound.stopAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Button title="Play" onPress={playSound} />
    </View>
  );
}

export default DialogAudio;
