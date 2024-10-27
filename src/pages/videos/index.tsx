import {gql, TypedDocumentNode, useLazyQuery, useQuery, useSuspenseQuery} from "@apollo/client";
import {Box, Button, ChakraProvider, Flex, Grid, GridItem} from "@chakra-ui/react"
import Header from "@/components/header";
import Sidebar from "@/components/side-bar";
import Videos from "@/components/videos";
import Tag from "@/components/tags";
import { useState } from "react";
import { TagCategory } from "@/types/tag-category";

export default function VideosPage() {
    const [selectedTag, setSelectedTag] = useState(TagCategory.All);

    const handleTagClick = (tag: TagCategory) => {
        setSelectedTag(tag);
    };

    return (
        <main style={{backgroundColor: 'black'}}>
            <ChakraProvider>
                <Header />
                <Flex>
                    <Sidebar />
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
                        <Videos tag={selectedTag}/>
                    </Box>
                </Flex>
            </ChakraProvider>
        </main>
    )
}