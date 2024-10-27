import { Video } from "@/types/videos";
import { Grid, GridItem } from "@chakra-ui/react";
import { VideoCard } from "./video-card/video-card";
import { gql, TypedDocumentNode, useQuery } from "@apollo/client";

export const getVideos: TypedDocumentNode<
{
    videoSearch: Array<{
      id: string,
      duration: string,
      name: string,
      iconURL: string,
      thumbnailURL: string,
      creatorName: string,
      isCreatorVerified: boolean,
      viewCount: number,
      timeSincePublished: string
    }>;
  },
  {
    tag: string;
  }
> = gql`
  query GetVideos($tag: String) {
    videoSearch(tag: $tag) {
                id,
                duration
                name,
                iconURL,
                thumbnailURL,
                creatorName,
                isCreatorVerified,
                viewCount,
                timeSincePublished
            }
  }
`;

interface VideosProps {
    tag: string
}

export default function Videos({tag}: VideosProps) {
  const { data } = useQuery(
    getVideos,
    {variables: {tag: tag}}
  );

    const videos: Video[] = data?.videoSearch ?? [];
   
    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={3} rowGap={12}>
            {videos.map((video: Video) => (
                <GridItem key={video.id}><VideoCard video={video} /></GridItem>
            ))}
        </Grid>
    );
}