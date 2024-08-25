import {InferGetServerSidePropsType} from "next";
import {Video} from "@/types/videos";
import createApolloClient from "../../../apollo-client";
import {gql} from "@apollo/client";
import {ChakraProvider, Grid, GridItem} from "@chakra-ui/react";
import {VideoCard} from "@/components/video-card/video-card";

export async function getServerSideProps() {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query GetVideos {
                videoSearch {
                    id,
                    name,
                    iconURL,
                    thumbnailURL,
                    creatorName,
                    isCreatorVerified,
                    viewCount,
                    timeSincePublished
                }
            }
        `,
    });
    const videos: Video[] = data.videoSearch;
    return {
        props: {
            videos
        },
    };
}

export default function VideosPage({ videos }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <main>
            <ChakraProvider>
                <div>
                    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                        {videos.map((video: Video) => (
                             <GridItem key={video.id}><VideoCard video={video}/> </GridItem>
                        ))}
                    </Grid>
                </div>
            </ChakraProvider>
        </main>
    )
}