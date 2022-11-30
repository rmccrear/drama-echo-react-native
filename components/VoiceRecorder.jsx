import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from './Button';
import { Audio } from 'expo-av';

function VoiceRecorder() {
  const [recording, setRecording] = React.useState();
  const [recordingUri, setRecordingUri] = React.useState();

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    setRecordingUri(uri);
  }

  async function playRecording() {
    const sound = new Audio.Sound();

    await sound.loadAsync({
      uri: recordingUri
    });
    await sound.playAsync();
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : recordingUri ? "Record Again" : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      {
        recordingUri ?
          <Button
            title="Play Back"
            onPress={playRecording}
          /> : ''
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default VoiceRecorder;