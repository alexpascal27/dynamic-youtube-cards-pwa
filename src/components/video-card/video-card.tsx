import {
    Heading,
    Stack,
    Text,
    Image,
    IconButton,
    Box
} from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import {VideoCardMediaSection} from "@/components/video-card/video-card-media-section";

export const VideoCard = ({video}) => {
    return (
        <Box maxW='sm'>
            <VideoCardMediaSection thumbnailURL={video.thumbnailURL} duration={video.duration}/>
            <Stack pt='2' direction='row' spacing='3'>
              <Image
                  borderRadius='full'
                  boxSize='38px'
                  src={video.iconURL}
                  alt='Profile picture'
              />
              <Stack spacing='1' flex='1'>
                  <Heading color='white' size='md' noOfLines={2}>{video.name}</Heading>
                  <Text fontSize={15} color='grey'>{video.creatorName}</Text>
                  <Text fontSize={15} color='grey'>{video.viewCount} views • {video.timeSincePublished}</Text>
              </Stack>
              <IconButton
                  bg='transparent'
                  aria-label='More settings'
                  icon={<BsThreeDotsVertical size={20}/>}
                  isRound={true}
                  color='white'
                  width='0.5em'
              />
            </Stack>
        </Box>
  )
}