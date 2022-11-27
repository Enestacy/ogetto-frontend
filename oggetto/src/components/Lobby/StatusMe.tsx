import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";

export const StatusMe = ({ status }: { status: string }) => {
    return (
        <Box mb={10}>
            <Flex gap={6} justifyContent={"row"}>
                <Text variant={"lobby_inform_title"}>
                    Мой статус
                    <IconButton
                        ml={10}
                        borderRadius={100}
                        aria-label="arrow"
                        icon={<Image src={"assets/change.png"} />}
                    />
                </Text>
            </Flex>
            <Flex flexDir={"row"} align={"center"}>
                {status && <Image src={`assets/status_${status}.png`} />}
                <Text ml={5}>{status}</Text>
            </Flex>
        </Box>
    );
};
