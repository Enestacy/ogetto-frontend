import { Box, Container, Flex, Image, Text } from "@chakra-ui/react"
import { Task as TypeTask } from "../../interfaces/task.interface"

type Props = {
    task: TypeTask
}

export const Task = ({ task }: Props) => {
    return (
        <Container variant={task.done ? 'task_done' : 'task'}>
            <Flex justify={'space-between'} align={'center'}>
                <Flex flexDir={'row'} align="center" gap={2}>
                    <Image src={`/assets/point${task.done ? '_black' : ''}.png`} />
                    <Text>{task.point} points</Text>
                </Flex>
                {task.done ? <Container w={24} bgColor={'black'} color={'white'} variant={'task_tag'}>
                    DONE
                </Container> : <Text>{task.code}</Text>}
            </Flex>
            <Box h={'100%'}>
                <Text variant={'task_title'}>
                    {task.title}
                </Text>
                <Container variant={'task_description'}>
                    <Text variant={'task_description'}>{task.description}</Text>
                </Container>
            </Box>
            <Flex>
                <Container variant={'task_tag'} bgColor={task.done ? 'white' : 'main'}>
                    #{task.Tag.title}
                </Container>
                <Container variant={'task_tag'} bgColor={'black'} color={'white'}>
                    #{task.category}
                </Container>
            </Flex>
        </Container>
    )
}