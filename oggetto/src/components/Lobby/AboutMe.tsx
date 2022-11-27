import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";

export const AboutMe = ({ about }: { about: string }) => {
    return (
        <Box>
            <Flex gap={6} justifyContent={"row"}>
                <Text variant={"lobby_inform_title"}>
                    Обо мне
                    <IconButton
                        ml={10}
                        borderRadius={100}
                        aria-label="arrow"
                        icon={<Image src={"assets/change.png"} />}
                    />
                </Text>
            </Flex>
            <Text>{about}</Text>
        </Box>
    );
};
