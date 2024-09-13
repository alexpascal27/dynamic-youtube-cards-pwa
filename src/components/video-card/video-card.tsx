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
import {Video} from "@/types/videos";

export const VideoCard = ({ video }: { video: Video }) => {
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
                  <Heading color='white' fontSize={16} noOfLines={2}>{video.name}</Heading>
                  <Box mt={1}>
                  <Text fontSize={15} color='grey' lineHeight={1.5}>{video.creatorName}</Text>
                  <Text fontSize={15} color='grey' lineHeight={1}>{video.viewCount} views • {video.timeSincePublished}</Text>
                  </Box>
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