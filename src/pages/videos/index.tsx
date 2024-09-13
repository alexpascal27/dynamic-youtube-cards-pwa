import {InferGetServerSidePropsType} from "next";
import createApolloClient from "../../../apollo-client";
import {gql} from "@apollo/client";
import {Box, Button, ChakraProvider, Flex, Grid, GridItem} from "@chakra-ui/react";
import {VideoCard} from "@/components/video-card/video-card";
import {Video} from "@/types/videos";
import Header from "@/components/header";
import Sidebar from "@/components/side-bar";

export async function getServerSideProps() {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query GetVideos {
                videoSearch {
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
        <main style={{backgroundColor: 'black'}}>
            <ChakraProvider>
                <Header />
                <Flex>
                    <Sidebar />
                    <Box flex="1">
                        <Flex mt="4" mb="8" wrap="wrap" gap="3">
                            {['All', 'Gaming', 'Learning', 'For Women'].map((tag) => (
                                <Button key={tag} bg="gray.900" size="sm" color="white" px="2" _hover={{ bg: 'gray.700' }}>
                                    {tag}
                                </Button>
                            ))}
                        </Flex>
                        <Grid templateColumns="repeat(6, 1fr)" gap={3} rowGap={12}>
                            {videos.map((video: Video) => (
                                <GridItem key={video.id}><VideoCard video={video} /></GridItem>
                            ))}
                        </Grid>
                    </Box>
                </Flex>
            </ChakraProvider>
        </main>
    )
}