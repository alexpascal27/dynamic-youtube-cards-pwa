import React, {useState} from "react";
import {Button} from "@chakra-ui/react";


interface TagProps {
    selectedTag: string;
    name: string;
    onClickFunction: () => void;
    selected: boolean;
}

export const Tag: React.FC<TagProps> = ({ name, onClickFunction, selected, selectedTag }) => {
    const [isSelected, setIsSelected] = useState(selected);

    const handleClick = () => {
        if(name != selectedTag) {
            setIsSelected(!isSelected);
            onClickFunction();
        }
    };

    return (
        <Button
            onClick={handleClick}
            bg= { isSelected ? "grey.900" : "white" }
            size="sm"
            color= { isSelected ? "white" : "grey.900" }
            px="2"
            _hover={{ bg: 'gray.700' }}
        >
            {name}
        </Button>
    );
};
