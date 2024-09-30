import {ApolloClient, ApolloProvider, NormalizedCacheObject, useLazyQuery, useQuery} from "@apollo/client";
import {videoSearchTagsQuery} from "@/config/graphql-queries";
import {TAGS, Tags} from "@/config/tags";
import React, {useEffect, useState} from "react";
import createApolloClient from "../../../apollo-client";
import {InferGetStaticPropsType} from "next";
import {Box, ChakraProvider, Flex, Grid, GridItem} from "@chakra-ui/react";
import Header from "@/components/header";
import Sidebar from "@/components/side-bar";
import {Tag} from "@/components/tag";
import {Video} from "@/types/videos";
import {VideoCard} from "@/components/video-card/video-card";

let client: ApolloClient<NormalizedCacheObject>;

export async function getStaticProps() {
    const initialTag: string = Tags.ALL;
    client = createApolloClient();
    const { data } = await client.query({
        query: videoSearchTagsQuery,
        variables: {tag: initialTag}
    });;


    
    return {
        props: {
            initialTag: initialTag,
            videos: videos
        }
    };
}

async function fetchVideos(tag: string): Promise<Video[]> {

    return data.videoSearch;
}

export default function VideosPage() {
    const initialTag: string = Tags.ALL; 

    const {loading, data, error, fetchMore} = useQuery(videoSearchTagsQuery, {
        variables: {tag: initialTag},
        notifyOnNetworkStatusChange: true
    });

    const videos = data?.videoSearch || [];

    const [selectedTag, setSelectedTag] = useState(initialTag);
    const [videosList, setVideoList] = useState(videos);

    const handleTagClick = (tag: string) => {
        if (tag !== selectedTag) {
            setSelectedTag(tag);
            fetchMore({variables: {tag}}).then(r => setVideoList(r));
        }
    };

    return (
        <main style={{backgroundColor: 'black'}}>
            <ChakraProvider>
                <Header/>
                <Flex>
                    <Sidebar/>
                    <Box flex="1">
                        <Flex mt="4" mb="8" wrap="wrap" gap="3">
                            {TAGS.map((tag) => (
                                <Tag
                                    key={tag}
                                    name={tag}
                                    onClickFunction={() => handleTagClick(tag)}
                                    selected={selectedTag === tag}
                                    selectedTag={selectedTag}
                                />
                            ))}
                        </Flex>
                        <Grid templateColumns="repeat(6, 1fr)" gap={3} rowGap={12}>
                            {videosList.map((video: Video) => (
                                <GridItem key={video.id}><VideoCard video={video}/></GridItem>
                            ))}
                        </Grid>
                    </Box>
                </Flex>
            </ChakraProvider>
        </main>
    );
}