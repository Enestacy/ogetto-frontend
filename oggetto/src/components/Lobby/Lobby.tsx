import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { TasksContainer } from "./TasksContainer"
import { user } from "../../content/User.json"
import { useMemo } from "react"
import { calcNameRank } from "../../utils/helper"
import { Rank } from "../../interfaces/task.interface"
import { ProgressCustom } from "../Progress/Progress"

export const Lobby = () => {
    const rank: Rank = useMemo(() => {
        return calcNameRank(user.points)
    }, [user])
    return (
        <Flex mt={7} gap={10} flexDir={'column'}>
            <Box px={10}>
                <Box maxW={'2xl'}>
                    <Text variant={'lobby_title_hello'}>{rank.lobby_title.hello}</Text>
                    <Text variant={'lobby_title_hello'}>{rank.name}</Text>
                    <Text variant={'lobby_title_tasks'} >{rank.lobby_title.tasks}</Text>
                </Box>
                <TasksContainer />
            </Box>
            <Box bgColor={'black'} w={'100%'} color={'white'} h={'3xl'} p={10}>
                <Flex flexDir={'row'} justify={'space-between'}>
                    <Box maxW={'2xl'} px={10}>
                        <Text variant={'lobby_title_hello'} >{rank.lobby_title.power}</Text>
                        <Flex flexDir={'column'} w={"60%"} gap={6} mt={5}>
                            <Button variant={'power'}>Создать задание</Button>
                            <Button variant={'power'}>Выполнить задание</Button>
                        </Flex>
                    </Box>
                    <ProgressCustom
                        size={'big'}
                        value={user.points}
                    />
                </Flex>
                <Box maxW={'2xl'} px={10}>
                    <Text variant={'lobby_title_hello'} >Ачивки</Text>
                    <Flex flexDir={'column'} w={"60%"} gap={6} mt={5}>
                        1
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}