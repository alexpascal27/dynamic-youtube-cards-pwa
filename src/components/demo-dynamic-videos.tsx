import { Video } from "@/types/videos";
import { Box, ChakraProvider, Flex, Grid, GridItem } from "@chakra-ui/react";
import { VideoCard } from "./video-card/video-card";
import { mockVideoSearchResponse } from "@/test/fixtures/mock-dynamic-video-card";
import { TagCategory } from "@/types/tag-category";
import { useState } from "react";
import Tag from "./tags";

export default function DemoDynamicVideos() {
  const [selectedTag, setSelectedTag] = useState(TagCategory.All);

  const handleTagClick = (tag: TagCategory) => {
      setSelectedTag(tag);
  };
  
  var videos = mockVideoSearchResponse(selectedTag);
   
    return (
      <ChakraProvider>
        <Box flex="1">
            <Flex mt="4" mb="8" wrap="wrap" gap="3">
                {Object.values(TagCategory).map((tag) => (
                    <Tag
                        key={tag}
                        name={tag}
                        onClick={() => handleTagClick(tag)}
                        selectedTag={selectedTag}
                    />
                ))}
            </Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={3} rowGap={12}>
              {videos.map((video: Video) => (
                  <GridItem key={video.id}><VideoCard video={video} /></GridItem>
              ))}
            </Grid>
        </Box>
      </ChakraProvider>
    );
}