import { Audio, Video } from 'expo-av';
import { useRef, useState } from 'react';
import { Box, Image, Text, HStack, VStack, View, Pressable } from "native-base";
import Button from './Button';

import { styles } from '../styles';

function DemoVideo({ demoMedia }) {
  const videoUrl = demoMedia.url;
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={styles.videoContainer}>
      <Box>
        <Video
          style={styles.video}
          usePoster={true}
          isMuted={false}
          ref={video}
          source={{
            uri: videoUrl
          }}
          useNativeControls
          resizeMode="contain"
          onPlaybackStatusUpdate={status => setStatus(() => status)}

        />
        <Button
          title={status.isPlaying ? 'Pause Video' : 'Play Video'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </Box>
    </View>
  );
}

export default DemoVideo;