import { Box, Pressable, Image, Text, HStack, VStack } from "native-base";
import { styles } from "../styles";
import Button from "./Button";

function DramaListItem({ drama, navigation }) {
  return (
    <Box
      bg="primary.600" py="4" px="3" borderRadius="5" rounded="md" width={375} maxWidth="100%">
      <HStack justifyContent="space-between">
        <Box>
          <VStack justifyContent="space-between">
            <Box justifyContent="space-between">
              <Text style={styles.titleText} fontSize="xl">
                {drama.title}
              </Text>
              <Button
                title="Start"
                onPress={() => navigation.navigate('Details')}
              />
            </Box>
          </VStack>
          <VStack justifyContent={"space-between"}>
          </VStack>
        </Box>
      </HStack>
    </Box>

  );

}

export default DramaListItem;
