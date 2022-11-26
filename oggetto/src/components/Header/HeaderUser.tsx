import { Box, Flex, Text } from "@chakra-ui/react"
import { user } from "../../../src/content/User.json"

export const HeaderUser = () => {
    return (
        <Flex align={'center'} gap={2}>
            <Box bgColor={'red'} borderRadius={100} h={10} w={10} />
            <Flex flexDir={'column'}>
                <Text>{`${user.firstName} ${user.lastName}`}</Text>
                <Text>{user.rank}</Text>
            </Flex>
        </Flex>
    )
}