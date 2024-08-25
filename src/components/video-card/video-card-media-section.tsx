import {Box, Center} from "@chakra-ui/react";


interface VideoCardMediaSectionProps {
    thumbnailURL: string,
    duration: string,
}

export const VideoCardMediaSection = ({thumbnailURL, duration}: VideoCardMediaSectionProps) => {
    return (
        <Box // Change into the new component
            bgImg={thumbnailURL}
            bgPosition="center"
            borderRadius='lg'
            height={205}
            width={370}
        >
            <Box height={174} />
            <Box height={5} width={45} borderRadius='lg' bgColor='rgb(0, 0, 0, 0.7)' marginLeft='auto' marginEnd={2}
           >

                <Center fontSize={15} textAlign='center'  color='white'>{duration}</Center>
            </Box>
        </Box>
    )
}