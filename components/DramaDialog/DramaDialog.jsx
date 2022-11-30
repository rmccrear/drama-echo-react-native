import { Audio, Video } from 'expo-av';
import { useRef, useState } from 'react';
import { Box, Button, Image, Text, HStack, VStack, ScrollView, Pressable } from "native-base";
import DramaListItem from "../DramaListItem";
import DemoVideo from '../DemoVideo';
import DialogAudio from '../DialogAudio';
import DialogLine from '../DialogLine';
import { styles } from '../../styles';
import { dramas } from '../../__fixtures__';

const dramaRecord = dramas[0];
const drama = dramaRecord.dialog;

function DramaDialog(props) {

  const { lines } = drama;
  return (
    <ScrollView>
      <VStack>
        <Box flex={1} justifyContent="space-around">
          <DemoVideo demoMedia={drama.demoMedia} />
        </Box>
      </VStack>
      {lines.map(line =>
        <VStack key={line._id}>
          <Box style={styles.dialogLineContainer} flex={1} justifyContent="space-around">
            <DialogLine dialogLine={line} characters={drama.characters} currentCharacter={drama.characters[0]} />
          </Box>
        </VStack>
      )}
    </ScrollView>
  );
}
export default DramaDialog;