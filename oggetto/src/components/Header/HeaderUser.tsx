import { Box, Flex, Text } from "@chakra-ui/react"
import { Rank } from "../../interfaces/task.interface"
import { User } from "../../interfaces/user.interface"

export const HeaderUser = ({ user, rank }: { user: User, rank: Rank }) => {
    return (
        <Flex align={'center'} gap={2} mt={2}>
            <Box backgroundSize={"cover"} backgroundImage={'url(assets/images/avatar_1.png)'} borderRadius={100} h={16} w={16} />
            <Flex flexDir={'column'}>
                <Text fontWeight={'bold'} fontSize={'lg'}>{`${user.firstName} ${user.lastName}`}</Text>
                <Text>{rank.name}</Text>
            </Flex>
        </Flex>
    )
}