import { Box, Flex, Text } from "@chakra-ui/react"
import { Rank } from "../../interfaces/task.interface"

export const HeaderUser = ({ user, rank }: { user: any, rank: Rank }) => {
    return (
        <Flex align={'center'} gap={2}>
            <Box bgColor={'red'} borderRadius={100} h={10} w={10} />
            <Flex flexDir={'column'}>
                <Text>{`${user.firstName} ${user.lastName}`}</Text>
                <Text>{rank.name}</Text>
            </Flex>
        </Flex>
    )
}