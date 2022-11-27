import { Box, Button, Container, Flex, Image, Text, useDisclosure } from "@chakra-ui/react"
import { Task as TypeTask } from "../../interfaces/task.interface"
import { ModalInputCode } from "../modal/ModalInputCode"

type Props = {
    task: TypeTask
    isDone: boolean
    isMyTask: boolean
}

export const Task = ({ task, isDone, isMyTask }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleTaskClick = (task: TypeTask) => {
        if (isMyTask) return
        onOpen()
    }

    return (
        <Button variant={'open_task'} cursor={isMyTask ? 'default' : 'pointer'} onClick={() => handleTaskClick(task)}>
            <ModalInputCode isOpen={isOpen} onClose={onClose} task={task} />
            <Container variant={isDone ? 'task_done' : 'task'}>
                <Flex justify={'space-between'} align={'center'}>
                    <Flex flexDir={'row'} align="center" gap={2}>
                        <Image src={`/assets/point${isDone ? '_black' : ''}.png`} />
                        <Text>{task.point} points</Text>
                    </Flex>
                    {isDone ? <Container w={24} bgColor={'black'} color={'white'} variant={'task_tag'}>
                        DONE
                    </Container> : (
                        isMyTask ?
                            <Text>{task.code}</Text> :
                            <Container w={24} bgColor={'black'} color={'white'} variant={'task_tag'}>
                                CODE
                            </Container>
                    )}
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
                    <Container variant={'task_tag'} bgColor={isDone ? 'white' : 'main'}>
                        #{task.Tag.title}
                    </Container>
                    <Container variant={'task_tag'} bgColor={'black'} color={'white'}>
                        #{task.category}
                    </Container>
                </Flex>
            </Container>
        </Button>

    )
}