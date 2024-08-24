import {
    Box,
    Heading,
    Stack,
    Text,
    Divider,
    ButtonGroup,
    Button,
    Image
} from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import {IconButton} from "@chakra-ui/button";

export const VideoCard = ({ video }) => {
  return (
      <Box maxW='sm'>
              <Image // Change into the new component
                  src={video.thumbnailURL}
                  alt='Thumbnail picture'
                  borderRadius='lg'
              />
              <Stack pt='2' direction='row' spacing='3'>
                  <Image
                      borderRadius='full'
                      boxSize='50px'
                      src={video.iconURL}
                      alt='Profile picture'
                  />
                  <Stack spacing='1' flex='1'>
                      <Heading size='md' noOfLines={2}>{video.name}</Heading>
                      <Text>{video.creatorName}</Text>
                      <Text>{video.viewCount} views • {video.timeSincePublished}</Text>
                  </Stack>
                  <IconButton
                      bg='transparent'
                      aria-label='More settings'
                      icon={<BsThreeDotsVertical/>}
                      isRound={true}
                      width='0.5em'
                  />
              </Stack>
      </Box>
  )
}