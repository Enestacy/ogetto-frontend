import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { Tag } from "../../interfaces/task.interface";
import { TagsContainer } from "../People/TagsContainer";

export const LobbyTags = ({ userTags }: { userTags: Tag[] }) => {
    const handleTagsClick = () => {
        console.log("click");
    };
    return (
        <Box mt={10}>
            <Flex gap={6} justifyContent={"row"}>
                <Text variant={"lobby_inform_title"}>
                    Ваши интересы
                    <IconButton
                        ml={10}
                        onClick={handleTagsClick}
                        borderRadius={100}
                        aria-label="arrow"
                        icon={<Image src={"assets/change.png"} />}
                    />
                </Text>
            </Flex>
            <TagsContainer tags={userTags} />
        </Box>
    );
};
