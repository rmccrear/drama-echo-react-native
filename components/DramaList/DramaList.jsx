import { Box, Image, Text, HStack, VStack } from "native-base";
import DramaListItem from "../DramaListItem";
import { dramas } from "../../__fixtures__";

const mockDrama = dramas[0].dialog;

function DramaList(props) {
  const drama = mockDrama;
  return (
    <VStack>
      <Text>Hello</Text>
      <DramaListItem drama={drama} navigation={props.navigation} />
    </VStack>);
}

export default DramaList;