import { Box, Text, View } from "native-base";
import DialogAudio from "./DialogAudio";
import VoiceRecorder from "./VoiceRecorder";

import { styles } from '../styles';

function DialogLine({ dialogLine, characters, currentCharacter }) {
  const { characterIdx, content, audioUrl, _id } = dialogLine;
  const meOrYou = currentCharacter === characters[characterIdx] ? "me" : "you";
  return (<View style={meOrYou==="me" ? styles.characterMe : styles.characterYou}>
    <Box>
      <Text style={ styles.titleText }>
        { characters[characterIdx] }
      </Text>
      <Text style={ styles.dialogText }>
        { content }
      </Text>
      <DialogAudio audioUrl={audioUrl} />
      {
        meOrYou === "me" ? 
          <VoiceRecorder/>
        : ""
        }
    </Box>
  </View> );
}

export default DialogLine;