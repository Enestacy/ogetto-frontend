import { Box, Flex } from "@chakra-ui/react"
import { Task as TypeTask } from "../../interfaces/task.interface"
import { Task } from "./Task"
import { tasks } from "../../../src/content/Tasks.json"

export const TasksContainer = () => {
    return (
        <Flex gap={5} mt={5}
        >{tasks.map((item) => <Task key={item.code} task={item} />)}</Flex>
    )
}