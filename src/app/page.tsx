"use client";
import {Box, ChakraProvider, Flex} from "@chakra-ui/react"
import Header from "@/components/header";
import Sidebar from "@/components/side-bar";
import Videos from "@/components/videos";
import Tag from "@/components/tags";
import { useState } from "react";
import { TagCategory } from "@/types/tag-category";
import DemoDynamicVideos from "@/components/demo-dynamic-videos";

export default function Home() {
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
                <DemoDynamicVideos />
            </ChakraProvider>
        </main>
    )
}