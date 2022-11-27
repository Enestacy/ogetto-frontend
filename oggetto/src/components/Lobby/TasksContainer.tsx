import { Flex } from "@chakra-ui/react"
import { Task as TypeTask } from "../../interfaces/task.interface"
import { Task } from "./Task"
import { useEffect, useState } from "react"
import { getTasks } from "../../services/api/dataServices"

export const TasksContainer = () => {
    const [tasks, setTasks] = useState<TypeTask[]>([])

    const getData = async () => {
        const dataTasks = await getTasks(localStorage.getItem("id") || '')
        const t = JSON.parse(dataTasks)
        setTasks(t.Tasks)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Flex gap={5} mt={5}
        >{tasks.length && tasks.map((item) => <Task key={item.code} task={item} />)}</Flex>
    )
}