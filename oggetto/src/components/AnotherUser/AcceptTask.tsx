import { Box, Flex, Text } from "@chakra-ui/react"
import { TasksContainer } from "../Lobby/TasksContainer"

export const AcceptTask = () => {
    return (
        <Flex bgColor={'#353535'} backgroundImage={'assets/bg_image.svg'} backgroundSize={'cover'} flexDir={'column'} w={'100%'} p={16} h={'3xl'}>
            <Text fontSize={'3xl'} color={'white'} fontWeight={'bold'}>Еженедельные задания</Text>
            <Box mt={45}>
                <TasksContainer />
            </Box>
        </Flex>
    )
}