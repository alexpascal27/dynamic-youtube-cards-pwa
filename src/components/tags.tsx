import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface TagsProps {
    selectedTag: string;
    name: string;
    onClick: () => void;
}

export default function Tag({selectedTag, name, onClick}: TagsProps) {
    const selected = name == selectedTag;

    return (
        <Button 
            bg= { selected ? "grey.900" : "white" }
            size="sm" 
            color= { selected ? "white" : "grey.900" }
            px="2" 
            onClick={onClick}
            _hover={{ bg: 'gray.700' }}>
                {name}
        </Button>
    );
}